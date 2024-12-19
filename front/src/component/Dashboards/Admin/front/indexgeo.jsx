import { Box } from "@mui/material";
import GeographyChart from "./Geo";

const Geography = () => {
 
  return (
    <Box m="20px">
        
      <Box
        height="75vh"
        border={`1px solid ${"#e0e0e0"}`}
        borderRadius="4px"
      >
        <GeographyChart />
      </Box>
    </Box>
  );
};

export default Geography;