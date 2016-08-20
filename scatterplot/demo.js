var confFlowers = {
    // width: 500,
    // height: 500,
    guides: true,
    dot:{
        // color: function(d) { return d[0]*d[1] }
    },
    x:{
        key: 'petal length',
        label: 'petal length'
    },
    y:{
        key: 'petal width',
        label: 'petal width'
    },
    groups:{
        key: 'species',
        label: "species"
    }

};
// conf = new  ODCD3.ScatterPlotConfig();
// conf.guides = true;

var confArray={

};

var dataArray = [
    [1,2, 1],
    [2,3, 2],
    [3,4, 1],
    [6,4, 3],
    [11,3, 1],
    [1,3.5, 4],
    [7,4, 1],
    [5,4, 2]

];
var plot;
var conf = confFlowers;

d3.csv("../data/flowers.csv", function(error, data) {
    console.log(data);
    plot = new ODCD3.ScatterPlot("#scatterplot", data, conf);

});