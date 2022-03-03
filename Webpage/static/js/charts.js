console.log("hello TeamSix!")

//creating arrays
var bfpData = [];
var ipoutsData = [];
var eraData = [];
var gfData = [];
var soData = [];
var salaryData = [];
var counter = 0

//calling the functions
init();
data();

///////////////////FUNCTIONS///////////////////

///////////////////dropDownList////////////////
function init() {
var selector = d3.select("#selDataset");
d3.json("./cleanData/newerData.json").then((data) => {
  var sampleNames = data.names;
    //print array of options in the dropdown list
    console.log(sampleNames)

  sampleNames.forEach((sample) => {
    console.log(sample)
    selector
      .append("option")
      .text(sample)
      .property("value", sample);
  });
});
}

/////////////optionChanged Called in HTML//////////
function optionChanged(attributevalue) {
      //print statement
      console.log(attributevalue)
  
  // if element is undefined use the new id    
  if(document.getElementsByClassName("js-plotly-plot")[counter] != undefined) {
   var x = (document.getElementsByClassName("js-plotly-plot")[counter].id)
    //create a new plotly chart
    Plotly.purge(x);

    console.log(document.getElementsByClassName("js-plotly-plot")[counter])
    //keep track of clicks
    console.log("counter=", counter)
    counter++
  }

  //create divs in HTML
  var inner_div = document.createElement('div');
  inner_div.class = "plotgraph"
  inner_div.id = attributevalue
  document.body.appendChild(inner_div)

  //id for generating chart
  switch(attributevalue) {
    case "ERA" : 
      buildERACharts(eraData);
      break;
    case "Batters Faced by Pitcher":
      buildBFPCharts(bfpData);
      break;
    case "Outs Pitched" : 
      buildIPoutsCharts(ipoutsData);
      break;
    case "Games Finished":
      buildGFCharts(gfData);
      break;
    case "Strike Outs":
      buildSOCharts(soData);
      break;
  

    default:
      // code block
  }
}


//function to gather data for generating a list
function data() {
  d3.json("./cleanData/newerData.json").then((data) => {
    var allData = data.metadata
    console.log(allData)
    generatelist(data.metadata);
  });
}


  //function to create a list of attributes to use for charts
function generatelist(allDataHolder) {
  //loop for filtering the attributes
  for (let i = 0; i < allDataHolder.length; i++) {

      bfpData.push(allDataHolder[i]["Batters Faced by Pitcher"]);
      ipoutsData.push(allDataHolder[i]["Outs Pitched"]);
      eraData.push(allDataHolder[i]["ERA"]);
      gfData.push(allDataHolder[i]["Games Finished"]);
      soData.push(allDataHolder[i]["Strike Outs"]);
      salaryData.push(allDataHolder[i]["Salary"]);
  }
  //print data in console
  console.log(bfpData)
  console.log(ipoutsData)
  console.log(eraData)
  console.log(gfData)
  console.log(soData)
  console.log(salaryData)
}

///////////////////chartFUNCTIONS///////////////////

// function for BFP chart
function buildBFPCharts(attributeBFP) {
  d3.json("./cleanData/newerData.json").then((data) =>{
    var allData = data.metadata
    var salaryData = [];

    for (let i = 0; i < allData.length; i++) {
      salaryData.push(allData[i]["Salary"]);
  }
      var trace1 = {
        x: attributeBFP,
        y: salaryData,
        text: attributeBFP,
        mode: 'markers',
        marker: {
          color: attributeBFP,
        }
      };
      
      var bubbleData = [trace1];
      
      var bubbleLayout = {
        title: "Salary based on Batters Faced by Pitcher",
        showlegend: false,
        hovermode: "closest",
        height: 700,
      };
    
      Plotly.newPlot('Batters Faced by Pitcher',bubbleData, bubbleLayout);
    })}

// function for IPouts chart
function buildIPoutsCharts(attributeIPouts) {
  d3.json("./cleanData/newerData.json").then((data) =>{
    var allData = data.metadata
    var salaryData = [];

    for (let i = 0; i < allData.length; i++) {
      salaryData.push(allData[i]["Salary"]);
  }
      var trace1 = {
        x: attributeIPouts,
        y: salaryData,
        text: attributeIPouts,
        mode: 'markers',
        marker: {
          color: attributeIPouts,
        }
      };
      
      var bubbleData = [trace1];
      
      var bubbleLayout = {
        title: "Salary based on Outs Pitched",
        showlegend: false,
        hovermode: "closest",
        height: 700,
      };
    
      Plotly.newPlot('Outs Pitched',bubbleData, bubbleLayout);
    })}

// function for ERA chart
function buildERACharts(attributeERA) {
  d3.json("./cleanData/newerData.json").then((data) =>{
    var allData = data.metadata
    var salaryData = [];

    for (let i = 0; i < allData.length; i++) {
      salaryData.push(allData[i]["Salary"]);
  }
      var trace1 = {
        x: attributeERA,
        y: salaryData,
        text: attributeERA,
        mode: 'markers',
        marker: {
          color: attributeERA,
        }
      };
      
      var bubbleData = [trace1];
      
      var bubbleLayout = {
        title: "Salary based on Earned Run Average",
        showlegend: false,
        hovermode: "closest",
        height: 700,
      };
    
      Plotly.newPlot('ERA',bubbleData, bubbleLayout);
    })}

// function for GF chart    
function buildGFCharts(attributeGF) {
  d3.json("./cleanData/newerData.json").then((data) =>{
    var allData = data.metadata
    var salaryData = [];

    for (let i = 0; i < allData.length; i++) {
      salaryData.push(allData[i]["Salary"]);
  }
      var trace1 = {
        x: attributeGF,
        y: salaryData,
        text: attributeGF,
        mode: 'markers',
        marker: {
          color: attributeGF,
        }
      };
      
      var bubbleData = [trace1];
      
      var bubbleLayout = {
        title: "Salary based on Games Finished",
        showlegend: false,
        hovermode: "closest",
        height: 700,
      };
    
      Plotly.newPlot('Games Finished',bubbleData, bubbleLayout);
    })}

// function for SO chart    
function buildSOCharts(attributeSO) {
  d3.json("./cleanData/newerData.json").then((data) =>{
    var allData = data.metadata
    var salaryData = [];

    for (let i = 0; i < allData.length; i++) {
      salaryData.push(allData[i]["Salary"]);
  }
      var trace1 = {
        x: attributeSO,
        y: salaryData,
        text: attributeSO,
        mode: 'markers',
        marker: {
          color: attributeSO,
        }
      };
      
      var bubbleData = [trace1];
      
      var bubbleLayout = {
        title: "Salary based on Strike Outs",
        showlegend: false,
        hovermode: "closest",
        height: 700,
      };
    
      Plotly.newPlot('Strike Outs',bubbleData, bubbleLayout);
    })}