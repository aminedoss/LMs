import { ResponsiveChoropleth } from "@nivo/geo";
import { geoFeatures } from "./geoData"; // Ensure this contains the correct features
import { mockGeographyData as data } from "./geoData"; // Ensure this contains properly structured data

const GeographyChart = ({ isDashboard = false }) => {
  console.log(data); // Check the structure of your data

  // Define mouse event handlers
  const handleMouseEnter = (feature, event) => {
    // Your logic for mouse enter event
    console.log(`Mouse entered: ${feature.properties.name}`);
  };

  const handleMouseLeave = () => {
    // Your logic for mouse leave event
    console.log("Mouse left the feature");
  };

  return (
    <ResponsiveChoropleth
      data={data} // Ensure this contains objects with `id` and `value`
      theme={{
        axis: {
          domain: {
            line: {
              stroke: "#e0e0e0",
            },
          },
          legend: {
            text: {
              fill: "#e0e0e0",
            },
          },
          ticks: {
            line: {
              stroke: "#e0e0e0",
              strokeWidth: 1,
            },
            text: {
              fill: "#e0e0e0",
            },
          },
        },
        legends: {
          text: {
            fill: "#e0e0e0",
          },
        },
      }}
      features={geoFeatures.features} // Ensure these features are correct
      margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
      domain={[0, 1000000]}
      unknownColor="#666666"
      label="properties.name"
      valueFormat=".2s"
      projectionScale={isDashboard ? 40 : 150}
      projectionTranslation={isDashboard ? [0.49, 0.6] : [0.5, 0.5]}
      projectionRotation={[0, 0, 0]}
      borderWidth={1.5}
      borderColor="#ffffff"
      colors={["#f7f7f7", "#d9f0d3", "#addd8e", "#78c679", "#31a354", "#006837"]}
      legends={
        !isDashboard
          ? [
              {
                anchor: "bottom-left",
                direction: "column",
                justify: true,
                translateX: 20,
                translateY: -100,
                itemsSpacing: 0,
                itemWidth: 94,
                itemHeight: 18,
                itemDirection: "left-to-right",
                itemTextColor: "#e0e0e0",
                itemOpacity: 0.85,
                symbolSize: 18,
                effects: [
                  {
                    on: "hover",
                    style: {
                      itemTextColor: "#ffffff",
                      itemOpacity: 1,
                    },
                  },
                ],
              },
            ]
          : undefined
      }
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    />
  );
};

export default GeographyChart;
