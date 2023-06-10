
function isFalsy(a: any) {
    return !a || Object.keys(a).length === 0
}

export class DxTable extends HTMLElement {

    columnCount = 0;
    name: string;
    dataCopy: any = [];
    data: any = []
    sortArray: any[] = [];
    content = ``;
    columns: any[] = []
    flattenedColumns: any
    lowLevelColumnHeaders: any = [];

    constructor() {
        super();
        this.data = Object.values(this.table.data);
        this.dataCopy = [...this.data];
        this.columns = this.table.columns;
        this.name = this.table.name;
        this.flattenedColumns = this.setInitialSortStates(this.flattenJSON(this.columns, 0));
        this.lowLevelColumnHeaders = this.getLowLevelColumns();
    }

    // Define the input property for the data
    static get observedAttributes() {
        return ['table'];
    }

    // Define a getter/setter for the data property
    get table(): any {
        let _data = this.getAttribute('table')
        return JSON.parse(_data ?? '{}')
    }

    set table(value: any) {
        this.setAttribute('table', JSON.stringify(value));
        this.createTable();
    }

    connectedCallback() {
        this.createTable();
    }

    getLowLevelColumns() {
        return this.flattenedColumns.filter(column => column.level === this.flattenedColumns[this.flattenedColumns.length - 1].level);
    }

    createTable() {
        if (!this.table) return;

        this.columnCount = 0;
        this.content += `<table style=" border-collapse: collapse;">`;
        //create table headers
        this.content += this.createTableHeaders();
        //populate table
        this.content += this.addTableColumns();
        this.content += `</table>`;
        // @ts-ignore
        this.innerHTML = this.content;
        this.setSortColumnIds();
        this.enableDragAndDrop();
    }

    createTableHeaders(): string {
        let cols = this.flattenedColumns;

        //sort the returned array so that the columns are in the right order
        cols.sort((a: any, b: any) => a.level - b.level);
        const highestLevel = cols[cols.length - 1].level;
        let headers = '<thead>';
        //generate the html for each header
        for (const h of cols) {
            if (!h.column.childrenColumns.length) this.columnCount += 1;
            //first we calculate the colspan: we start from the children array and calculate each
            //child's children until their children array is empty
            const colspan = this.countEmptyChildrenColumns(h.column);
            // Start a new row if this is the first header
            if (headers === '') {
                headers += '<tr>';
            }
            // Start a new row if this header has a higher header level than the previous header
            if (headers !== '' && h?.level > cols[cols.indexOf(h) - 1]?.level) {
                headers += '</tr>';
            }
            // Generate the header cell HTML
            let style = h.level === highestLevel ? 'border-bottom:1px solid;' : '';
            if (h.column.borderL) {
                style += 'border-left: 1px solid'
            }
            if (h.column.borderR) {
                style += 'border-right: 1px solid'
            }
            if (h.column.borderB) {
                style += 'border-bottom: 1px solid'
            }
            const nameValue = h.column?.name !== undefined && h.column?.name !== "" ? h.column?.name : "";
            if (h.column.description) {
                headers += `<th
                        style="${style}"
                       colspan="${colspan}" id="${h.column?.id}"
                       scope="colgroup">
                        <span style="${h.column?.nameStyle}">${nameValue}</span>`;
                headers += `<div class="center-column-text">  <p  style= "${h.column?.descriptionStyle};text-align:center;font-size: 13px;font-weight:500; margin-top:0;">
                        ${h.column.description}</p>`
                if (this.isColumnSortable(h.column) && !h.column.childrenColumns.length) {
                    const iconClass = this.getSortIconClassBasedOnColumnState(h);
                    headers += `<i class="${iconClass}" style="margin-left: 1rem"  id="${h.column?.id}+i"></i></div>`;
                } else {
                    headers += `</div></th>`;
                }
            } else {
                headers += `<th
                       style="${style};padding:0.3rem 0.5rem"
                       colspan="${colspan}" id="${h.column?.id}"
                       scope="colgroup">
                       <div  style="display: flex; text-align: center; justify-content: center">
                       <span style="${h.column?.nameStyle}">${nameValue}</span>`
                if (this.isColumnSortable(h.column) && !h.column.childrenColumns.length) {
                    const iconClass = this.getSortIconClassBasedOnColumnState(h);
                    headers += `<i class="${iconClass}" style="margin-left: 1rem" id="${h.column?.id}+i"></i></div>`;
                } else {
                    headers += `</div></th>`;
                }
            }
        }
        // Close any remaining open row
        if (headers !== '') {
            headers += '</tr>';
        }
        return headers + '</thead>';
    }

// that returns an array containing all the extracted objects that the initial json has
// and gives them a level according to their depth basically (header level

