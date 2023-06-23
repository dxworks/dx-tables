const table1 = {
    'name': 'Components_Overview',
    'type': 'table',
    'columns': [{
        'name': '',
        'childrenColumns': [{
            'childrenColumns': [{
                'id': 'component',
                'name': 'Component',
                'nameStyle': 'color: #6c757d;',
                'childrenColumns': []
            }]
        }, {
            'id': 'startedin',
            'name': 'started in',
            'nameStyle': 'font-weight: 400;font-size: 13px;color: #6c757d;',
            'childrenColumns': [{
                'id': 'yyyymmstartedin',
                'type': 'Date',
                'name': 'yyyy-mm',
                'nameStyle': 'font-weight: 400;font-size: 13px;color: #6c757d;',
                'childrenColumns': []
            }]
        }, {
            'id': 'latestchange',
            'name': 'latest \u003cbr\u003e change',
            'nameStyle': 'font-weight: 400;font-size: 13px;color: #6c757d;',
            'childrenColumns': [{
                'id': 'yyyymmlatestchange',
                'type': 'Date',
                'name': 'yyyy-mm',
                'nameStyle': 'font-weight: 400;font-size: 13px;color: #6c757d;',
                'childrenColumns': []
            }]
        }]
    }, {
        'name': 'Files',
        'borderR': true,
        'childrenColumns': [{
            'id': 'files',
            'name': 'files',
            'nameStyle': 'font-weight: 400;font-size: 13px;color: #6c757d;',
            'childrenColumns': [{
                'id': '#files',
                'name': '#',
                'nameStyle': 'font-weight: 400;font-size: 13px;color: #6c757d',
                'childrenColumns': []
            }]
        }, {
            'id': 'importedfiles',
            'name': 'imported \u003cbr\u003e files',
            'nameStyle': 'font-weight: 400;font-size: 13px;color: #6c757d;',
            'childrenColumns': [{
                'id': '#importedfiles',
                'name': '#',
                'nameStyle': 'font-weight: 400;font-size: 13px;color: #6c757d;',
                'childrenColumns': []
            }, {
                'id': '%allimportedfiles',
                'type': 'String',
                'name': '%all',
                'nameStyle': 'font-weight: 400;font-size: 13px;color: #6c757d;',
                'sortable': false,
                'childrenColumns': []
            }]
        }, {
            'id': 'sourcefiles',
            'name': 'source \u003cbr\u003e files',
            'nameStyle': 'font-weight: 400;font-size: 13px;color: #6c757d;',
            'childrenColumns': [{
                'id': '#sourcefiles',
                'name': '#',
                'nameStyle': 'font-weight: 400;font-size: 13px;color: #6c757d;',
                'childrenColumns': []
            }, {
                'id': '%allsourcefiles',
                'type': 'String',
                'name': '%all',
                'nameStyle': 'font-weight: 400;font-size: 13px;color: #6c757d;',
                'sortable': false,
                'childrenColumns': []
            }]
        }, {
            'id': 'activerecentlyfiles',
            'name': 'active \u003cbr\u003e recently',
            'nameStyle': 'font-weight: 400;font-size: 13px;color: #6c757d;',
            'childrenColumns': [{
                'id': '#activerecentlyfiles',
                'name': '#',
                'nameStyle': 'font-weight: 400;font-size: 13px;color: #6c757d;',
                'childrenColumns': []
            }, {
                'id': '%allactiverecentlyfiles',
                'type': 'String',
                'name': '%all',
                'nameStyle': 'font-weight: 400;font-size: 13px;color: #6c757d;',
                'sortable': false,
                'childrenColumns': []
            }]
        }, {
            'id': 'createdrecentlyfiles',
            'name': 'created \u003cbr\u003e recently',
            'nameStyle': 'font-weight: 400;font-size: 13px;color: #6c757d;',
            'borderR': true,
            'childrenColumns': [{
                'id': '#createdrecentlyfiles',
                'name': '#',
                'nameStyle': 'font-weight: 400;font-size: 13px;color: #6c757d;',
                'childrenColumns': []
            }, {
                'id': '%allcreatedrecentlyfiles',
                'type': 'String',
                'name': '%all',
                'nameStyle': 'font-weight: 400;font-size: 13px;color: #6c757d;',
                'sortable': false,
                'borderR': true,
                'childrenColumns': []
            }]
        }]
    }, {
        'name': 'Code Size',
        'borderR': true,
        'childrenColumns': [{
            'id': 'alllinescodesize',
            'name': 'all \u003cbr\u003e lines',
            'nameStyle': 'font-weight: 400;font-size: 13px;color: #6c757d;',
            'childrenColumns': [{
                'id': 'x1000alllinescodesize',
                'name': 'x1000',
                'nameStyle': 'font-weight: 400;font-size: 13px;color: #6c757d;',
                'childrenColumns': []
            }]
        }, {
            'id': 'sourcecodelines',
            'name': 'source \u003cbr\u003e code lines',
            'nameStyle': 'font-weight: 400;font-size: 13px;color: #6c757d;',
            'childrenColumns': [{
                'id': 'x1000sourcecodelines',
                'name': 'x1000',
                'nameStyle': 'font-weight: 400;font-size: 13px;color: #6c757d;',
                'childrenColumns': []
            }, {
                'id': '%allsourcecodelines',
                'type': 'String',
                'name': '%all',
                'nameStyle': 'font-weight: 400;font-size: 13px;color: #6c757d;',
                'sortable': false,
                'childrenColumns': []
            }]
        }, {
            'id': 'growthrecentcodesize',
            'name': 'growth recent',
            'nameStyle': 'font-weight: 400;font-size: 13px;color: #6c757d;',
            'borderR': true,
            'childrenColumns': [{
                'id': 'x1000growthrecentcodesize',
                'name': 'x1000',
                'nameStyle': 'font-weight: 400;font-size: 13px;color: #6c757d;',
                'childrenColumns': []
            }, {
                'id': '%allgrowthrecentcodesize',
                'type': 'String',
                'name': '%all',
                'nameStyle': 'font-weight: 400;font-size: 13px;color: #6c757d;',
                'sortable': false,
                'borderR': true,
                'childrenColumns': []
            }]
        }]
    }, {
        'name': 'Developers',
        'borderR': true,
        'childrenColumns': [{
            'id': 'alldevs',
            'name': 'all \u003cbr\u003e devs',
            'nameStyle': 'font-weight: 400;font-size: 13px;color: #6c757d;',
            'childrenColumns': [{
                'id': '#alldevs',
                'name': '#',
                'nameStyle': 'font-weight: 400;font-size: 13px;color: #6c757d;',
                'childrenColumns': []
            }]
        }, {
            'id': 'activerecentlydevs',
            'name': 'active \u003cbr\u003e recently',
            'nameStyle': 'font-weight: 400;font-size: 13px;color: #6c757d;',
            'childrenColumns': [{
                'id': '#activerecentlydevs',
                'name': '#',
                'nameStyle': 'font-weight: 400;font-size: 13px;color: #6c757d;',
                'childrenColumns': []
            }, {
                'id': '%allactiverecentlydevs',
                'name': '%all',
                'nameStyle': 'font-weight: 400;font-size: 13px;color: #6c757d;',
                'sortable': false,
                'childrenColumns': []
            }]
        }, {
            'id': 'joinedrecentlydevs',
            'name': 'joined \u003cbr\u003e recently',
            'nameStyle': 'font-weight: 400;font-size: 13px;color: #6c757d;',
            'borderR': true,
            'childrenColumns': [{
                'id': '#joinedrecentlydevs',
                'name': '#',
                'nameStyle': 'font-weight: 400;font-size: 13px;color: #6c757d;',
                'childrenColumns': []
            }, {
                'id': '%alljoinederecentlydevs',
                'name': '%all',
                'nameStyle': 'font-weight: 400;font-size: 13px;color: #6c757d;',
                'sortable': false,
                'borderR': true,
                'childrenColumns': []
            }]
        }]
    }, {
        'name': 'Commits',
        'borderR': true,
        'childrenColumns': [{
            'id': 'allcommits',
            'name': 'all \u003cbr\u003e com.',
            'nameStyle': 'font-weight: 400;font-size: 13px;color: #6c757d;',
            'childrenColumns': [{
                'id': '#allcommits',
                'name': '#',
                'nameStyle': 'font-weight: 400;font-size: 13px;color: #6c757d;',
                'childrenColumns': []
            }]
        }, {
            'id': 'recentcommits',
            'name': 'recent \u003cbr\u003e commits',
            'nameStyle': 'font-weight: 400;font-size: 13px;color: #6c757d;',
            'borderR': true,
            'childrenColumns': [{
                'id': '#recentcommits',
                'name': '#',
                'nameStyle': 'font-weight: 400;font-size: 13px;color: #6c757d;',
                'childrenColumns': []
            }, {
                'id': '%allrecentcommits',
                'name': '%all',
                'nameStyle': 'font-weight: 400;font-size: 13px;color: #6c757d;',
                'sortable': false,
                'borderR': true,
                'childrenColumns': []
            }]
        }]
    }, {
        'name': 'Change Volume',
        'borderR': true,
        'childrenColumns': [{
            'id': 'allchurnvolume',
            'name': 'all \u003cbr\u003e churn',
            'nameStyle': 'font-weight: 400;font-size: 13px;color: #6c757d;',
            'childrenColumns': [{
                'id': 'x1000allchurn',
                'name': 'x1000',
                'nameStyle': 'font-weight: 400;font-size: 13px;color: #6c757d;',
                'childrenColumns': []
            }]
        }, {
            'id': 'recentchurnvolume',
            'name': 'recent \u003cbr\u003e churn',
            'nameStyle': 'font-weight: 400;font-size: 13px;color: #6c757d;',
            'borderR': true,
            'childrenColumns': [{
                'id': 'x1000recentchurn',
                'name': 'x1000',
                'nameStyle': 'font-weight: 400;font-size: 13px;color: #6c757d;',
                'childrenColumns': []
            }, {
                'id': '%allrecentchurn',
                'name': '%all',
                'nameStyle': 'font-weight: 400;font-size: 13px;color: #6c757d;',
                'sortable': false,
                'borderR': true,
                'childrenColumns': []
            }]
        }]
    }, {
        'name': 'Tasks',
        'childrenColumns': [{
            'id': 'alltasks',
            'name': 'all \u003cbr\u003e tasks',
            'nameStyle': 'font-weight: 400;font-size: 13px;color: #6c757d;',
            'childrenColumns': [{
                'id': '#alltasks',
                'name': '#',
                'nameStyle': 'font-weight: 400;font-size: 13px;color: #6c757d;',
                'childrenColumns': []
            }]
        }, {
            'id': 'recenttasks',
            'name': 'recent \u003cbr\u003e tasks',
            'nameStyle': 'font-weight: 400;font-size: 13px;color: #6c757d;',
            'childrenColumns': [{
                'id': '#recenttasks',
                'name': '#',
                'nameStyle': 'font-weight: 400;font-size: 13px;color: #6c757d;',
                'childrenColumns': []
            }, {
                'id': '%allrecenttasks',
                'name': '%all',
                'nameStyle': 'font-weight: 400;font-size: 13px;color: #6c757d;',
                'sortable': false,
                'childrenColumns': []
            }]
        }]
    }],
    'data': {
        'scriptbee': {
            'component': {'value': 'scriptbee', 'style': ''},
            'yyyymmstartedin': {'value': '2021-07', 'style': 'color:green;'},
            'yyyymmlatestchange': {'value': '2023-03', 'style': ''},
            '#files': {'value': '695', 'style': 'font-weight:bold;'},
            '#importedfiles': {'value': '0', 'style': ''},
            '%allimportedfiles': {'value': '', 'style': ''},
            '#sourcefiles': {'value': '462', 'style': 'font-weight:bold;'},
            '%allsourcefiles': {'value': '0.66', 'style': ''},
            '#activerecentlyfiles': {'value': '612', 'style': 'font-weight:bold;'},
            '%allactiverecentlyfiles': {'value': '0.88', 'style': ''},
            '#createdrecentlyfiles': {'value': '317', 'style': 'font-weight:bold;'},
            '%allcreatedrecentlyfiles': {'value': '0.52', 'style': 'background-color:green; border-right:1px solid;'},
            'x1000alllinescodesize': {'value': '67.0', 'style': 'font-weight:bold;'},
            'x1000sourcecodelines': {'value': '22', 'style': ''},
            '%allsourcecodelines': {'value': '0.33', 'style': ''},
            'x1000growthrecentcodesize': {'value': '26', 'style': ''},
            '%allgrowthrecentcodesize': {'value': '0.38', 'style': 'border-right:1px solid;'},
            '#alldevs': {'value': '3', 'style': 'color:#6c757d;'},
            '#activerecentlydevs': {'value': '1', 'style': 'color:#6c757d;'},
            '%allactiverecentlydevs': {'value': '0.33', 'style': ''},
            '#joinedrecentlydevs': {'value': '0', 'style': ''},
            '%alljoinederecentlydevs': {'value': '', 'style': 'border-right:1px solid;'},
            '#allcommits': {'value': '209', 'style': 'font-weight:bold;'},
            '#recentcommits': {'value': '69', 'style': ''},
            '%allrecentcommits': {'value': '0.33', 'style': 'border-right:1px solid;'},
            'x1000allchurn': {'value': '202', 'style': ''},
            'x1000recentchurn': {'value': '99.0', 'style': ''},
            '%allrecentchurn': {'value': '0.49', 'style': 'border-right:1px solid;'},
            '#alltasks': {'value': '1', 'style': 'color:#6c757d;'},
            '#recenttasks': {'value': '1', 'style': 'color:#6c757d;'},
            '%allrecenttasks': {'value': '1', 'style': ''}
        }, 'dx': {
            'component': {'value': 'dx', 'style': ''},
            'yyyymmstartedin': {'value': '2017-12', 'style': 'color:gray;'},
            'yyyymmlatestchange': {'value': '2023-03', 'style': ''},
            '#files': {'value': '577', 'style': 'font-weight:bold;'},
            '#importedfiles': {'value': '188', 'style': ''},
            '%allimportedfiles': {'value': '0.33', 'style': ''},
            '#sourcefiles': {'value': '507', 'style': 'font-weight:bold;'},
            '%allsourcefiles': {'value': '0.88', 'style': ''},
            '#activerecentlyfiles': {'value': '30', 'style': ''},
            '%allactiverecentlyfiles': {'value': '0.05', 'style': ''},
            '#createdrecentlyfiles': {'value': '9', 'style': 'color:#6c757d;'},
            '%allcreatedrecentlyfiles': {'value': '0.30', 'style': 'background-color:red; border-right:1px solid;'},
            'x1000alllinescodesize': {'value': '55.0', 'style': 'font-weight:bold;'},
            'x1000sourcecodelines': {'value': '50', 'style': 'font-weight:bold;'},
            '%allsourcecodelines': {'value': '0.91', 'style': ''},
            'x1000growthrecentcodesize': {'value': '0.10', 'style': 'color:#6c757d;'},
            '%allgrowthrecentcodesize': {'value': '0.00', 'style': 'border-right:1px solid;'},
            '#alldevs': {'value': '15', 'style': ''},
            '#activerecentlydevs': {'value': '4', 'style': ''},
            '%allactiverecentlydevs': {'value': '0.27', 'style': ''},
            '#joinedrecentlydevs': {'value': '0', 'style': ''},
            '%alljoinederecentlydevs': {'value': '', 'style': 'border-right:1px solid;'},
            '#allcommits': {'value': '368', 'style': 'font-weight:bold;'},
            '#recentcommits': {'value': '25', 'style': ''},
            '%allrecentcommits': {'value': '0.07', 'style': 'border-right:1px solid;'},
            'x1000allchurn': {'value': '117', 'style': ''},
            'x1000recentchurn': {'value': '0.37', 'style': 'color:#6c757d;'},
            '%allrecentchurn': {'value': '0.00', 'style': 'border-right:1px solid;'},
            '#alltasks': {'value': '30', 'style': ''},
            '#recenttasks': {'value': '0', 'style': 'color:#6c757d;'},
            '%allrecenttasks': {'value': '', 'style': ''}
        }, 'depinder': {
            'component': {'value': 'depinder', 'style': ''},
            'yyyymmstartedin': {'value': '2021-11', 'style': 'color:green;'},
            'yyyymmlatestchange': {'value': '2023-03', 'style': ''},
            '#files': {'value': '55', 'style': ''},
            '#importedfiles': {'value': '0', 'style': ''},
            '%allimportedfiles': {'value': '', 'style': ''},
            '#sourcefiles': {'value': '37', 'style': ''},
            '%allsourcefiles': {'value': '0.67', 'style': ''},
            '#activerecentlyfiles': {'value': '37', 'style': ''},
            '%allactiverecentlyfiles': {'value': '0.67', 'style': ''},
            '#createdrecentlyfiles': {'value': '12', 'style': 'color:#6c757d;'},
            '%allcreatedrecentlyfiles': {'value': '0.32', 'style': 'background-color:yellow; border-right:1px solid;'},
            'x1000alllinescodesize': {'value': '24.0', 'style': ''},
            'x1000sourcecodelines': {'value': '2', 'style': ''},
            '%allsourcecodelines': {'value': '0.10', 'style': ''},
            'x1000growthrecentcodesize': {'value': '2', 'style': ''},
            '%allgrowthrecentcodesize': {'value': '0.10', 'style': 'border-right:1px solid;'},
            '#alldevs': {'value': '4', 'style': ''},
            '#activerecentlydevs': {'value': '3', 'style': ''},
            '%allactiverecentlydevs': {'value': '0.75', 'style': ''},
            '#joinedrecentlydevs': {'value': '0', 'style': ''},
            '%alljoinederecentlydevs': {'value': '', 'style': 'border-right:1px solid;'},
            '#allcommits': {'value': '40', 'style': ''},
            '#recentcommits': {'value': '24', 'style': ''},
            '%allrecentcommits': {'value': '0.60', 'style': 'border-right:1px solid;'},
            'x1000allchurn': {'value': '39', 'style': ''},
            'x1000recentchurn': {'value': '6.0', 'style': ''},
            '%allrecentchurn': {'value': '0.16', 'style': 'border-right:1px solid;'},
            '#alltasks': {'value': '1', 'style': 'color:#6c757d;'},
            '#recenttasks': {'value': '1', 'style': 'color:#6c757d;'},
            '%allrecenttasks': {'value': '1', 'style': ''}
        }, 'depminer': {
            'component': {'value': 'depminer', 'style': ''},
            'yyyymmstartedin': {'value': '2022-02', 'style': 'color:green;'},
            'yyyymmlatestchange': {'value': '2023-02', 'style': ''},
            '#files': {'value': '19', 'style': 'color:#6c757d;'},
            '#importedfiles': {'value': '0', 'style': ''},
            '%allimportedfiles': {'value': '', 'style': ''},
            '#sourcefiles': {'value': '5', 'style': 'color:#6c757d;'},
            '%allsourcefiles': {'value': '0.26', 'style': ''},
            '#activerecentlyfiles': {'value': '1', 'style': 'color:#6c757d;'},
            '%allactiverecentlyfiles': {'value': '0.05', 'style': ''},
            '#createdrecentlyfiles': {'value': '0', 'style': 'color:#6c757d;'},
            '%allcreatedrecentlyfiles': {'value': '', 'style': 'background-color:green; border-right:1px solid;'},
            'x1000alllinescodesize': {'value': '2.0', 'style': ''},
            'x1000sourcecodelines': {'value': '0.19', 'style': 'color:#6c757d;'},
            '%allsourcecodelines': {'value': '0.09', 'style': ''},
            'x1000growthrecentcodesize': {'value': '0.00', 'style': 'color:#6c757d;'},
            '%allgrowthrecentcodesize': {'value': '0.00', 'style': 'border-right:1px solid;'},
            '#alldevs': {'value': '4', 'style': ''},
            '#activerecentlydevs': {'value': '1', 'style': 'color:#6c757d;'},
            '%allactiverecentlydevs': {'value': '0.25', 'style': ''},
            '#joinedrecentlydevs': {'value': '0', 'style': ''},
            '%alljoinederecentlydevs': {'value': '', 'style': 'border-right:1px solid;'},
            '#allcommits': {'value': '16', 'style': 'color:#6c757d;'},
            '#recentcommits': {'value': '2', 'style': ''},
            '%allrecentcommits': {'value': '0.13', 'style': 'border-right:1px solid;'},
            'x1000allchurn': {'value': '2', 'style': ''},
            'x1000recentchurn': {'value': '0.0', 'style': 'color:#6c757d;'},
            '%allrecentchurn': {'value': '0.00', 'style': 'border-right:1px solid;'},
            '#alltasks': {'value': '0', 'style': 'color:#6c757d;'},
            '#recenttasks': {'value': '0', 'style': 'color:#6c757d;'},
            '%allrecenttasks': {'value': '', 'style': ''}
        }, 'insider': {
            'component': {'value': 'insider', 'style': ''},
            'yyyymmstartedin': {'value': '2019-02', 'style': 'color:green;'},
            'yyyymmlatestchange': {'value': '2023-03', 'style': ''},
            '#files': {'value': '201', 'style': 'font-weight:bold;'},
            '#importedfiles': {'value': '0', 'style': ''},
            '%allimportedfiles': {'value': '', 'style': ''},
            '#sourcefiles': {'value': '86', 'style': ''},
            '%allsourcefiles': {'value': '0.43', 'style': ''},
            '#activerecentlyfiles': {'value': '11', 'style': 'color:#6c757d;'},
            '%allactiverecentlyfiles': {'value': '0.05', 'style': ''},
            '#createdrecentlyfiles': {'value': '3', 'style': 'color:#6c757d;'},
            '%allcreatedrecentlyfiles': {'value': '0.27', 'style': 'background-color:red; border-right:1px solid;'},
            'x1000alllinescodesize': {'value': '32.0', 'style': 'font-weight:bold;'},
            'x1000sourcecodelines': {'value': '4', 'style': ''},
            '%allsourcecodelines': {'value': '0.13', 'style': ''},
            'x1000growthrecentcodesize': {'value': '0.28', 'style': 'color:#6c757d;'},
            '%allgrowthrecentcodesize': {'value': '0.01', 'style': 'border-right:1px solid;'},
            '#alldevs': {'value': '7', 'style': ''},
            '#activerecentlydevs': {'value': '2', 'style': 'color:#6c757d;'},
            '%allactiverecentlydevs': {'value': '0.29', 'style': ''},
            '#joinedrecentlydevs': {'value': '0', 'style': ''},
            '%alljoinederecentlydevs': {'value': '', 'style': 'border-right:1px solid;'},
            '#allcommits': {'value': '83', 'style': ''},
            '#recentcommits': {'value': '2', 'style': ''},
            '%allrecentcommits': {'value': '0.02', 'style': 'border-right:1px solid;'},
            'x1000allchurn': {'value': '54', 'style': ''},
            'x1000recentchurn': {'value': '0.55', 'style': 'color:#6c757d;'},
            '%allrecentchurn': {'value': '0.01', 'style': 'border-right:1px solid;'},
            '#alltasks': {'value': '0', 'style': 'color:#6c757d;'},
            '#recenttasks': {'value': '0', 'style': 'color:#6c757d;'},
            '%allrecenttasks': {'value': '', 'style': ''}
        }
    }
}
const table2 = {
    'columns': [{
        'name': '',
        'childrenColumns': [{
            'childrenColumns': [{
                'id': 'component',
                'type': 'String',
                'name': 'Component',
                'nameStyle': 'color: #6c757d;',
                'childrenColumns': [],
            }],
        }, {
            'id': 'startedin',
            'name': 'started in',
            'nameStyle': 'font-weight: 400;font-size: 13px;color: #6c757d;',
            'childrenColumns': [{
                'id': 'yyyymmstartedin',
                'type': 'Date',
                'name': 'yyyy-mm',
                'nameStyle': 'font-weight: 400;font-size: 13px;color: #6c757d;',
                'childrenColumns': [],
            }],
        }, {
            'id': 'latestchange',
            'name': 'latest <br> change',
            'nameStyle': 'font-weight: 400;font-size: 13px;color: #6c757d;',
            'childrenColumns': [{
                'id': 'yyyymmlatestchange',
                'type': 'Date',
                'name': 'yyyy-mm',
                'nameStyle': 'font-weight: 400;font-size: 13px;color: #6c757d;',
                'childrenColumns': [],
            }],
        }],
    }, {
        'name': 'Files',
        'borderR': true,
        'childrenColumns': [{
            'id': 'files',
            'name': 'files',
            'nameStyle': 'font-weight: 400;font-size: 13px;color: #6c757d;',
            'childrenColumns': [{
                'id': '#files',
                'name': '#',
                'nameStyle': 'font-weight: 400;font-size: 13px;color: #6c757d',
                'childrenColumns': [],
            }],
        }, {
            'id': 'importedfiles',
            'name': 'imported <br> files',
            'nameStyle': 'font-weight: 400;font-size: 13px;color: #6c757d;',
            'childrenColumns': [{
                'id': '#importedfiles',
                'name': '#',
                'nameStyle': 'font-weight: 400;font-size: 13px;color: #6c757d;',
                'childrenColumns': [],
            }, {
                'id': '%allimportedfiles',
                'type': 'String',
                'name': '%all',
                'nameStyle': 'font-weight: 400;font-size: 13px;color: #6c757d;',
                'sortable': true,
                'childrenColumns': [],
            }],
        }, {
            'id': 'sourcefiles',
            'name': 'source <br> files',
            'nameStyle': 'font-weight: 400;font-size: 13px;color: #6c757d;',
            'childrenColumns': [{
                'id': '#sourcefiles',
                'name': '#',
                'nameStyle': 'font-weight: 400;font-size: 13px;color: #6c757d;',
                'childrenColumns': [],
            }, {
                'id': '%allsourcefiles',
                'type': 'String',
                'name': '%all',
                'nameStyle': 'font-weight: 400;font-size: 13px;color: #6c757d;',
                'sortable': true,
                'childrenColumns': [],
            }],
        }, {
            'id': 'activerecentlyfiles',
            'name': 'active <br> recently',
            'nameStyle': 'font-weight: 400;font-size: 13px;color: #6c757d;',
            'childrenColumns': [{
                'id': '#activerecentlyfiles',
                'name': '#',
                'nameStyle': 'font-weight: 400;font-size: 13px;color: #6c757d;',
                'childrenColumns': [],
            }, {
                'id': '%allactiverecentlyfiles',
                'type': 'String',
                'name': '%all',
                'nameStyle': 'font-weight: 400;font-size: 13px;color: #6c757d;',
                'sortable': true,
                'childrenColumns': [],
            }],
        }, {
            'id': 'createdrecentlyfiles',
            'name': 'created <br> recently',
            'nameStyle': 'font-weight: 400;font-size: 13px;color: #6c757d;',
            'borderR': true,
            'childrenColumns': [{
                'id': '#createdrecentlyfiles',
                'name': '#',
                'nameStyle': 'font-weight: 400;font-size: 13px;color: #6c757d;',
                'childrenColumns': [],
            }, {
                'id': '%allcreatedrecentlyfiles',
                'type': 'String',
                'name': '%all',
                'nameStyle': 'font-weight: 400;font-size: 13px;color: #6c757d;',
                'sortable': true,
                'borderR': true,
                'childrenColumns': [],
            }],
        }],
    }, {
        'name': 'Code Size',
        'borderR': true,
        'childrenColumns': [{
            'id': 'alllinescodesize',
            'name': 'all <br> lines',
            'nameStyle': 'font-weight: 400;font-size: 13px;color: #6c757d;',
            'childrenColumns': [{
                'id': 'x1000alllinescodesize',
                'name': 'x1000',
                'nameStyle': 'font-weight: 400;font-size: 13px;color: #6c757d;',
                'childrenColumns': [],
            }],
        }, {
            'id': 'sourcecodelines',
            'name': 'source <br> code lines',
            'nameStyle': 'font-weight: 400;font-size: 13px;color: #6c757d;',
            'childrenColumns': [{
                'id': 'x1000sourcecodelines',
                'name': 'x1000',
                'nameStyle': 'font-weight: 400;font-size: 13px;color: #6c757d;',
                'childrenColumns': [],
            }, {
                'id': '%allsourcecodelines',
                'type': 'String',
                'name': '%all',
                'nameStyle': 'font-weight: 400;font-size: 13px;color: #6c757d;',
                'sortable': true,
                'childrenColumns': [],
            }],
        }, {
            'id': 'growthrecentcodesize',
            'name': 'growth recent',
            'nameStyle': 'font-weight: 400;font-size: 13px;color: #6c757d;',
            'borderR': true,
            'childrenColumns': [{
                'id': 'x1000growthrecentcodesize',
                'name': 'x1000',
                'nameStyle': 'font-weight: 400;font-size: 13px;color: #6c757d;',
                'childrenColumns': [],
            }, {
                'id': '%allgrowthrecentcodesize',
                'type': 'String',
                'name': '%all',
                'nameStyle': 'font-weight: 400;font-size: 13px;color: #6c757d;',
                'sortable': true,
                'borderR': true,
                'childrenColumns': [],
            }],
        }],
    }, {
        'name': 'Developers',
        'borderR': true,
        'childrenColumns': [{
            'id': 'alldevs',
            'name': 'all <br> devs',
            'nameStyle': 'font-weight: 400;font-size: 13px;color: #6c757d;',
            'childrenColumns': [{
                'id': '#alldevs',
                'name': '#',
                'nameStyle': 'font-weight: 400;font-size: 13px;color: #6c757d;',
                'childrenColumns': [],
            }],
        }, {
            'id': 'activerecentlydevs',
            'name': 'active <br> recently',
            'nameStyle': 'font-weight: 400;font-size: 13px;color: #6c757d;',
            'childrenColumns': [{
                'id': '#activerecentlydevs',
                'name': '#',
                'nameStyle': 'font-weight: 400;font-size: 13px;color: #6c757d;',
                'childrenColumns': [],
            }, {
                'id': '%allactiverecentlydevs',
                'name': '%all',
                'nameStyle': 'font-weight: 400;font-size: 13px;color: #6c757d;',
                'sortable': true,
                'childrenColumns': [],
            }],
        }, {
            'id': 'joinedrecentlydevs',
            'name': 'joined <br> recently',
            'nameStyle': 'font-weight: 400;font-size: 13px;color: #6c757d;',
            'borderR': true,
            'childrenColumns': [{
                'id': '#joinedrecentlydevs',
                'name': '#',
                'nameStyle': 'font-weight: 400;font-size: 13px;color: #6c757d;',
                'childrenColumns': [],
            }, {
                'id': '%alljoinederecentlydevs',
                'name': '%all',
                'nameStyle': 'font-weight: 400;font-size: 13px;color: #6c757d;',
                'sortable': true,
                'borderR': true,
                'childrenColumns': [],
            }],
        }],
    }, {
        'name': 'Commits',
        'borderR': true,
        'childrenColumns': [{
            'id': 'allcommits',
            'name': 'all <br> com.',
            'nameStyle': 'font-weight: 400;font-size: 13px;color: #6c757d;',
            'childrenColumns': [{
                'id': '#allcommits',
                'name': '#',
                'nameStyle': 'font-weight: 400;font-size: 13px;color: #6c757d;',
                'childrenColumns': [],
            }],
        }, {
            'id': 'recentcommits',
            'name': 'recent <br> commits',
            'nameStyle': 'font-weight: 400;font-size: 13px;color: #6c757d;',
            'borderR': true,
            'childrenColumns': [{
                'id': '#recentcommits',
                'name': '#',
                'nameStyle': 'font-weight: 400;font-size: 13px;color: #6c757d;',
                'childrenColumns': [],
            }, {
                'id': '%allrecentcommits',
                'name': '%all',
                'nameStyle': 'font-weight: 400;font-size: 13px;color: #6c757d;',
                'sortable': true,
                'borderR': true,
                'childrenColumns': [],
            }],
        }],
    }, {
        'name': 'Change Volume',
        'borderR': true,
        'childrenColumns': [{
            'id': 'allchurnvolume',
            'name': 'all <br> churn',
            'nameStyle': 'font-weight: 400;font-size: 13px;color: #6c757d;',
            'childrenColumns': [{
                'id': 'x1000allchurn',
                'name': 'x1000',
                'nameStyle': 'font-weight: 400;font-size: 13px;color: #6c757d;',
                'childrenColumns': [],
            }],
        }, {
            'id': 'recentchurnvolume',
            'name': 'recent <br> churn',
            'nameStyle': 'font-weight: 400;font-size: 13px;color: #6c757d;',
            'borderR': true,
            'childrenColumns': [{
                'id': 'x1000recentchurn',
                'name': 'x1000',
                'nameStyle': 'font-weight: 400;font-size: 13px;color: #6c757d;',
                'childrenColumns': [],
            }, {
                'id': '%allrecentchurn',
                'name': '%all',
                'nameStyle': 'font-weight: 400;font-size: 13px;color: #6c757d;',
                'sortable': true,
                'borderR': true,
                'childrenColumns': [],
            }],
        }],
    }, {
        'name': 'Tasks',
        'childrenColumns': [{
            'id': 'alltasks',
            'name': 'all <br> tasks',
            'nameStyle': 'font-weight: 400;font-size: 13px;color: #6c757d;',
            'childrenColumns': [{
                'id': '#alltasks',
                'name': '#',
                'nameStyle': 'font-weight: 400;font-size: 13px;color: #6c757d;',
                'childrenColumns': [],
            }],
        }, {
            'id': 'recenttasks',
            'name': 'recent <br> tasks',
            'nameStyle': 'font-weight: 400;font-size: 13px;color: #6c757d;',
            'childrenColumns': [{
                'id': '#recenttasks',
                'name': '#',
                'nameStyle': 'font-weight: 400;font-size: 13px;color: #6c757d;',
                'childrenColumns': [],
            }, {
                'id': '%allrecenttasks',
                'name': '%all',
                'nameStyle': 'font-weight: 400;font-size: 13px;color: #6c757d;',
                'sortable': true,
                'childrenColumns': [],
            }],
        }],
    }], 'name': 'Components_Overview', 'data': {
        'scriptbee': {
            'component': {'value': 'scriptbee2', 'style': ''},
            'yyyymmstartedin': {'value': '2021-07', 'style': 'color:green;'},
            'yyyymmlatestchange': {'value': '2023-03', 'style': ''},
            '#files': {'value': '695', 'style': 'font-weight:bold;'},
            '#importedfiles': {'value': '0', 'style': ''},
            '%allimportedfiles': {'value': '', 'style': ''},
            '#sourcefiles': {'value': '462', 'style': 'font-weight:bold;'},
            '%allsourcefiles': {'value': '0.66', 'style': ''},
            '#activerecentlyfiles': {'value': '612', 'style': 'font-weight:bold;'},
            '%allactiverecentlyfiles': {'value': '0.88', 'style': ''},
            '#createdrecentlyfiles': {'value': '317', 'style': 'font-weight:bold;'},
            '%allcreatedrecentlyfiles': {'value': '0.52', 'style': 'background-color:green; border-right:1px solid;'},
            'x1000alllinescodesize': {'value': '67.0', 'style': 'font-weight:bold;'},
            'x1000sourcecodelines': {'value': '22', 'style': ''},
            '%allsourcecodelines': {'value': '0.33', 'style': ''},
            'x1000growthrecentcodesize': {'value': '26', 'style': ''},
            '%allgrowthrecentcodesize': {'value': '0.38', 'style': 'border-right:1px solid;'},
            '#alldevs': {'value': '3', 'style': 'color:#6c757d;'},
            '#activerecentlydevs': {'value': '1', 'style': 'color:#6c757d;'},
            '%allactiverecentlydevs': {'value': '0.33', 'style': ''},
            '#joinedrecentlydevs': {'value': '0', 'style': ''},
            '%alljoinederecentlydevs': {'value': '', 'style': 'border-right:1px solid;'},
            '#allcommits': {'value': '209', 'style': 'font-weight:bold;'},
            '#recentcommits': {'value': '69', 'style': ''},
            '%allrecentcommits': {'value': '0.33', 'style': 'border-right:1px solid;'},
            'x1000allchurn': {'value': '202', 'style': ''},
            'x1000recentchurn': {'value': '99.0', 'style': ''},
            '%allrecentchurn': {'value': '0.49', 'style': 'border-right:1px solid;'},
            '#alltasks': {'value': '1', 'style': 'color:#6c757d;'},
            '#recenttasks': {'value': '1', 'style': 'color:#6c757d;'},
            '%allrecenttasks': {'value': '1', 'style': ''},
        }, 'dx': {
            'component': {'value': 'dx2', 'style': ''},
            'yyyymmstartedin': {'value': '2017-12', 'style': 'color:gray;'},
            'yyyymmlatestchange': {'value': '2023-03', 'style': ''},
            '#files': {'value': '577', 'style': 'font-weight:bold;'},
            '#importedfiles': {'value': '188', 'style': ''},
            '%allimportedfiles': {'value': '0.33', 'style': ''},
            '#sourcefiles': {'value': '507', 'style': 'font-weight:bold;'},
            '%allsourcefiles': {'value': '0.88', 'style': ''},
            '#activerecentlyfiles': {'value': '30', 'style': ''},
            '%allactiverecentlyfiles': {'value': '0.05', 'style': ''},
            '#createdrecentlyfiles': {'value': '9', 'style': 'color:#6c757d;'},
            '%allcreatedrecentlyfiles': {'value': '0.30', 'style': 'background-color:red; border-right:1px solid;'},
            'x1000alllinescodesize': {'value': '55.0', 'style': 'font-weight:bold;'},
            'x1000sourcecodelines': {'value': '50', 'style': 'font-weight:bold;'},
            '%allsourcecodelines': {'value': '0.91', 'style': ''},
            'x1000growthrecentcodesize': {'value': '0.10', 'style': 'color:#6c757d;'},
            '%allgrowthrecentcodesize': {'value': '0.00', 'style': 'border-right:1px solid;'},
            '#alldevs': {'value': '15', 'style': ''},
            '#activerecentlydevs': {'value': '4', 'style': ''},
            '%allactiverecentlydevs': {'value': '0.27', 'style': ''},
            '#joinedrecentlydevs': {'value': '0', 'style': ''},
            '%alljoinederecentlydevs': {'value': '', 'style': 'border-right:1px solid;'},
            '#allcommits': {'value': '368', 'style': 'font-weight:bold;'},
            '#recentcommits': {'value': '25', 'style': ''},
            '%allrecentcommits': {'value': '0.07', 'style': 'border-right:1px solid;'},
            'x1000allchurn': {'value': '117', 'style': ''},
            'x1000recentchurn': {'value': '0.37', 'style': 'color:#6c757d;'},
            '%allrecentchurn': {'value': '0.00', 'style': 'border-right:1px solid;'},
            '#alltasks': {'value': '30', 'style': ''},
            '#recenttasks': {'value': '0', 'style': 'color:#6c757d;'},
            '%allrecenttasks': {'value': '', 'style': ''},
        }, 'depinder': {
            'component': {'value': 'depinder2', 'style': ''},
            'yyyymmstartedin': {'value': '2021-11', 'style': 'color:green;'},
            'yyyymmlatestchange': {'value': '2023-03', 'style': ''},
            '#files': {'value': '55', 'style': ''},
            '#importedfiles': {'value': '0', 'style': ''},
            '%allimportedfiles': {'value': '', 'style': ''},
            '#sourcefiles': {'value': '37', 'style': ''},
            '%allsourcefiles': {'value': '0.67', 'style': ''},
            '#activerecentlyfiles': {'value': '37', 'style': ''},
            '%allactiverecentlyfiles': {'value': '0.67', 'style': ''},
            '#createdrecentlyfiles': {'value': '12', 'style': 'color:#6c757d;'},
            '%allcreatedrecentlyfiles': {'value': '0.32', 'style': 'background-color:yellow; border-right:1px solid;'},
            'x1000alllinescodesize': {'value': '24.0', 'style': ''},
            'x1000sourcecodelines': {'value': '2', 'style': ''},
            '%allsourcecodelines': {'value': '0.10', 'style': ''},
            'x1000growthrecentcodesize': {'value': '2', 'style': ''},
            '%allgrowthrecentcodesize': {'value': '0.10', 'style': 'border-right:1px solid;'},
            '#alldevs': {'value': '4', 'style': ''},
            '#activerecentlydevs': {'value': '3', 'style': ''},
            '%allactiverecentlydevs': {'value': '0.75', 'style': ''},
            '#joinedrecentlydevs': {'value': '0', 'style': ''},
            '%alljoinederecentlydevs': {'value': '', 'style': 'border-right:1px solid;'},
            '#allcommits': {'value': '40', 'style': ''},
            '#recentcommits': {'value': '24', 'style': ''},
            '%allrecentcommits': {'value': '0.60', 'style': 'border-right:1px solid;'},
            'x1000allchurn': {'value': '39', 'style': ''},
            'x1000recentchurn': {'value': '6.0', 'style': ''},
            '%allrecentchurn': {'value': '0.16', 'style': 'border-right:1px solid;'},
            '#alltasks': {'value': '1', 'style': 'color:#6c757d;'},
            '#recenttasks': {'value': '1', 'style': 'color:#6c757d;'},
            '%allrecenttasks': {'value': '1', 'style': ''},
        }, 'depminer': {
            'component': {'value': 'depminer2', 'style': ''},
            'yyyymmstartedin': {'value': '2022-02', 'style': 'color:green;'},
            'yyyymmlatestchange': {'value': '2023-02', 'style': ''},
            '#files': {'value': '19', 'style': 'color:#6c757d;'},
            '#importedfiles': {'value': '0', 'style': ''},
            '%allimportedfiles': {'value': '', 'style': ''},
            '#sourcefiles': {'value': '5', 'style': 'color:#6c757d;'},
            '%allsourcefiles': {'value': '0.26', 'style': ''},
            '#activerecentlyfiles': {'value': '1', 'style': 'color:#6c757d;'},
            '%allactiverecentlyfiles': {'value': '0.05', 'style': ''},
            '#createdrecentlyfiles': {'value': '0', 'style': 'color:#6c757d;'},
            '%allcreatedrecentlyfiles': {'value': '', 'style': 'background-color:green; border-right:1px solid;'},
            'x1000alllinescodesize': {'value': '2.0', 'style': ''},
            'x1000sourcecodelines': {'value': '0.19', 'style': 'color:#6c757d;'},
            '%allsourcecodelines': {'value': '0.09', 'style': ''},
            'x1000growthrecentcodesize': {'value': '0.00', 'style': 'color:#6c757d;'},
            '%allgrowthrecentcodesize': {'value': '0.00', 'style': 'border-right:1px solid;'},
            '#alldevs': {'value': '4', 'style': ''},
            '#activerecentlydevs': {'value': '1', 'style': 'color:#6c757d;'},
            '%allactiverecentlydevs': {'value': '0.25', 'style': ''},
            '#joinedrecentlydevs': {'value': '0', 'style': ''},
            '%alljoinederecentlydevs': {'value': '', 'style': 'border-right:1px solid;'},
            '#allcommits': {'value': '16', 'style': 'color:#6c757d;'},
            '#recentcommits': {'value': '2', 'style': ''},
            '%allrecentcommits': {'value': '0.13', 'style': 'border-right:1px solid;'},
            'x1000allchurn': {'value': '2', 'style': ''},
            'x1000recentchurn': {'value': '0.0', 'style': 'color:#6c757d;'},
            '%allrecentchurn': {'value': '0.00', 'style': 'border-right:1px solid;'},
            '#alltasks': {'value': '0', 'style': 'color:#6c757d;'},
            '#recenttasks': {'value': '0', 'style': 'color:#6c757d;'},
            '%allrecenttasks': {'value': '', 'style': ''},
        }, 'insider': {
            '%allimportedfiles': {'value': '', 'style': ''},
            '#sourcefiles': {'value': '86', 'style': ''},
            '%allsourcefiles': {'value': '0.43', 'style': ''},
            '#activerecentlyfiles': {'value': '11', 'style': 'color:#6c757d;'},
            '%allactiverecentlyfiles': {'value': '0.05', 'style': ''},
            '#createdrecentlyfiles': {'value': '3', 'style': 'color:#6c757d;'},
            '%allcreatedrecentlyfiles': {'value': '0.27', 'style': 'background-color:red; border-right:1px solid;'},
            'x1000alllinescodesize': {'value': '32.0', 'style': 'font-weight:bold;'},
            'x1000sourcecodelines': {'value': '4', 'style': ''},
            '%allsourcecodelines': {'value': '0.13', 'style': ''},
            'x1000growthrecentcodesize': {'value': '0.28', 'style': 'color:#6c757d;'},
            '%allgrowthrecentcodesize': {'value': '0.01', 'style': 'border-right:1px solid;'},
            'component': {'value': 'insider2', 'style': ''},
            'yyyymmstartedin': {'value': '2019-02', 'style': 'color:green;'},
            'yyyymmlatestchange': {'value': '2023-03', 'style': ''},
            '#files': {'value': '201', 'style': 'font-weight:bold;'},
            '#importedfiles': {'value': '0', 'style': ''},
            '#alldevs': {'value': '7', 'style': ''},
            '#activerecentlydevs': {'value': '2', 'style': 'color:#6c757d;'},
            '%allactiverecentlydevs': {'value': '0.29', 'style': ''},
            '#joinedrecentlydevs': {'value': '0', 'style': ''},
            '%alljoinederecentlydevs': {'value': '', 'style': 'border-right:1px solid;'},
            '#allcommits': {'value': '83', 'style': ''},
            '#recentcommits': {'value': '2', 'style': ''},
            '%allrecentcommits': {'value': '0.02', 'style': 'border-right:1px solid;'},
            'x1000allchurn': {'value': '54', 'style': ''},
            'x1000recentchurn': {'value': '0.55', 'style': 'color:#6c757d;'},
            '%allrecentchurn': {'value': '0.01', 'style': 'border-right:1px solid;'},
            '#alltasks': {'value': '0', 'style': 'color:#6c757d;'},
            '#recenttasks': {'value': '0', 'style': 'color:#6c757d;'},
            '%allrecenttasks': {'value': '', 'style': ''},
        },
        'n': {},
    },
}
export var mockMatrix =

    {
        'name': 'Component Developer Matrix',
        'type': 'matrix',
        'entity1PaddingColumns': [{
            'id': 'entity1namecolumn',
            'name': '',
            'childrenColumns': []
        }, {
            'id': 'entity1sizecolumn',
            'name': 'Size(%)',
            'nameStyle': 'font-weight: bold;text-align: center;font-size: small;',
            'childrenColumns': []
        }, {
            'id': 'entity1devscolumn',
            'name': 'Devs',
            'nameStyle': 'font-weight: bold;text-align: center;font-size: small;',
            'childrenColumns': []
        }, {
            'id': 'entity1activedevscolumn',
            'name': 'Active Devs',
            'nameStyle': 'font-weight: bold;text-align: center;font-size: small;',
            'childrenColumns': []
        }, {
            'id': 'entity1apkscolumn',
            'name': 'APKS(%)',
            'nameStyle': 'font-weight: bold;text-align: center;font-size: small;',
            'childrenColumns': []
        }],
        'entity2PaddingColumns': [{
            'id': 'entity2namecolumn',
            'name': '',
            'childrenColumns': []
        }, {
            'id': 'entity2knowledgecolumn',
            'name': 'Knowledge(%)',
            'nameStyle': 'font-weight: bold;text-align: center;font-size: small;',
            'childrenColumns': []
        }],
        'entity1PaddingData': {
            'adapt-backend': {
                'entity1namecolumn': {'value': 'adapt-backend', 'style': 'color:#397738;'},
                'entity1sizecolumn': {'value': '8.0', 'style': 'color:#397738;'},
                'entity1devscolumn': {'value': '6', 'style': 'color:black;'},
                'entity1activedevscolumn': {'value': '3', 'style': 'color:black;'},
                'entity1apkscolumn': {'value': '5.0', 'style': 'color:red;'}
            },
            'mediQapp-fe': {
                'entity1namecolumn': {'value': 'mediQapp-fe', 'style': 'color:#0b5586;'},
                'entity1sizecolumn': {'value': '22.0', 'style': 'color:#0b5586;'},
                'entity1devscolumn': {'value': '5', 'style': 'color:black;'},
                'entity1activedevscolumn': {'value': '4', 'style': 'color:black;'},
                'entity1apkscolumn': {'value': '76.0', 'style': 'color:black;'}
            },
            'mediq-capesaro-sync': {
                'entity1namecolumn': {'value': 'mediq-capesaro-sync', 'style': 'color:#397738;'},
                'entity1sizecolumn': {'value': '0.0', 'style': 'color:#397738;'},
                'entity1devscolumn': {'value': '2', 'style': 'color:red;'},
                'entity1activedevscolumn': {'value': '2', 'style': 'color:black;'},
                'entity1apkscolumn': {'value': '100.0', 'style': 'color:black;'}
            },
            'onebite-webapp': {
                'entity1namecolumn': {'value': 'onebite-webapp', 'style': 'color:#397738;'},
                'entity1sizecolumn': {'value': '16.0', 'style': 'color:#397738;'},
                'entity1devscolumn': {'value': '5', 'style': 'color:black;'},
                'entity1activedevscolumn': {'value': '3', 'style': 'color:black;'},
                'entity1apkscolumn': {'value': '96.0', 'style': 'color:black;'}
            },
            'onebite-be': {
                'entity1namecolumn': {'value': 'onebite-be', 'style': 'color:#0b5586;'},
                'entity1sizecolumn': {'value': '13.0', 'style': 'color:#0b5586;'},
                'entity1devscolumn': {'value': '7', 'style': 'color:black;'},
                'entity1activedevscolumn': {'value': '3', 'style': 'color:black;'},
                'entity1apkscolumn': {'value': '24.0', 'style': 'color:red;'}
            },
            'quisine': {
                'entity1namecolumn': {'value': 'quisine', 'style': 'color:#397738;'},
                'entity1sizecolumn': {'value': '9.0', 'style': 'color:#397738;'},
                'entity1devscolumn': {'value': '5', 'style': 'color:black;'},
                'entity1activedevscolumn': {'value': '5', 'style': 'color:black;'},
                'entity1apkscolumn': {'value': '99.0', 'style': 'color:black;'}
            },
            'mimir-fe': {
                'entity1namecolumn': {'value': 'mimir-fe', 'style': 'color:#ede193;'},
                'entity1sizecolumn': {'value': '1.0', 'style': 'color:#ede193;'},
                'entity1devscolumn': {'value': '6', 'style': 'color:black;'},
                'entity1activedevscolumn': {'value': '4', 'style': 'color:black;'},
                'entity1apkscolumn': {'value': '33.0', 'style': 'color:red;'}
            },
            'onebite-be-ms': {
                'entity1namecolumn': {'value': 'onebite-be-ms', 'style': 'color:#397738;'},
                'entity1sizecolumn': {'value': '8.0', 'style': 'color:#397738;'},
                'entity1devscolumn': {'value': '3', 'style': 'color:red;'},
                'entity1activedevscolumn': {'value': '3', 'style': 'color:black;'},
                'entity1apkscolumn': {'value': '99.0', 'style': 'color:black;'}
            },
            'mimir-be': {
                'entity1namecolumn': {'value': 'mimir-be', 'style': 'color:#397738;'},
                'entity1sizecolumn': {'value': '1.0', 'style': 'color:#397738;'},
                'entity1devscolumn': {'value': '5', 'style': 'color:black;'},
                'entity1activedevscolumn': {'value': '3', 'style': 'color:black;'},
                'entity1apkscolumn': {'value': '98.0', 'style': 'color:black;'}
            },
            'onebite-backend': {
                'entity1namecolumn': {'value': 'onebite-backend', 'style': 'color:#0b5586;'},
                'entity1sizecolumn': {'value': '6.0', 'style': 'color:#0b5586;'},
                'entity1devscolumn': {'value': '2', 'style': 'color:red;'},
                'entity1activedevscolumn': {'value': '2', 'style': 'color:black;'},
                'entity1apkscolumn': {'value': '100.0', 'style': 'color:black;'}
            },
            'quisine-website': {
                'entity1namecolumn': {'value': 'quisine-website', 'style': 'color:#397738;'},
                'entity1sizecolumn': {'value': '5.0', 'style': 'color:#397738;'},
                'entity1devscolumn': {'value': '1', 'style': 'color:red;'},
                'entity1activedevscolumn': {'value': '1', 'style': 'color:black;'},
                'entity1apkscolumn': {'value': '100.0', 'style': 'color:black;'}
            },
            'mediQapp-be': {
                'entity1namecolumn': {'value': 'mediQapp-be', 'style': 'color:#0b5586;'},
                'entity1sizecolumn': {'value': '4.0', 'style': 'color:#0b5586;'},
                'entity1devscolumn': {'value': '4', 'style': 'color:black;'},
                'entity1activedevscolumn': {'value': '1', 'style': 'color:black;'},
                'entity1apkscolumn': {'value': '0.0', 'style': 'color:red;'}
            }
        },
        'entity2PaddingData': {
            'Iulia': {
                'entity2namecolumn': {'value': 'Iulia', 'style': 'background-color:#baddbf;'},
                'entity2knowledgecolumn': {'value': '21.7', 'style': ''}
            },
            'Daiana': {
                'entity2namecolumn': {'value': 'Daiana', 'style': 'background-color:#baddbf;'},
                'entity2knowledgecolumn': {'value': '17.3', 'style': ''}
            },
            'Andi': {
                'entity2namecolumn': {'value': 'Andi', 'style': 'background-color:#baddbf;'},
                'entity2knowledgecolumn': {'value': '14.7', 'style': ''}
            },
            'Alexa': {
                'entity2namecolumn': {'value': 'Alexa', 'style': 'background-color:#baddbf;'},
                'entity2knowledgecolumn': {'value': '10.0', 'style': ''}
            },
            'Eugen': {
                'entity2namecolumn': {'value': 'Eugen', 'style': 'background-color:#baddbf;'},
                'entity2knowledgecolumn': {'value': '3.5', 'style': ''}
            },
            'AL': {
                'entity2namecolumn': {'value': 'AL', 'style': 'background-color:#baddbf;'},
                'entity2knowledgecolumn': {'value': '1.9', 'style': ''}
            },
            'Cristina': {
                'entity2namecolumn': {'value': 'Cristina', 'style': 'background-color:#baddbf;'},
                'entity2knowledgecolumn': {'value': '1.7', 'style': ''}
            },
            'Szilvia': {
                'entity2namecolumn': {'value': 'Szilvia', 'style': 'background-color:#baddbf;'},
                'entity2knowledgecolumn': {'value': '0.6', 'style': ''}
            },
            'Darius': {
                'entity2namecolumn': {'value': 'Darius', 'style': 'background-color:#ece192;'},
                'entity2knowledgecolumn': {'value': '9.7', 'style': ''}
            },
            'Diana': {
                'entity2namecolumn': {'value': 'Diana', 'style': 'background-color:#ece192;'},
                'entity2knowledgecolumn': {'value': '0.8', 'style': ''}
            },
            'Ana': {
                'entity2namecolumn': {'value': 'Ana', 'style': 'background-color:#ece192;'},
                'entity2knowledgecolumn': {'value': '0.4', 'style': ''}
            },
            'Flavia': {
                'entity2namecolumn': {'value': 'Flavia', 'style': 'background-color:#afd4fd;'},
                'entity2knowledgecolumn': {'value': '9.2', 'style': ''}
            },
            'Tania': {
                'entity2namecolumn': {'value': 'Tania', 'style': 'background-color:#afd4fd;'},
                'entity2knowledgecolumn': {'value': '5.1', 'style': ''}
            },
            'Razvan': {
                'entity2namecolumn': {'value': 'Razvan', 'style': 'background-color:#afd4fd;'},
                'entity2knowledgecolumn': {'value': '2.4', 'style': ''}
            },
            'Vlad': {
                'entity2namecolumn': {'value': 'Vlad', 'style': 'background-color:#afd4fd;'},
                'entity2knowledgecolumn': {'value': '1.5', 'style': ''}
            }
        },
        'data': {
            'Author Contributions': [{
                'source': 'adapt-backend',
                'target': 'Iulia',
                'value': '',
                'style': 'background-color:white;'
            }, {
                'source': 'adapt-backend',
                'target': 'Daiana',
                'value': '2.0',
                'style': 'background-color:#bbddbf;'
            }, {
                'source': 'adapt-backend',
                'target': 'Andi',
                'value': '2.0',
                'style': 'background-color:#bbddbf;'
            }, {
                'source': 'adapt-backend',
                'target': 'Alexa',
                'value': '',
                'style': 'background-color:white;'
            }, {
                'source': 'adapt-backend',
                'target': 'Eugen',
                'value': '',
                'style': 'background-color:white;'
            }, {
                'source': 'adapt-backend',
                'target': 'AL',
                'value': '1.0',
                'style': 'background-color:#bbddbf;'
            }, {
                'source': 'adapt-backend',
                'target': 'Cristina',
                'value': '',
                'style': 'background-color:white;'
            }, {
                'source': 'adapt-backend',
                'target': 'Szilvia',
                'value': '',
                'style': 'background-color:white;'
            }, {
                'source': 'adapt-backend',
                'target': 'Darius',
                'value': '81.0',
                'style': 'background-color:#ede193;'
            }, {
                'source': 'adapt-backend',
                'target': 'Diana',
                'value': '',
                'style': 'background-color:white;'
            }, {
                'source': 'adapt-backend',
                'target': 'Ana',
                'value': '',
                'style': 'background-color:white;'
            }, {
                'source': 'adapt-backend',
                'target': 'Flavia',
                'value': '',
                'style': 'background-color:white;'
            }, {
                'source': 'adapt-backend',
                'target': 'Tania',
                'value': '',
                'style': 'background-color:white;'
            }, {
                'source': 'adapt-backend',
                'target': 'Razvan',
                'value': '',
                'style': 'background-color:white;'
            }, {
                'source': 'adapt-backend',
                'target': 'Vlad',
                'value': '11.0',
                'style': 'background-color:#afd4fc;'
            }, {
                'source': 'mediQapp-fe',
                'target': 'Iulia',
                'value': '72.0',
                'style': 'background-color:#397738;'
            }, {
                'source': 'mediQapp-fe',
                'target': 'Daiana',
                'value': '',
                'style': 'background-color:white;'
            }, {
                'source': 'mediQapp-fe',
                'target': 'Andi',
                'value': '4.0',
                'style': 'background-color:#bbddbf;'
            }, {
                'source': 'mediQapp-fe',
                'target': 'Alexa',
                'value': '',
                'style': 'background-color:white;'
            }, {
                'source': 'mediQapp-fe',
                'target': 'Eugen',
                'value': '',
                'style': 'background-color:white;'
            }, {
                'source': 'mediQapp-fe',
                'target': 'AL',
                'value': '',
                'style': 'background-color:white;'
            }, {
                'source': 'mediQapp-fe',
                'target': 'Cristina',
                'value': '',
                'style': 'background-color:white;'
            }, {
                'source': 'mediQapp-fe',
                'target': 'Szilvia',
                'value': '',
                'style': 'background-color:white;'
            }, {
                'source': 'mediQapp-fe',
                'target': 'Darius',
                'value': '',
                'style': 'background-color:white;'
            }, {
                'source': 'mediQapp-fe',
                'target': 'Diana',
                'value': '',
                'style': 'background-color:white;'
            }, {
                'source': 'mediQapp-fe',
                'target': 'Ana',
                'value': '',
                'style': 'background-color:white;'
            }, {
                'source': 'mediQapp-fe',
                'target': 'Flavia',
                'value': '',
                'style': 'background-color:white;'
            }, {
                'source': 'mediQapp-fe',
                'target': 'Tania',
                'value': '22.0',
                'style': 'background-color:#afd4fc;'
            }, {
                'source': 'mediQapp-fe',
                'target': 'Razvan',
                'value': '',
                'style': 'background-color:white;'
            }, {
                'source': 'mediQapp-fe',
                'target': 'Vlad',
                'value': '',
                'style': 'background-color:white;'
            }, {
                'source': 'mediq-capesaro-sync',
                'target': 'Iulia',
                'value': '',
                'style': 'background-color:white;'
            }, {
                'source': 'mediq-capesaro-sync',
                'target': 'Daiana',
                'value': '',
                'style': 'background-color:white;'
            }, {
                'source': 'mediq-capesaro-sync',
                'target': 'Andi',
                'value': '100.0',
                'style': 'background-color:#397738;'
            }, {
                'source': 'mediq-capesaro-sync',
                'target': 'Alexa',
                'value': '',
                'style': 'background-color:white;'
            }, {
                'source': 'mediq-capesaro-sync',
                'target': 'Eugen',
                'value': '',
                'style': 'background-color:white;'
            }, {
                'source': 'mediq-capesaro-sync',
                'target': 'AL',
                'value': '',
                'style': 'background-color:white;'
            }, {
                'source': 'mediq-capesaro-sync',
                'target': 'Cristina',
                'value': '',
                'style': 'background-color:white;'
            }, {
                'source': 'mediq-capesaro-sync',
                'target': 'Szilvia',
                'value': '',
                'style': 'background-color:white;'
            }, {
                'source': 'mediq-capesaro-sync',
                'target': 'Darius',
                'value': '',
                'style': 'background-color:white;'
            }, {
                'source': 'mediq-capesaro-sync',
                'target': 'Diana',
                'value': '',
                'style': 'background-color:white;'
            }, {
                'source': 'mediq-capesaro-sync',
                'target': 'Ana',
                'value': '',
                'style': 'background-color:white;'
            }, {
                'source': 'mediq-capesaro-sync',
                'target': 'Flavia',
                'value': '',
                'style': 'background-color:white;'
            }, {
                'source': 'mediq-capesaro-sync',
                'target': 'Tania',
                'value': '',
                'style': 'background-color:white;'
            }, {
                'source': 'mediq-capesaro-sync',
                'target': 'Razvan',
                'value': '',
                'style': 'background-color:white;'
            }, {
                'source': 'mediq-capesaro-sync',
                'target': 'Vlad',
                'value': '',
                'style': 'background-color:white;'
            }, {
                'source': 'onebite-webapp',
                'target': 'Iulia',
                'value': '18.0',
                'style': 'background-color:#bbddbf;'
            }, {
                'source': 'onebite-webapp',
                'target': 'Daiana',
                'value': '60.0',
                'style': 'background-color:#397738;'
            }, {
                'source': 'onebite-webapp',
                'target': 'Andi',
                'value': '',
                'style': 'background-color:white;'
            }, {
                'source': 'onebite-webapp',
                'target': 'Alexa',
                'value': '18.0',
                'style': 'background-color:#bbddbf;'
            }, {
                'source': 'onebite-webapp',
                'target': 'Eugen',
                'value': '',
                'style': 'background-color:white;'
            }, {
                'source': 'onebite-webapp',
                'target': 'AL',
                'value': '',
                'style': 'background-color:white;'
            }, {
                'source': 'onebite-webapp',
                'target': 'Cristina',
                'value': '',
                'style': 'background-color:white;'
            }, {
                'source': 'onebite-webapp',
                'target': 'Szilvia',
                'value': '',
                'style': 'background-color:white;'
            }, {
                'source': 'onebite-webapp',
                'target': 'Darius',
                'value': '2.0',
                'style': 'background-color:#ede193;'
            }, {
                'source': 'onebite-webapp',
                'target': 'Diana',
                'value': '',
                'style': 'background-color:white;'
            }, {
                'source': 'onebite-webapp',
                'target': 'Ana',
                'value': '',
                'style': 'background-color:white;'
            }, {
                'source': 'onebite-webapp',
                'target': 'Flavia',
                'value': '',
                'style': 'background-color:white;'
            }, {
                'source': 'onebite-webapp',
                'target': 'Tania',
                'value': '',
                'style': 'background-color:white;'
            }, {
                'source': 'onebite-webapp',
                'target': 'Razvan',
                'value': '',
                'style': 'background-color:white;'
            }, {
                'source': 'onebite-webapp',
                'target': 'Vlad',
                'value': '',
                'style': 'background-color:white;'
            }, {
                'source': 'onebite-be',
                'target': 'Iulia',
                'value': '',
                'style': 'background-color:white;'
            }, {
                'source': 'onebite-be',
                'target': 'Daiana',
                'value': '3.0',
                'style': 'background-color:#bbddbf;'
            }, {
                'source': 'onebite-be',
                'target': 'Andi',
                'value': '',
                'style': 'background-color:white;'
            }, {
                'source': 'onebite-be',
                'target': 'Alexa',
                'value': '9.0',
                'style': 'background-color:#bbddbf;'
            }, {
                'source': 'onebite-be',
                'target': 'Eugen',
                'value': '',
                'style': 'background-color:white;'
            }, {
                'source': 'onebite-be',
                'target': 'AL',
                'value': '12.0',
                'style': 'background-color:#bbddbf;'
            }, {
                'source': 'onebite-be',
                'target': 'Cristina',
                'value': '',
                'style': 'background-color:white;'
            }, {
                'source': 'onebite-be',
                'target': 'Szilvia',
                'value': '',
                'style': 'background-color:white;'
            }, {
                'source': 'onebite-be',
                'target': 'Darius',
                'value': '1.0',
                'style': 'background-color:#ede193;'
            }, {
                'source': 'onebite-be',
                'target': 'Diana',
                'value': '',
                'style': 'background-color:white;'
            }, {
                'source': 'onebite-be',
                'target': 'Ana',
                'value': '',
                'style': 'background-color:white;'
            }, {
                'source': 'onebite-be',
                'target': 'Flavia',
                'value': '69.0',
                'style': 'background-color:#0b5586;'
            }, {
                'source': 'onebite-be',
                'target': 'Tania',
                'value': '',
                'style': 'background-color:white;'
            }, {
                'source': 'onebite-be',
                'target': 'Razvan',
                'value': '',
                'style': 'background-color:white;'
            }, {
                'source': 'onebite-be',
                'target': 'Vlad',
                'value': '3.0',
                'style': 'background-color:#afd4fc;'
            }, {
                'source': 'quisine',
                'target': 'Iulia',
                'value': '22.0',
                'style': 'background-color:#bbddbf;'
            }, {
                'source': 'quisine',
                'target': 'Daiana',
                'value': '62.0',
                'style': 'background-color:#397738;'
            }, {
                'source': 'quisine',
                'target': 'Andi',
                'value': '',
                'style': 'background-color:white;'
            }, {
                'source': 'quisine',
                'target': 'Alexa',
                'value': '1.0',
                'style': 'background-color:#bbddbf;'
            }, {
                'source': 'quisine',
                'target': 'Eugen',
                'value': '',
                'style': 'background-color:white;'
            }, {
                'source': 'quisine',
                'target': 'AL',
                'value': '',
                'style': 'background-color:white;'
            }, {
                'source': 'quisine',
                'target': 'Cristina',
                'value': '14.0',
                'style': 'background-color:#bbddbf;'
            }, {
                'source': 'quisine',
                'target': 'Szilvia',
                'value': '',
                'style': 'background-color:white;'
            }, {
                'source': 'quisine',
                'target': 'Darius',
                'value': '',
                'style': 'background-color:white;'
            }, {
                'source': 'quisine',
                'target': 'Diana',
                'value': '',
                'style': 'background-color:white;'
            }, {
                'source': 'quisine',
                'target': 'Ana',
                'value': '',
                'style': 'background-color:white;'
            }, {
                'source': 'quisine',
                'target': 'Flavia',
                'value': '',
                'style': 'background-color:white;'
            }, {
                'source': 'quisine',
                'target': 'Tania',
                'value': '',
                'style': 'background-color:white;'
            }, {
                'source': 'quisine',
                'target': 'Razvan',
                'value': '',
                'style': 'background-color:white;'
            }, {
                'source': 'quisine',
                'target': 'Vlad',
                'value': '',
                'style': 'background-color:white;'
            }, {
                'source': 'mimir-fe',
                'target': 'Iulia',
                'value': '',
                'style': 'background-color:white;'
            }, {
                'source': 'mimir-fe',
                'target': 'Daiana',
                'value': '',
                'style': 'background-color:white;'
            }, {
                'source': 'mimir-fe',
                'target': 'Andi',
                'value': '',
                'style': 'background-color:white;'
            }, {
                'source': 'mimir-fe',
                'target': 'Alexa',
                'value': '',
                'style': 'background-color:white;'
            }, {
                'source': 'mimir-fe',
                'target': 'Eugen',
                'value': '',
                'style': 'background-color:white;'
            }, {
                'source': 'mimir-fe',
                'target': 'AL',
                'value': '2.0',
                'style': 'background-color:#bbddbf;'
            }, {
                'source': 'mimir-fe',
                'target': 'Cristina',
                'value': '14.0',
                'style': 'background-color:#bbddbf;'
            }, {
                'source': 'mimir-fe',
                'target': 'Szilvia',
                'value': '17.0',
                'style': 'background-color:#bbddbf;'
            }, {
                'source': 'mimir-fe',
                'target': 'Darius',
                'value': '',
                'style': 'background-color:white;'
            }, {
                'source': 'mimir-fe',
                'target': 'Diana',
                'value': '42.0',
                'style': 'background-color:#ede193;'
            }, {
                'source': 'mimir-fe',
                'target': 'Ana',
                'value': '22.0',
                'style': 'background-color:#ede193;'
            }, {
                'source': 'mimir-fe',
                'target': 'Flavia',
                'value': '',
                'style': 'background-color:white;'
            }, {
                'source': 'mimir-fe',
                'target': 'Tania',
                'value': '',
                'style': 'background-color:white;'
            }, {
                'source': 'mimir-fe',
                'target': 'Razvan',
                'value': '',
                'style': 'background-color:white;'
            }, {
                'source': 'mimir-fe',
                'target': 'Vlad',
                'value': '',
                'style': 'background-color:white;'
            }, {
                'source': 'onebite-be-ms',
                'target': 'Iulia',
                'value': '',
                'style': 'background-color:white;'
            }, {
                'source': 'onebite-be-ms',
                'target': 'Daiana',
                'value': '',
                'style': 'background-color:white;'
            }, {
                'source': 'onebite-be-ms',
                'target': 'Andi',
                'value': '68.0',
                'style': 'background-color:#397738;'
            }, {
                'source': 'onebite-be-ms',
                'target': 'Alexa',
                'value': '',
                'style': 'background-color:white;'
            }, {
                'source': 'onebite-be-ms',
                'target': 'Eugen',
                'value': '31.0',
                'style': 'background-color:#bbddbf;'
            }, {
                'source': 'onebite-be-ms',
                'target': 'AL',
                'value': '',
                'style': 'background-color:white;'
            }, {
                'source': 'onebite-be-ms',
                'target': 'Cristina',
                'value': '',
                'style': 'background-color:white;'
            }, {
                'source': 'onebite-be-ms',
                'target': 'Szilvia',
                'value': '',
                'style': 'background-color:white;'
            }, {
                'source': 'onebite-be-ms',
                'target': 'Darius',
                'value': '',
                'style': 'background-color:white;'
            }, {
                'source': 'onebite-be-ms',
                'target': 'Diana',
                'value': '',
                'style': 'background-color:white;'
            }, {
                'source': 'onebite-be-ms',
                'target': 'Ana',
                'value': '',
                'style': 'background-color:white;'
            }, {
                'source': 'onebite-be-ms',
                'target': 'Flavia',
                'value': '',
                'style': 'background-color:white;'
            }, {
                'source': 'onebite-be-ms',
                'target': 'Tania',
                'value': '',
                'style': 'background-color:white;'
            }, {
                'source': 'onebite-be-ms',
                'target': 'Razvan',
                'value': '',
                'style': 'background-color:white;'
            }, {
                'source': 'onebite-be-ms',
                'target': 'Vlad',
                'value': '',
                'style': 'background-color:white;'
            }, {
                'source': 'mimir-be',
                'target': 'Iulia',
                'value': '',
                'style': 'background-color:white;'
            }, {
                'source': 'mimir-be',
                'target': 'Daiana',
                'value': '',
                'style': 'background-color:white;'
            }, {
                'source': 'mimir-be',
                'target': 'Andi',
                'value': '14.0',
                'style': 'background-color:#bbddbf;'
            }, {
                'source': 'mimir-be',
                'target': 'Alexa',
                'value': '',
                'style': 'background-color:white;'
            }, {
                'source': 'mimir-be',
                'target': 'Eugen',
                'value': '61.0',
                'style': 'background-color:#397738;'
            }, {
                'source': 'mimir-be',
                'target': 'AL',
                'value': '',
                'style': 'background-color:white;'
            }, {
                'source': 'mimir-be',
                'target': 'Cristina',
                'value': '',
                'style': 'background-color:white;'
            }, {
                'source': 'mimir-be',
                'target': 'Szilvia',
                'value': '23.0',
                'style': 'background-color:#bbddbf;'
            }, {
                'source': 'mimir-be',
                'target': 'Darius',
                'value': '',
                'style': 'background-color:white;'
            }, {
                'source': 'mimir-be',
                'target': 'Diana',
                'value': '',
                'style': 'background-color:white;'
            }, {
                'source': 'mimir-be',
                'target': 'Ana',
                'value': '',
                'style': 'background-color:white;'
            }, {
                'source': 'mimir-be',
                'target': 'Flavia',
                'value': '',
                'style': 'background-color:white;'
            }, {
                'source': 'mimir-be',
                'target': 'Tania',
                'value': '',
                'style': 'background-color:white;'
            }, {
                'source': 'mimir-be',
                'target': 'Razvan',
                'value': '',
                'style': 'background-color:white;'
            }, {
                'source': 'mimir-be',
                'target': 'Vlad',
                'value': '',
                'style': 'background-color:white;'
            }, {
                'source': 'onebite-backend',
                'target': 'Iulia',
                'value': '',
                'style': 'background-color:white;'
            }, {
                'source': 'onebite-backend',
                'target': 'Daiana',
                'value': '',
                'style': 'background-color:white;'
            }, {
                'source': 'onebite-backend',
                'target': 'Andi',
                'value': '100.0',
                'style': 'background-color:#397738;'
            }, {
                'source': 'onebite-backend',
                'target': 'Alexa',
                'value': '',
                'style': 'background-color:white;'
            }, {
                'source': 'onebite-backend',
                'target': 'Eugen',
                'value': '',
                'style': 'background-color:white;'
            }, {
                'source': 'onebite-backend',
                'target': 'AL',
                'value': '',
                'style': 'background-color:white;'
            }, {
                'source': 'onebite-backend',
                'target': 'Cristina',
                'value': '',
                'style': 'background-color:white;'
            }, {
                'source': 'onebite-backend',
                'target': 'Szilvia',
                'value': '',
                'style': 'background-color:white;'
            }, {
                'source': 'onebite-backend',
                'target': 'Darius',
                'value': '',
                'style': 'background-color:white;'
            }, {
                'source': 'onebite-backend',
                'target': 'Diana',
                'value': '',
                'style': 'background-color:white;'
            }, {
                'source': 'onebite-backend',
                'target': 'Ana',
                'value': '',
                'style': 'background-color:white;'
            }, {
                'source': 'onebite-backend',
                'target': 'Flavia',
                'value': '',
                'style': 'background-color:white;'
            }, {
                'source': 'onebite-backend',
                'target': 'Tania',
                'value': '',
                'style': 'background-color:white;'
            }, {
                'source': 'onebite-backend',
                'target': 'Razvan',
                'value': '',
                'style': 'background-color:white;'
            }, {
                'source': 'onebite-backend',
                'target': 'Vlad',
                'value': '',
                'style': 'background-color:white;'
            }, {
                'source': 'quisine-website',
                'target': 'Iulia',
                'value': '',
                'style': 'background-color:white;'
            }, {
                'source': 'quisine-website',
                'target': 'Daiana',
                'value': '',
                'style': 'background-color:white;'
            }, {
                'source': 'quisine-website',
                'target': 'Andi',
                'value': '',
                'style': 'background-color:white;'
            }, {
                'source': 'quisine-website',
                'target': 'Alexa',
                'value': '100.0',
                'style': 'background-color:#397738;'
            }, {
                'source': 'quisine-website',
                'target': 'Eugen',
                'value': '',
                'style': 'background-color:white;'
            }, {
                'source': 'quisine-website',
                'target': 'AL',
                'value': '',
                'style': 'background-color:white;'
            }, {
                'source': 'quisine-website',
                'target': 'Cristina',
                'value': '',
                'style': 'background-color:white;'
            }, {
                'source': 'quisine-website',
                'target': 'Szilvia',
                'value': '',
                'style': 'background-color:white;'
            }, {
                'source': 'quisine-website',
                'target': 'Darius',
                'value': '',
                'style': 'background-color:white;'
            }, {
                'source': 'quisine-website',
                'target': 'Diana',
                'value': '',
                'style': 'background-color:white;'
            }, {
                'source': 'quisine-website',
                'target': 'Ana',
                'value': '',
                'style': 'background-color:white;'
            }, {
                'source': 'quisine-website',
                'target': 'Flavia',
                'value': '',
                'style': 'background-color:white;'
            }, {
                'source': 'quisine-website',
                'target': 'Tania',
                'value': '',
                'style': 'background-color:white;'
            }, {
                'source': 'quisine-website',
                'target': 'Razvan',
                'value': '',
                'style': 'background-color:white;'
            }, {
                'source': 'quisine-website',
                'target': 'Vlad',
                'value': '',
                'style': 'background-color:white;'
            }, {
                'source': 'mediQapp-be',
                'target': 'Iulia',
                'value': '',
                'style': 'background-color:white;'
            }, {
                'source': 'mediQapp-be',
                'target': 'Daiana',
                'value': '',
                'style': 'background-color:white;'
            }, {
                'source': 'mediQapp-be',
                'target': 'Andi',
                'value': '',
                'style': 'background-color:white;'
            }, {
                'source': 'mediQapp-be',
                'target': 'Alexa',
                'value': '',
                'style': 'background-color:white;'
            }, {
                'source': 'mediQapp-be',
                'target': 'Eugen',
                'value': '',
                'style': 'background-color:white;'
            }, {
                'source': 'mediQapp-be',
                'target': 'AL',
                'value': '',
                'style': 'background-color:white;'
            }, {
                'source': 'mediQapp-be',
                'target': 'Cristina',
                'value': '',
                'style': 'background-color:white;'
            }, {
                'source': 'mediQapp-be',
                'target': 'Szilvia',
                'value': '',
                'style': 'background-color:white;'
            }, {
                'source': 'mediQapp-be',
                'target': 'Darius',
                'value': '44.0',
                'style': 'background-color:#ede193;'
            }, {
                'source': 'mediQapp-be',
                'target': 'Diana',
                'value': '',
                'style': 'background-color:white;'
            }, {
                'source': 'mediQapp-be',
                'target': 'Ana',
                'value': '',
                'style': 'background-color:white;'
            }, {
                'source': 'mediQapp-be',
                'target': 'Flavia',
                'value': '',
                'style': 'background-color:white;'
            }, {
                'source': 'mediQapp-be',
                'target': 'Tania',
                'value': '',
                'style': 'background-color:white;'
            }, {
                'source': 'mediQapp-be',
                'target': 'Razvan',
                'value': '55.0',
                'style': 'background-color:#0b5586;'
            }, {'source': 'mediQapp-be', 'target': 'Vlad', 'value': '', 'style': 'background-color:white;'}]
        }
    }


export const tabs = [
    JSON.stringify({type: 'table', data: table1.data, name: table1.name, columns: table1.columns}),
    JSON.stringify({
        type: 'matrix',
        name: 'matrixmock',
        data: mockMatrix.data,
        entity1PaddingData: mockMatrix.entity1PaddingData,
        entity2PaddingData: mockMatrix.entity2PaddingData,
        entity1PaddingColumns: mockMatrix.entity1PaddingColumns,
        entity2PaddingColumns: mockMatrix.entity2PaddingColumns
    }),
];
