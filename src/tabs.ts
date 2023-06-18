const table0 = {"name":"HICP","type":"table","columns":[{"id":"name","name":"Country","nameStyle":"font-weight: 400;font-size: 13px;color: #6c757d;","childrenColumns":[]},{"id":"jan","name":"2023-01","nameStyle":"font-weight: 400;font-size: 13px;color: #6c757d;","childrenColumns":[]},{"id":"feb","name":"2023-02","nameStyle":"font-weight: 400;font-size: 13px;color: #6c757d;","childrenColumns":[]},{"id":"mar","name":"2023-03","nameStyle":"font-weight: 400;font-size: 13px;color: #6c757d;","childrenColumns":[]},{"id":"apr","name":"2023-04","nameStyle":"font-weight: 400;font-size: 13px;color: #6c757d;","childrenColumns":[]}],"data":{"4ce1097b-4a9b-491e-9757-b9a11b2d9ab0":{"name":{"value":"Belgium","style":""},"jan":{"value":"19.2","style":"color:#FFA500;"},"feb":{"value":"19.9","style":"color:#FFA500;"},"mar":{"value":"20.7","style":"color:green;"},"apr":{"value":"17.5","style":"color:#FFA500;"}},"ba4e7ae9-6307-4157-abfe-96b4ff2af1ab":{"name":{"value":"Bulgaria","style":""},"jan":{"value":"26.0","style":"color:green;"},"feb":{"value":"25.0","style":"color:green;"},"mar":{"value":"22.2","style":"color:green;"},"apr":{"value":"17.1","style":"color:#FFA500;"}},"47e939a5-0930-48c0-9462-022653b5b0b7":{"name":{"value":"Czechia","style":""},"jan":{"value":"26.2","style":"color:green;"},"feb":{"value":"25.2","style":"color:green;"},"mar":{"value":"24.6","style":"color:green;"},"apr":{"value":"18.1","style":"color:#FFA500;"}},"17eb63a0-fdf7-4bce-9012-77417f8240db":{"name":{"value":"Denmark","style":""},"jan":{"value":"14.9","style":"color:red;"},"feb":{"value":"15.3","style":"color:red;"},"mar":{"value":"16.1","style":"color:#FFA500;"},"apr":{"value":"13.0","style":"color:red;"}},"2bc87668-4ce6-4f18-a1f3-596975a6d66e":{"name":{"value":"Spain","style":""},"jan":{"value":"15.5","style":"color:red;"},"feb":{"value":"16.7","style":"color:#FFA500;"},"mar":{"value":"16.5","style":"color:#FFA500;"},"apr":{"value":"12.8","style":"color:red;"}},"f0d957c8-50c0-401e-b401-38c488c0d35e":{"name":{"value":"Greece","style":""},"jan":{"value":"15.6","style":"color:red;"},"feb":{"value":"14.7","style":"color:red;"},"mar":{"value":"14.1","style":"color:red;"},"apr":{"value":"11.2","style":"color:red;"}},"a3fe5d31-95ff-46e4-8c90-db28a8e93a68":{"name":{"value":"France","style":""},"jan":{"value":"14.4","style":"color:red;"},"feb":{"value":"16.1","style":"color:#FFA500;"},"mar":{"value":"17.2","style":"color:#FFA500;"},"apr":{"value":"15.9","style":"color:red;"}},"56019c80-7699-466f-a05c-bfd08f5e6e3f":{"name":{"value":"Croatia","style":""},"jan":{"value":"17.9","style":"color:#FFA500;"},"feb":{"value":"17.9","style":"color:#FFA500;"},"mar":{"value":"18.3","style":"color:#FFA500;"},"apr":{"value":"16.1","style":"color:#FFA500;"}},"c0cd0aba-b0bd-44a7-8f64-a86782f8474f":{"name":{"value":"Italy","style":""},"jan":{"value":"12.6","style":"color:red;"},"feb":{"value":"13.5","style":"color:red;"},"mar":{"value":"13.3","style":"color:red;"},"apr":{"value":"12.2","style":"color:red;"}},"77908a7c-7b58-4f8e-9bc7-fee146169796":{"name":{"value":"Romania","style":""},"jan":{"value":"23.2","style":"color:green;"},"feb":{"value":"22.9","style":"color:green;"},"mar":{"value":"22.2","style":"color:green;"},"apr":{"value":"20.1","style":"color:green;"}},"1dac0a7b-fcac-4a32-8e03-8af4f7e61c06":{"name":{"value":"Slovenia","style":""},"jan":{"value":"19.8","style":"color:#FFA500;"},"feb":{"value":"19.0","style":"color:#FFA500;"},"mar":{"value":"19.8","style":"color:#FFA500;"},"apr":{"value":"16.0","style":"color:;"}}}}
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
export var mockMatrix2 =
    {
        'name': 'mock matrix',
        'entity1PaddingColumns': [{
            'id': 'entity1namecolumn',
            'name': 'Vertical Name Column',
            'childrenColumns': []
        }, {
            'id': 'entity1sizecolumn',
            'name': 'Padded vertical column 1',
            'nameStyle': 'font-weight: bold;text-align: center;',
            'childrenColumns': []
        }, {
            'id': 'entity1devscolumn',
            'name': 'Padded vertical column 2',
            'nameStyle': 'font-weight: bold;text-align: center;',
            'childrenColumns': []
        }],
        'entity2PaddingColumns': [{
            'id': 'entity2namecolumn',
            'name': 'Horizontal Name Column',
            'childrenColumns': []
        }, {
            'id': 'entity2knowledgecolumn',
            'name': 'Padded horizontal column 1',
            'nameStyle': 'font-weight: bold;text-align: center;',
            'childrenColumns': []
        }, {
            'id': 'entity2componentscolumn',
            'name': 'Padded horizontal column 2',
            'nameStyle': 'font-weight: bold;text-align: center;',
            'childrenColumns': []
        }],
        'entity1PaddingData': {
            'a': {
                'entity1namecolumn': {'value': '', 'style': 'font-weight:bold;'},
                'entity1sizecolumn': {'value': '', 'style': 'background-color:green;'},
                'entity1devscolumn': {'value': '', 'style': ''},

            },
        },
        'entity2PaddingData': {
            'a': {
                'entity2namecolumn': {'value': '', 'style': 'font-weight:bold;'},
                'entity2knowledgecolumn': {'value': '', 'style': ''},
                'entity2componentscolumn': {'value': '', 'style': ''}
            },
        },
        'data': {
            'Sum of all commits': [{
                'source': 'scriptbee',
                'target': 'scriptbee',
                'value': '28',
                'style': 'background-color:red;'
            }, {
                'source': 'scriptbee',
                'target': 'dx',
                'value': '64',
                'style': 'background-color:green;'
            }, {
                'source': 'scriptbee',
                'target': 'depinder',
                'value': '25',
                'style': 'background-color:red;'
            }, {
                'source': 'scriptbee',
                'target': 'depminer',
                'value': '17',
                'style': 'background-color:red;'
            }, {'source': 'scriptbee', 'target': 'insider', 'value': '32', 'style': 'background-color:red;'}, {
                'source': 'dx',
                'target': 'scriptbee',
                'value': '64',
                'style': 'background-color:green;'
            }, {'source': 'dx', 'target': 'dx', 'value': '100', 'style': 'background-color:green;'}, {
                'source': 'dx',
                'target': 'depinder',
                'value': '61',
                'style': 'background-color:green;'
            }, {'source': 'dx', 'target': 'depminer', 'value': '53', 'style': 'background-color:green;'}, {
                'source': 'dx',
                'target': 'insider',
                'value': '68',
                'style': 'background-color:green;'
            }, {
                'source': 'depinder',
                'target': 'scriptbee',
                'value': '25',
                'style': 'background-color:red;'
            }, {
                'source': 'depinder',
                'target': 'dx',
                'value': '61',
                'style': 'background-color:green;'
            }, {
                'source': 'depinder',
                'target': 'depinder',
                'value': '22',
                'style': 'background-color:red;'
            }, {
                'source': 'depinder',
                'target': 'depminer',
                'value': '14',
                'style': 'background-color:red;'
            }, {
                'source': 'depinder',
                'target': 'insider',
                'value': '29',
                'style': 'background-color:red;'
            }, {
                'source': 'depminer',
                'target': 'scriptbee',
                'value': '17',
                'style': 'background-color:red;'
            }, {
                'source': 'depminer',
                'target': 'dx',
                'value': '53',
                'style': 'background-color:green;'
            }, {
                'source': 'depminer',
                'target': 'depinder',
                'value': '14',
                'style': 'background-color:red;'
            }, {
                'source': 'depminer',
                'target': 'depminer',
                'value': '6',
                'style': 'background-color:yellow;'
            }, {
                'source': 'depminer',
                'target': 'insider',
                'value': '21',
                'style': 'background-color:red;'
            }, {
                'source': 'insider',
                'target': 'scriptbee',
                'value': '32',
                'style': 'background-color:red;'
            }, {'source': 'insider', 'target': 'dx', 'value': '68', 'style': 'background-color:green;'}, {
                'source': 'insider',
                'target': 'depinder',
                'value': '29',
                'style': 'background-color:red;'
            }, {
                'source': 'insider',
                'target': 'depminer',
                'value': '21',
                'style': 'background-color:red;'
            }, {'source': 'insider', 'target': 'insider', 'value': '36', 'style': 'background-color:red;'}],
            'Multiplication of all commits': [{
                'source': 'scriptbee',
                'target': 'scriptbee',
                'value': '196',
                'style': 'background-color:green;'
            }, {
                'source': 'scriptbee',
                'target': 'dx',
                'value': '700',
                'style': 'background-color:green;'
            }, {
                'source': 'scriptbee',
                'target': 'depinder',
                'value': '154',
                'style': 'background-color:green;'
            }, {
                'source': 'scriptbee',
                'target': 'depminer',
                'value': '42',
                'style': 'background-color:red;'
            }, {
                'source': 'scriptbee',
                'target': 'insider',
                'value': '252',
                'style': 'background-color:green;'
            }, {'source': 'dx', 'target': 'scriptbee', 'value': '700', 'style': 'background-color:green;'}, {
                'source': 'dx',
                'target': 'dx',
                'value': '2500',
                'style': 'background-color:green;'
            }, {'source': 'dx', 'target': 'depinder', 'value': '550', 'style': 'background-color:green;'}, {
                'source': 'dx',
                'target': 'depminer',
                'value': '150',
                'style': 'background-color:green;'
            }, {
                'source': 'dx',
                'target': 'insider',
                'value': '900',
                'style': 'background-color:green;'
            }, {
                'source': 'depinder',
                'target': 'scriptbee',
                'value': '154',
                'style': 'background-color:green;'
            }, {
                'source': 'depinder',
                'target': 'dx',
                'value': '550',
                'style': 'background-color:green;'
            }, {
                'source': 'depinder',
                'target': 'depinder',
                'value': '121',
                'style': 'background-color:green;'
            }, {
                'source': 'depinder',
                'target': 'depminer',
                'value': '33',
                'style': 'background-color:red;'
            }, {
                'source': 'depinder',
                'target': 'insider',
                'value': '198',
                'style': 'background-color:green;'
            }, {
                'source': 'depminer',
                'target': 'scriptbee',
                'value': '42',
                'style': 'background-color:red;'
            }, {
                'source': 'depminer',
                'target': 'dx',
                'value': '150',
                'style': 'background-color:green;'
            }, {
                'source': 'depminer',
                'target': 'depinder',
                'value': '33',
                'style': 'background-color:red;'
            }, {
                'source': 'depminer',
                'target': 'depminer',
                'value': '9',
                'style': 'background-color:red;'
            }, {
                'source': 'depminer',
                'target': 'insider',
                'value': '54',
                'style': 'background-color:yellow;'
            }, {
                'source': 'insider',
                'target': 'scriptbee',
                'value': '252',
                'style': 'background-color:green;'
            }, {
                'source': 'insider',
                'target': 'dx',
                'value': '900',
                'style': 'background-color:green;'
            }, {
                'source': 'insider',
                'target': 'depinder',
                'value': '198',
                'style': 'background-color:green;'
            }, {
                'source': 'insider',
                'target': 'depminer',
                'value': '54',
                'style': 'background-color:yellow;'
            }, {'source': 'insider', 'target': 'insider', 'value': '324', 'style': 'background-color:green;'}]
        }
    }