    flattenJSON(json: any, level = 1): any[] {
        let flattened: { column: any, level: number }[] = [];
        const flatten = (obj: any, level: any) => {
            flattened.push({column: obj, level: level});
            if (obj.childrenColumns && obj.childrenColumns.length > 0) {
                obj.childrenColumns.forEach((child: any) => {
                    flatten(child, level + 1);
                });
            }
        };
        json.forEach((obj: any) => {
            flatten(obj, level);
        });
        return flattened;
    }

    countEmptyChildrenColumns(obj: any): number {
        // base case: no children, so return 0
        if (!obj.childrenColumns || obj.childrenColumns.length === 0) {
            return 1;
        }
        let emptyCount = 0;
        // traverse each child recursively
        for (const childObj of obj.childrenColumns) {
            // const childObj = this.columns.find(item => item.id === childId);
            if (childObj && (!childObj.childrenColumns || childObj.childrenColumns.length === 0)) {
                // count this child if it has empty childrenColumns array
                emptyCount++;
            } else {
                // count the empty children of this child recursively
                emptyCount += this.countEmptyChildrenColumns(childObj);
            }
        }
        return emptyCount;
    }


    addTableColumns(): string {
        let columns = '<tbody id="table-body">';
        let singleColumn = '';
        this.data?.forEach(data => {
            singleColumn = `<tr style="border-bottom: 1px solid #cdcdcd" class="draggable" draggable="true">`;
            if (!Object.entries(data).length) {
                singleColumn += this.insertEmptyRow();
            } else {
                singleColumn += this.createTableData(data);
            }
            singleColumn += `</tr>`;
            columns += singleColumn;
        });
        return columns + '</tbody>';
    }

    createTableData(data: any): string {
        let singleColumn = '';
        // Iterate through lowLevelColumnHeaders to keep the correct column order
        this.lowLevelColumnHeaders.forEach(header => {
            const key = header.column.id;
            const value = data[key];

            if (value) {
                const style = value.style ? value.style : "";
                if (value.value.hasOwnProperty('url')) {
                    singleColumn += `<td style="${style}" class="td-general-styling"><a href="${value.url}" target="_blank" >${value.displayValue}</a></td>`;
                } else {
                    if (value.value === '0') {
                        singleColumn += `<td class="td-general-styling"><span class="d-none">${value.value}</span></td>`;
                    } else {
                        singleColumn += `<td style="${style}" class="td-general-styling"><span>${value.value}</span></td>`;
                    }
                }
            } else {
                //  empty cell if no data found
                singleColumn += `<td class="td-general-styling"></td>`;
            }
        });

        return singleColumn;
    }

    insertEmptyRow(): string {
        let emptyRow = '';
        for (let i = 0; i < this.columnCount; i++) {
            emptyRow += `<td class="td-general-styling" style="height: 1.2rem"></td>`;
        }
        return emptyRow;
    }

//TABLE SORTING

    setInitialSortStates(columns: any[]) {
        return columns.map(column => {
            if (!column.sortState) return {
                sortState: 'none',
                ...column,
            }; else return column;
        });
    }

    setSortColumnIds() {
        for (const h of this.flattenedColumns) {
            if (this.isColumnSortable(h.column) && !h.column.childrenColumns.length) {
                let ident = `${h.column?.id}+i`
                let icon = document.getElementById(ident); // Select the icon using the class name
                icon!.addEventListener('click', () => this.sortColumn(h));
            }
        }
    }

    isColumnSortable(column: any): boolean {
        return column.sortable !== false;
    }


    getSortIconClassBasedOnColumnState(column: any): string {
        switch (column.sortState) {
            case "none": {
                return 'fa fa-sort';
            }
            case "asc": {
                return 'fa fa-sort-up'
            }
            case "desc": {
                return 'fa fa-sort-down'
            }
        }
        return ''
    }


