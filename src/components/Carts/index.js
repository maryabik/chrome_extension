import React from "react";
import ReactDOM from "react-dom";
//import ReactBubbleChart from "react-bubble-chart";
// https://github.com/weknowinc/react-bubble-chart-d3
import BubbleChart from "@weknow/react-bubble-chart-d3";
import ErrorBoundary from "./ErrorBoundary";
import "./styles.scss";

const bubbleClick = label => {
    console.log("Custom bubble click func");
};
const legendClick = label => {
    console.log("Customer legend click func");
};

const App = () => {
    return (
        <div className="App">
            {/*
      <ErrorBoundary message="Problem in index.render: ReactBubbleChart">
        <ReactBubbleChart
          data={{
            _id: "root",
            children: [{ _id: "little", value: 7 }, { _id: "large", value: 21 }]
          }}
        />
      </ErrorBoundary>
      */}
            Example of react-bubble-chart-d3:
            <br />
            <ErrorBoundary message="Problem in index.render: BubbleChart">
                <BubbleChart
                    graph={{
                        zoom: 1.1,
                        offsetX: -0.05,
                        offsetY: -0.01
                    }}
                    //width={1000}
                    //height={800}
                    //padding={0} // optional value, number that set the padding between bubbles
                    //showLegend={true} // optional value, pass false to disable the legend.
                    //legendPercentage={20} // number that represent the % of with that legend going to use.
                    /*legendFont={{
                      family: "Arial",
                      size: 12,
                      color: "#000",
                      weight: "bold"
                    }}*/
                    /*valueFont={{
                      family: "Arial",
                      size: 12,
                      color: "#fff",
                      weight: "bold"
                    }}*/
                    /*labelFont={{
                      family: "Arial",
                      size: 16,
                      color: "#fff",
                      weight: "bold"
                    }}*/
                    //Custom bubble/legend click functions such as searching using the label, redirecting to other page
                    bubbleClickFunc={bubbleClick}
                    legendClickFun={legendClick}
                    data={[
                        { label: "CRM", value: 1 },
                        { label: "API", value: 1 },
                        { label: "Data", value: 1 },
                        { label: "Commerce", value: 1 },
                        { label: "AI", value: 3 },
                        { label: "Management", value: 5 },
                        { label: "Testing", value: 6 },
                        { label: "Mobile", value: 9 },
                        { label: "Conversion", value: 9 }
                        // { label: "Misc", value: 21 },
                        // { label: "Databases", value: 22 },
                        // { label: "DevOps", value: 22 },
                        // { label: "Javascript", value: 23 },
                        // { label: "Languages / Frameworks", value: 25 },
                        // { label: "Front End", value: 26 },
                        // { label: "Content", value: 26 }
                    ]}
                />
            </ErrorBoundary>
        </div>
    );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