export var mockMatrix =
    {
        'name': 'mock matrix',
        'entity1PaddingColumns': [{
            'id': 'entity1namecolumn',
            'name': '',
            'childrenColumns': []
        }, {
            'id': 'entity1sizecolumn',
            'name': 'Size(%)',
            'nameStyle': 'font-weight: bold;text-align: center;',
            'childrenColumns': []
        }, {
            'id': 'entity1devscolumn',
            'name': 'Devs',
            'nameStyle': 'font-weight: bold;text-align: center;',
            'childrenColumns': []
        }, {
            'id': 'entity1activedevscolumn',
            'name': 'Active Devs',
            'nameStyle': 'font-weight: bold;text-align: center;',
            'childrenColumns': []
        }, {
            'id': 'entity1apkscolumn',
            'name': 'APKS(%)',
            'nameStyle': 'font-weight: bold;text-align: center;',
            'childrenColumns': []
        }],
        'entity2PaddingColumns': [{
            'id': 'entity2namecolumn',
            'name': '',
            'childrenColumns': []
        }, {
            'id': 'entity2knowledgecolumn',
            'name': 'Knowledge(%)',
            'nameStyle': 'font-weight: bold;text-align: center;',
            'childrenColumns': []
        }, {
            'id': 'entity2componentscolumn',
            'name': 'Components',
            'nameStyle': 'font-weight: bold;text-align: center;',
            'childrenColumns': []
        }],
        'entity1PaddingData': {
            'scriptbee': {
                'entity1namecolumn': {'value': 'scriptbee', 'style': 'font-weight:bold;'},
                'entity1sizecolumn': {'value': '695', 'style': 'background-color:green;'},
                'entity1devscolumn': {'value': '14', 'style': ''},
                'entity1activedevscolumn': {'value': '14', 'style': ''},
                'entity1apkscolumn': {'value': '14', 'style': ''}
            },
            'dx': {
                'entity1namecolumn': {'value': 'dx', 'style': 'font-weight:bold;'},
                'entity1sizecolumn': {'value': '577', 'style': 'background-color:green;'},
                'entity1devscolumn': {'value': '50', 'style': ''},
                'entity1activedevscolumn': {'value': '50', 'style': ''},
                'entity1apkscolumn': {'value': '50', 'style': ''}
            },
            'depinder': {
                'entity1namecolumn': {'value': 'depinder', 'style': 'font-weight:bold;'},
                'entity1sizecolumn': {'value': '55', 'style': ''},
                'entity1devscolumn': {'value': '11', 'style': ''},
                'entity1activedevscolumn': {'value': '11', 'style': ''},
                'entity1apkscolumn': {'value': '11', 'style': ''}
            },
            'depminer': {
                'entity1namecolumn': {'value': 'depminer', 'style': 'font-weight:bold;'},
                'entity1sizecolumn': {'value': '19', 'style': 'color:red;'},
                'entity1devscolumn': {'value': '3', 'style': ''},
                'entity1activedevscolumn': {'value': '3', 'style': ''},
                'entity1apkscolumn': {'value': '3', 'style': ''}
            },
            'insider': {
                'entity1namecolumn': {'value': 'insider', 'style': 'font-weight:bold;'},
                'entity1sizecolumn': {'value': '201', 'style': 'background-color:green;'},
                'entity1devscolumn': {'value': '18', 'style': ''},
                'entity1activedevscolumn': {'value': '18', 'style': ''},
                'entity1apkscolumn': {'value': '18', 'style': ''}
            }
        },
        'entity2PaddingData': {
            'scriptbee': {
                'entity2namecolumn': {'value': 'scriptbee', 'style': 'font-weight:bold;'},
                'entity2knowledgecolumn': {'value': '14', 'style': ''},
                'entity2componentscolumn': {'value': '14', 'style': ''}
            },
            'dx': {
                'entity2namecolumn': {'value': 'dx', 'style': 'font-weight:bold;'},
                'entity2knowledgecolumn': {'value': '50', 'style': ''},
                'entity2componentscolumn': {'value': '50', 'style': ''}
            },
            'depinder': {
                'entity2namecolumn': {'value': 'depinder', 'style': 'font-weight:bold;'},
                'entity2knowledgecolumn': {'value': '11', 'style': ''},
                'entity2componentscolumn': {'value': '11', 'style': ''}
            },
            'depminer': {
                'entity2namecolumn': {'value': 'depminer', 'style': 'font-weight:bold;'},
                'entity2knowledgecolumn': {'value': '3', 'style': ''},
                'entity2componentscolumn': {'value': '3', 'style': ''}
            },
            'insider': {
                'entity2namecolumn': {'value': 'insider', 'style': 'font-weight:bold;'},
                'entity2knowledgecolumn': {'value': '18', 'style': ''},
                'entity2componentscolumn': {'value': '18', 'style': ''}
            }
        },
        'data': {
            'Sum of all commits': [{
                'source': 'scriptbee',
                'target': 'scriptbee',
                'value': '28',
                'style': 'background-color:red;'
            }, {
                'source': 'scriptbee',
                'target': 'dx',
                'value': '64',
                'style': 'background-color:green;'
            }, {
                'source': 'scriptbee',
                'target': 'depinder',
                'value': '25',
                'style': 'background-color:red;'
            }, {
                'source': 'scriptbee',
                'target': 'depminer',
                'value': '17',
                'style': 'background-color:red;'
            }, {'source': 'scriptbee', 'target': 'insider', 'value': '32', 'style': 'background-color:red;'}, {
                'source': 'dx',
                'target': 'scriptbee',
                'value': '64',
                'style': 'background-color:green;'
            }, {'source': 'dx', 'target': 'dx', 'value': '100', 'style': 'background-color:green;'}, {
                'source': 'dx',
                'target': 'depinder',
                'value': '61',
                'style': 'background-color:green;'
            }, {'source': 'dx', 'target': 'depminer', 'value': '53', 'style': 'background-color:green;'}, {
                'source': 'dx',
                'target': 'insider',
                'value': '68',
                'style': 'background-color:green;'
            }, {
                'source': 'depinder',
                'target': 'scriptbee',
                'value': '25',
                'style': 'background-color:red;'
            }, {
                'source': 'depinder',
                'target': 'dx',
                'value': '61',
                'style': 'background-color:green;'
            }, {
                'source': 'depinder',
                'target': 'depinder',
                'value': '22',
                'style': 'background-color:red;'
            }, {
                'source': 'depinder',
                'target': 'depminer',
                'value': '14',
                'style': 'background-color:red;'
            }, {
                'source': 'depinder',
                'target': 'insider',
                'value': '29',
                'style': 'background-color:red;'
            }, {
                'source': 'depminer',
                'target': 'scriptbee',
                'value': '17',
                'style': 'background-color:red;'
            }, {
                'source': 'depminer',
                'target': 'dx',
                'value': '53',
                'style': 'background-color:green;'
            }, {
                'source': 'depminer',
                'target': 'depinder',
                'value': '14',
                'style': 'background-color:red;'
            }, {
                'source': 'depminer',
                'target': 'depminer',
                'value': '6',
                'style': 'background-color:yellow;'
            }, {
                'source': 'depminer',
                'target': 'insider',
                'value': '21',
                'style': 'background-color:red;'
            }, {
                'source': 'insider',
                'target': 'scriptbee',
                'value': '32',
                'style': 'background-color:red;'
            }, {'source': 'insider', 'target': 'dx', 'value': '68', 'style': 'background-color:green;'}, {
                'source': 'insider',
                'target': 'depinder',
                'value': '29',
                'style': 'background-color:red;'
            }, {
                'source': 'insider',
                'target': 'depminer',
                'value': '21',
                'style': 'background-color:red;'
            }, {'source': 'insider', 'target': 'insider', 'value': '36', 'style': 'background-color:red;'}],
            'Multiplication of all commits': [{
                'source': 'scriptbee',
                'target': 'scriptbee',
                'value': '196',
                'style': 'background-color:green;'
            }, {
                'source': 'scriptbee',
                'target': 'dx',
                'value': '700',
                'style': 'background-color:green;'
            }, {
                'source': 'scriptbee',
                'target': 'depinder',
                'value': '154',
                'style': 'background-color:green;'
            }, {
                'source': 'scriptbee',
                'target': 'depminer',
                'value': '42',
                'style': 'background-color:red;'
            }, {
                'source': 'scriptbee',
                'target': 'insider',
                'value': '252',
                'style': 'background-color:green;'
            }, {'source': 'dx', 'target': 'scriptbee', 'value': '700', 'style': 'background-color:green;'}, {
                'source': 'dx',
                'target': 'dx',
                'value': '2500',
                'style': 'background-color:green;'
            }, {'source': 'dx', 'target': 'depinder', 'value': '550', 'style': 'background-color:green;'}, {
                'source': 'dx',
                'target': 'depminer',
                'value': '150',
                'style': 'background-color:green;'
            }, {
                'source': 'dx',
                'target': 'insider',
                'value': '900',
                'style': 'background-color:green;'
            }, {
                'source': 'depinder',
                'target': 'scriptbee',
                'value': '154',
                'style': 'background-color:green;'
            }, {
                'source': 'depinder',
                'target': 'dx',
                'value': '550',
                'style': 'background-color:green;'
            }, {
                'source': 'depinder',
                'target': 'depinder',
                'value': '121',
                'style': 'background-color:green;'
            }, {
                'source': 'depinder',
                'target': 'depminer',
                'value': '33',
                'style': 'background-color:red;'
            }, {
                'source': 'depinder',
                'target': 'insider',
                'value': '198',
                'style': 'background-color:green;'
            }, {
                'source': 'depminer',
                'target': 'scriptbee',
                'value': '42',
                'style': 'background-color:red;'
            }, {
                'source': 'depminer',
                'target': 'dx',
                'value': '150',
                'style': 'background-color:green;'
            }, {
                'source': 'depminer',
                'target': 'depinder',
                'value': '33',
                'style': 'background-color:red;'
            }, {
                'source': 'depminer',
                'target': 'depminer',
                'value': '9',
                'style': 'background-color:red;'
            }, {
                'source': 'depminer',
                'target': 'insider',
                'value': '54',
                'style': 'background-color:yellow;'
            }, {
                'source': 'insider',
                'target': 'scriptbee',
                'value': '252',
                'style': 'background-color:green;'
            }, {
                'source': 'insider',
                'target': 'dx',
                'value': '900',
                'style': 'background-color:green;'
            }, {
                'source': 'insider',
                'target': 'depinder',
                'value': '198',
                'style': 'background-color:green;'
            }, {
                'source': 'insider',
                'target': 'depminer',
                'value': '54',
                'style': 'background-color:yellow;'
            }, {'source': 'insider', 'target': 'insider', 'value': '324', 'style': 'background-color:green;'}]
        }
    }

export const tabs = [
    //JSON.stringify({type: 'table', data: table0.data, name: table0.name, columns: table0.columns}),
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
