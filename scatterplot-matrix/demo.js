
var labels = ['a', 'b', 'c', 'd'];
var config = {
    title: "Anderson's Iris data set",
    subtitle: "en.wikipedia.org/wiki/Iris_flower_data_set",

    // size: 200,
    minCellSize: 70,
    maxCellSize: 200,
    // width: 900,
    guides: true,
    brush: true,
    variables: {
        keys: ['petal length', 'petal width', 'sepal length']
        // labels: ['a', 'b', 'c', 'd', 'e']
    },
    groups:{
        key: 'species'
    }

};
var data2 = [
    [1, 2, 3, 4, 5],
    [3, 4, 5, 2, 4],
    [5, 2, 0, 1, 7],
    [6, 8, 3, 7, 5],
    [1, 7, 3, 2, 1]
];
var data3 = [
    [4, 2, 3, 4, 5],
    [3, 4, 5, 2, 4],
    [5, 2, 2, 1, 7],
    [6, 1, 3, 2, 5],
    [1, 3, 3, 7, 1]
];
// data = [
//     [1, 2, 3],
//     [3, 4, 5],
//     [5, 2, 0],
//     [6, 8, 3],
//     [1, 7, 3]
// ];
// var data = [
//     {a: 1, b: 2, c: 1},
//     {a: 2, b: 3, c: 2},
//     {a: 3, b: 4, c: 1},
// ];


var plot;
/*plot = new D3ScatterPlotMatrix("#scatterplot", data, conf);
plot.init();*/
d3.csv("../data/flowers.csv", function(error, data) {
    console.log(data);
    plot = new ODCD3.ScatterPlotMatrix("#scatterplot", data, config);

});
