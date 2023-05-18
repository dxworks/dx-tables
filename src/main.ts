// Define the interface for external module
import {tabs} from './tabs'
// @ts-ignore
import {DxTable} from './table/table'

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
        tab.textContent = module.name;
        tab.addEventListener('click', () => showTabContent(index));
        navTabs?.appendChild(tab);
    });

    // Show the first tab
    showTabContent(0);
}

// Show the selected tab content and hide the others
function showTabContent(index: number) {
    const tabContent = document.getElementById('tab-content');
    tabContent!.innerHTML = `
<dx-table table='${JSON.stringify(JSON.parse(tabs[index]).data)}'></dx-table>`;
}

customElements.define('dx-table', DxTable);
generateTabs()