    sortColumn(h: any) {
        const column = this.flattenedColumns.find((col: any) => col === h);
        switch (column.sortState) {
            case "none": {
                column.sortState = 'asc';
                this.addColumnToSortArray(column);
                break;
            }
            case "asc": {
                column.sortState = 'desc';
                this.addColumnToSortArray(column);
                break;
            }
            case "desc": {
                column.sortState = 'none';
                this.deleteColumnFromSortArray(column);
                break;
            }
        }
        this.data = this.sortArrayByCriteria([...this.dataCopy], this.sortArray);
        this.createTable();
    }

    deleteColumnFromSortArray(column: any) {
        const columnToDeleteIdx = this.sortArray.indexOf(column);
        if (columnToDeleteIdx !== -1) {
            this.sortArray.splice(columnToDeleteIdx, 1);
        }
    }

    addColumnToSortArray(column: any) {
        let columnToSort = this.sortArray.find(c => JSON.stringify(c.column) === JSON.stringify(column.column));
        if (!columnToSort) {
            this.sortArray.push(column);
        }
    }

    sortArrayByCriteria(data: any[], sortCriteria: any[]) {
        return data.sort((a, b) => {
            if (isFalsy(a) && isFalsy(b))
                return 0
            if (isFalsy(a))
                return -1
            if (isFalsy(b))
                return 1
            for (let i = 0; i < sortCriteria.length; i++) {
                const {column, sortState} = sortCriteria[i];
                let valueA = a[column.id].value;
                let valueB = b[column.id].value;
                let comparison = 0;
                if (column.type === 'Date') {
                    const dateA = new Date(valueA);
                    const dateB = new Date(valueB);
                    comparison = dateA.getTime() - dateB.getTime();
                } else if (column.type === 'String') {
                    //for the empty rows that come as {}
                    valueA = valueA != undefined ? valueA : '';
                    valueB = valueB != undefined ? valueB : '';
                    comparison = valueA.localeCompare(valueB);
                } else {
                    comparison = parseInt(valueA) - parseInt(valueB);
                }

                if (sortState === 'desc') {
                    comparison = comparison * -1;
                }

                if (comparison !== 0) {
                    return comparison;
                }
            }

            return 0;
        });
    }

    enableDragAndDrop(): void {
        // @ts-ignore
        const tableBody = document.getElementById('table-body');
        let dragSrcElement: HTMLElement | null;

        function handleDragStart(this: HTMLElement, e: DragEvent): void {
            dragSrcElement = this;
            e.dataTransfer!.effectAllowed = 'move';
            e.dataTransfer!.setData('text/plain', ''); // Set an empty data to make it draggable in Firefox
        }

        function handleDragOver(this: HTMLElement, e: DragEvent): boolean | undefined {
            if (e.preventDefault) {
                e.preventDefault();
            }
            if (this === dragSrcElement) return;
            this.classList.add('over');
            e.dataTransfer!.dropEffect = 'move';
            return false;
        }

        function handleDragLeave(this: HTMLElement): void {
            this.classList.remove('over');
        }

        function handleDrop(this: HTMLElement, e: DragEvent): boolean | undefined {
            if (e.stopPropagation) {
                e.stopPropagation();
            }
            if (dragSrcElement === this) return;

            const targetRowRect = this.getBoundingClientRect();
            const dropPosition = e.clientY - targetRowRect.top;

            // Remove the dragged row from its current position
            dragSrcElement!.parentNode!.removeChild(dragSrcElement!);

            // Check if the drop position is in the lower half of the row
            if (dropPosition > targetRowRect.height / 2) {
                // Insert the dragged row after the row it was dropped on
                this.parentNode!.insertBefore(dragSrcElement!, this.nextSibling);
            } else {
                // Insert the dragged row before the row it was dropped on
                this.parentNode!.insertBefore(dragSrcElement!, this);
            }

            return false;
        }

        function handleDragEnd(this: HTMLElement): void {
            this.classList.remove('over');
        }

        function addDraggableEvents(element: HTMLElement): void {
            element.addEventListener('dragstart', handleDragStart, false);
            element.addEventListener('dragover', handleDragOver, false);
            element.addEventListener('dragleave', handleDragLeave, false);
            element.addEventListener('drop', handleDrop, false);
            element.addEventListener('dragend', handleDragEnd, false);
        }

        const rows = tableBody?.querySelectorAll('.draggable') || [];
        [].forEach.call(rows, addDraggableEvents);
    }
}
