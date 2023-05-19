export class DxMatrix extends HTMLElement {

    matrixHtml: string = '';
    matrixName: string = '';
    showMatrix: any;
    entityGroup1: any[] = [];
    entityGroup2: any[] = [];
    entity1PaddingData: any;
    entity2PaddingData: any;
    entity2Targets: any;
    valueComputersKeys: string[];
    valueComputersFullData: any;
    matrixSourceTargetData: any;
    transposeButtonText: string = 'Transpose Matrix';

    constructor() {
        super();
        this.initializeData();
        this.createMatrix();
    }

    get matrix(): any {
        let _data = this.getAttribute('matrix')
        return JSON.parse(_data ?? '{}')
    }

    set matrix(value: any) {
        this.setAttribute('matrix', JSON.stringify(value));
        this.initializeData();
        this.createMatrix();
    }


    initializeData() {
        this.transposeButtonText = 'Transpose Matrix';
        this.valueComputersKeys = [];
        this.valueComputersKeys = [...Object.keys(this.matrix.data)];
        this.matrixSourceTargetData = this.matrix.data[this.valueComputersKeys[0]];
        this.valueComputersFullData = this.matrix.data;
        this.matrixName = this.matrix.name;
        this.entityGroup1 = this.matrix.entity1PaddingColumns;
        this.entityGroup2 = this.matrix.entity2PaddingColumns;
        this.entity1PaddingData = this.matrix.entity1PaddingData;
        this.entity2PaddingData = Object.values(this.matrix.entity2PaddingData);
        this.entity2Targets = Object.keys(this.matrix.entity2PaddingData);
    }

    initializeTransposeData() {
        this.transposeButtonText = 'Original Matrix';
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

    setDropdownValues() {
        const dropdown = document.getElementById('myDropdown') as HTMLSelectElement;
        if (dropdown) {
            this.valueComputersKeys.forEach((key, index) => {
                const option = document.createElement('option');
                option.value = key;
                option.textContent = key;
                dropdown.appendChild(option);
                if (index === 0) {
                    dropdown.value = key;
                }
            });
            dropdown.addEventListener('change', (event) => {
                const target = event.target as HTMLSelectElement;
                this.setMatrixSourceTargetData(target.value);
            });
        }
    }

    setTransposeButtonListener() {
        const dropdown = document.getElementById('transposeButton') as HTMLElement;
        dropdown.addEventListener('click', (event) => {
            this.calculateMatrixTranspose();
        });
    }

    setMatrixSourceTargetData(key: string) {
        this.matrixSourceTargetData = this.valueComputersFullData[key];
        this.createMatrix();
    }


    createMatrix() {
        if (!this.matrix) return;
        this.matrixHtml = `<style>@import url("https://maxcdn.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css");.flex{display: flex}</style>`;
        this.showMatrix = document.getElementById('showMatrix');
        this.matrixHtml += this.setMatrixButtonOptions();
        this.setDropdownValues();
        this.matrixHtml += `<table  style= "border-spacing: 0;width: 100%;border: 1px solid #ddd;border-collapse: collapse" class="mt-2"><tbody`;
        this.matrixHtml += this.createHeadersAndPropertiesString();
        this.matrixHtml += `</tbody></table>`
        this.innerHTML = this.matrixHtml;
        this.setTransposeButtonListener();
        //this.setDropdownValues()
    }

    setMatrixButtonOptions(): string {
        let buttonOptions = ``;
        buttonOptions += `<div class="flex">
                         <select id="myDropdown" class="generic-btn select">
                          </select>
                          <button id="transposeButton" class="ml-1 generic-btn">${this.transposeButtonText}</button>
                         </div>`
        return buttonOptions
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
            rightHeaders += `<th style="${style}" id="${column.id}" class="td-general-styling">${column.name}</th>`
            // iterate through the generated data for this column and add it as <th>
            let v = this.extractValuesAtTheSamePropertyInJson(this.entity2PaddingData, column.id);
            v.forEach(data => {
                const style = Object(data).style ? Object(data)?.style : "";
                rightHeaders += `<th  style="${style}" class="td-general-styling"><span>${Object(data).value}</span></th>`
            })
            rightHeaders += `</tr>`;
        });
        //vertical header
        leftHeaders += `<tr style="border-top: 1px solid #ddd">`
        this.entityGroup1.forEach(column => {
            const style = column.nameStyle ? column?.nameStyle : "";
            leftHeaders += `<td style="${style}" id="${column.id}" class="td-general-styling">${column.name}</td>`
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
            this.createMatrix();
        } else {
            this.initializeData();
            this.createMatrix();
        }
    }

}