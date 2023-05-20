export class DxMatrix extends HTMLElement {

    matrixHtml: string = '';
    matrixName: string = '';
    showMatrix: any;
    entityGroup1: any[] = [];
    entityGroup2: any[] = [];
    entity1PaddingData: any;
    entity1PaddingDataCopy: any;
    entity2PaddingData: any;
    entity2PaddingDataCopy: any;
    entity2Targets: any;
    valueComputersKeys: string[];
    valueComputersFullData: any;
    matrixSourceTargetData: any;
    transposeButtonText: string = 'Transpose Matrix';

    constructor() {
        super();
        this.initializeData();
    }

    connectedCallback() {
        this.createMatrix()
        this.setDropdownInitialValues();
        this.setDropdownListener();
        this.setTransposeButtonListener();
        this.updateMatrix();
    }

    get matrix(): any {
        let _data = this.getAttribute('matrix')
        return JSON.parse(_data ?? '{}')
    }

    set matrix(value: any) {
        this.setAttribute('matrix', JSON.stringify(value));
        this.initializeData();
        this.updateMatrix();
        this.setDropdownInitialValues();
    }


    initializeData() {
        this.transposeButtonText = 'Transpose Matrix';
        let transposeButton = document.getElementById('transposeButton') as HTMLButtonElement;
        if (transposeButton) transposeButton.innerText = this.transposeButtonText;

        this.valueComputersKeys = [];
        this.valueComputersKeys = [...Object.keys(this.matrix.data)];
        this.matrixSourceTargetData = this.matrix.data[this.valueComputersKeys[0]];
        this.valueComputersFullData = this.matrix.data;
        this.matrixName = this.matrix.name;
        this.entityGroup1 = this.matrix.entity1PaddingColumns.map(e => ({...e, sortState: 'none'}));
        this.entityGroup2 = this.matrix.entity2PaddingColumns.map(e => ({...e, sortState: 'none'}));

        this.entity1PaddingData = this.matrix.entity1PaddingData;
        this.entity1PaddingDataCopy = JSON.parse(JSON.stringify(this.entity1PaddingData));
        this.entity2PaddingData = Object.values(this.matrix.entity2PaddingData);
        this.entity2PaddingDataCopy = [...this.entity2PaddingData];
        this.entity2Targets = Object.keys(this.matrix.entity2PaddingData);
    }

    initializeTransposeData() {
        this.transposeButtonText = 'Original Matrix';
        let transposeButton = document.getElementById('transposeButton') as HTMLButtonElement;
        if (transposeButton) transposeButton.innerText = this.transposeButtonText;

        this.valueComputersKeys = [];
        this.valueComputersKeys = [...Object.keys(this.matrix.data)];
        this.matrixSourceTargetData = this.matrix.data[this.valueComputersKeys[0]];
        this.valueComputersFullData = this.matrix.data;
        this.matrixName = this.matrix.name;
        this.entityGroup1 = this.matrix.entity2PaddingColumns;
        this.entityGroup2 = this.matrix.entity1PaddingColumns;
        this.entity1PaddingData = this.matrix.entity2PaddingData;
        this.entity2PaddingData = Object.values(this.matrix.entity1PaddingData);
        this.entity2Targets = Object.keys(this.matrix.entity1PaddingData);
    }

    setDropdownInitialValues() {
        const dropdown = document.getElementById('myDropdown') as HTMLSelectElement;
        if (dropdown) {
            // clear existing options
            dropdown.innerHTML = '';
            this.valueComputersKeys.forEach((key, index) => {
                const option = document.createElement('option');
                option.value = key;
                option.textContent = key;
                dropdown.appendChild(option);
                if (index === 0) {
                    dropdown.value = key;
                }
            });
        }
    }

    setDropdownListener() {
        const dropdown = document.getElementById('myDropdown') as HTMLSelectElement;
        dropdown!.addEventListener('change', (event) => {
            const target = event.target as HTMLSelectElement;
            this.setMatrixSourceTargetData(target.value);
        });
    }

    setTransposeButtonListener() {
        const dropdown = document.getElementById('transposeButton') as HTMLElement;
        dropdown.addEventListener('click', (event) => {
            this.calculateMatrixTranspose();
        });
    }

    setMatrixSourceTargetData(key: string) {
        this.matrixSourceTargetData = this.valueComputersFullData[key];
        this.updateMatrix()
    }

    createMatrix() {
        if (!this.matrix) return;
        this.innerHTML = this.setMatrixButtonOptions();
        this.showMatrix = this.ownerDocument.createElement('div');
        this.showMatrix.id = 'showMatrix';
        this.appendChild(this.showMatrix);
    }

    updateMatrix() {
        this.matrixHtml = `<style>@import url("https://maxcdn.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css");.flex{display: flex}</style>`;
        this.matrixHtml += `<table  style= "border-spacing: 0;width: 100%;border: 1px solid #ddd;border-collapse: collapse" class="mt-2"><tbody`;
        this.matrixHtml += this.createHeadersAndPropertiesString();
        this.matrixHtml += `</tbody></table>`;
        if (this.showMatrix) {
            this.showMatrix.innerHTML = this.matrixHtml;
            this.setSortListeners();
        }
    }

    setMatrixButtonOptions(): string {
        let buttonOptions = ``;
        buttonOptions += `<div class="flex">
                     <select id="myDropdown" class="generic-btn select">
                      </select>
                      <button id="transposeButton" class="ml-1 generic-btn">${this.transposeButtonText}</button>
                     </div>`;
        return buttonOptions;
    }

    createHeadersAndPropertiesString(): string {
        let rightHeaders: string = '';
        let leftHeaders: string = '';
        let html = '';
        //horizontal header
        this.entityGroup2.forEach(column => {
            rightHeaders += `<tr>`;
            for (let i = 0; i < this.entityGroup1.length - 1; i++) {
                rightHeaders = rightHeaders + `<th style="width: 10%;"> </th>`
            }
            const style = column.nameStyle ? column?.nameStyle : "";
            /* rightHeaders += `<th style="${style}" id="${column.id}" class="td-general-styling">${column.name}</th>`*/
            if (column.name) {
                const sortIconClass = this.getSortIconClassBasedOnColumnState(column);
                rightHeaders += `<th style="${style}" id="${column.id}" class="td-general-styling">${column.name}<i class="${sortIconClass}" id="sortIcon_${column.id}" style="margin-left: 1rem; cursor: pointer"></i></th>`
            } else {
                rightHeaders += `<th style="${style}" id="${column.id}" class="td-general-styling">${column.name}</th>`
            }
            // iterate through the generated data for this column and add it as <th>
            console.log(this.entity2PaddingData)
            let v = this.extractValuesAtTheSamePropertyInJson(this.entity2PaddingData, column.id);
            v.forEach(data => {
                const style = Object(data).style ? Object(data)?.style : "";
                rightHeaders += `<th  style="${style}" class="td-general-styling"><span>${Object(data).value}</span></th>`
            });
            rightHeaders += `</tr>`;
        });
        //vertical header
        leftHeaders += `<tr style="border-top: 1px solid #ddd">`
        this.entityGroup1.forEach(column => {
            const style = column.nameStyle ? column?.nameStyle : "";
            // leftHeaders += `<td style="${style}" id="${column.id}" class="td-general-styling">${column.name}</td>`
            if (column.name) {
                const sortIconClass = this.getSortIconClassBasedOnColumnState(column);
                leftHeaders += `<td style="${style}" id="${column.id}" class="td-general-styling">${column.name}<i class="${sortIconClass}" id="sortIcon_${column.id}" style="margin-left: 1rem ;cursor: pointer"></i></td>`
            } else {
                leftHeaders += `<td style="${style}" id="${column.id}" class="td-general-styling">${column.name}</td>`
            }
        });
        leftHeaders += `</tr>`
        leftHeaders += this.getEntity1PaddingData();
        html += rightHeaders + leftHeaders;
        return html;
    }

    getEntity1PaddingData(): string {
        let paddingData = '';
        Object.keys(this.entity1PaddingData).forEach(key => {
            let entityData = `<tr>`;
            let keyData = this.entity1PaddingData[key];
            Object.values(keyData).forEach(d => {
                const style = Object(d).style ? Object(d)?.style : "";
                entityData += `<td  style="${style}" class="td-general-styling"><span>${Object(d).value}</span></td>`
            });
            entityData += this.getLinkedData(key);
            paddingData += entityData;
        })
        return paddingData;
    }

    getLinkedData(sourceId: any): string {
        let linkedData = ``;
        this.entity2Targets.forEach(targetId => {
            const data = this.matrixSourceTargetData.find(data => data.target === targetId && data.source === sourceId);
            if (data) {
                linkedData += `<td style="${data?.style}" class="td-general-styling">${data.value}</td>`
            }
        });
        return linkedData
    }


    extractValuesAtTheSamePropertyInJson = (data: any, prefix: string) => {
        const values: any[] = [];
        for (const key in data) {
            if (data.hasOwnProperty(key)) {
                const innerData = data[key];
                for (const innerKey in innerData) {
                    if (innerData.hasOwnProperty(innerKey) && innerKey.startsWith(prefix)) {
                        values.push(innerData[innerKey]);
                    }
                }
            }
        }
        return values;
    };

    calculateMatrixTranspose() {
        const dropdown = document.getElementById('myDropdown') as HTMLSelectElement;
        dropdown.value = this.valueComputersKeys[0];
        if (this.transposeButtonText === 'Transpose Matrix') {
            this.initializeTransposeData();
            this.updateMatrix();
        } else {
            this.initializeData();
            this.updateMatrix();
        }
    }

    //matrix sorting
    setSortListeners() {
        this.entityGroup1.concat(this.entityGroup2).forEach(column => {
            if (column.name) {
                const sortIcon = document.getElementById(`sortIcon_${column.id}`);
                sortIcon!.addEventListener('click', () => {
                    this.resetAllSortStatesExceptCurrentOne(column);
                    switch (column.sortState) {
                        case 'none':
                            column.sortState = 'asc';
                            break;
                        case 'asc':
                            column.sortState = 'desc';
                            break;
                        case 'desc':
                            column.sortState = 'none';
                            break;
                    }
                    this.sortData(column);
                    this.updateMatrix();
                });
            }
        });
    }

    sortData(column: any) {
        const order = column.sortState;
        if (this.entityGroup1.some(col => col.id === column.id)) {
            if (order === 'none') {
                this.entity1PaddingData = JSON.parse(JSON.stringify(this.entity1PaddingDataCopy));
            } else {
                this.entity1PaddingData = this.sortEntity1PaddingData(column.id, order)
            }
         //   this.matrixSourceTargetData = this.matrixSourceTargetData.sort((a, b) => this.sortFunction(a.target, b.target, order));
        } else if (this.entityGroup2.some(col => col.id === column.id)) {

            if (order === 'none') {
                this.entity2PaddingData = [...this.entity2PaddingDataCopy];
            } else {
                this.entity2PaddingData = this.entity2PaddingData.sort((a, b) => this.sortFunction(a[column.id], b[column.id], order));
            }
            console.log(this.entity2PaddingData)
           // this.matrixSourceTargetData = this.matrixSourceTargetData.sort((a, b) => this.sortFunction(a.target, b.target, order));
        }
    }

    sortEntity1PaddingData(property, sortState) {

        const sortOrder = sortState === 'desc' ? -1 : 1;
        const sortedData = Object.fromEntries(
            Object.entries(this.entity1PaddingDataCopy).sort(
                ([, a], [, b]) =>
                    sortOrder *
                    (parseFloat(a[property].value) - parseFloat(b[property].value))
            )
        );

        return sortedData;
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

    resetAllSortStatesExceptCurrentOne(columnToSkip: any) {
        /* this.entityGroup1.concat(this.entityGroup2).forEach(column => {
             if(column.id !== columnToSkip.id) {
                 column.sortState = 'none';
             }
         });*/
    }

    sortFunction(a: any, b: any, order: string): number {
        if (order === 'asc') {
            if (parseInt(a.value) < parseInt(b.value)) return -1;
            if (parseInt(a.value) > parseInt(b.value)) return 1;
            return 0;
        } else if (order === 'desc') {
            if (parseInt(a.value) > parseInt(b.value)) return -1;
            if (parseInt(a.value) < parseInt(b.value)) return 1;
            return 0;
        } /*else {
            return 0;
        }*/
    }
}