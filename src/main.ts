// Define the interface for external module
import {tabs} from './tabs'
// @ts-ignore
import {DxTable} from './table/table'
import {DxMatrix} from "./matrix/matrix";

interface ExternalModule {
    title: string;
    content: string;
}

// Generate tabs and tab content
function generateTabs() {
    const navTabs = document.getElementById('nav-tabs');

    tabs.map(it => JSON.parse(it)).forEach((module, index) => {
        // Create tab
        const tab = document.createElement('a');
        tab.textContent = module.name? module.name : module.data.name;
        tab.addEventListener('click', () => showTabContent(index));
        navTabs?.appendChild(tab);
    });

    // Show the first tab
    showTabContent(0);
}

// Show the selected tab content and hide the others
function showTabContent(index: number) {
    const tabContent = document.getElementById('tab-content');
    if (JSON.parse(tabs[index]).type === 'table') {
        tabContent!.innerHTML = `
            <style>
           .td-general-styling {
                white-space: nowrap;
                text-align: center;
                vertical-align: middle;
            }
           </style>
        <h3 class="gray">${JSON.parse(tabs[index]).name}</h3>
        <dx-table table='${JSON.stringify(JSON.parse(tabs[index]))}'></dx-table>`;
    } else if (JSON.parse(tabs[index]).type === 'matrix') {
        tabContent!.innerHTML = `
           <style>
           .td-general-styling {
                white-space: nowrap;
                text-align: center;
                vertical-align: middle;
            }
           </style>
        <h3 class="gray">${JSON.parse(tabs[index]).name}</h3>
        <dx-matrix matrix='${JSON.stringify(JSON.parse(tabs[index]))}'></dx-matrix>`;
    }
}

customElements.define('dx-table', DxTable);
customElements.define('dx-matrix', DxMatrix);
generateTabs()
