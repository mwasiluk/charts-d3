var flowerGroups = {
    key: 'species',
    label: "Species"
};

var confFlowers = {
    x:{
        key: 'sepal width',
        label: 'sepal width'
    },
    frequency: true,
    groups:false
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
var plot, plot2;
var conf = confFlowers;




var values = d3.range(1000).map(d3.random.bates(20));
plot = new ODCD3.Histogram("#plot", values, {
    x:{
        ticks: 14
    }
});

d3.csv("../data/flowers.csv", function(error, data) {
    console.log(data);

    plot2 = new ODCD3.Histogram("#plot2", data, conf);

});
$("#plot2-stacked").change(function(){

    confFlowers.groups = this.checked ?  flowerGroups : false;

    plot2.setConfig(confFlowers).init();
});
$("#plot2-frequency").change(function(){

    confFlowers.frequency = this.checked;

    plot2.setConfig(confFlowers).init();
});

$("#plot2-x-key").change(function(){

    confFlowers.x.label = confFlowers.x.key =  $(this).val();
    plot2.setConfig(confFlowers).init();
});
