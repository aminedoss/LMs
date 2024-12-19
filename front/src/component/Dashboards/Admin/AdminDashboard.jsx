import SidebarComponent from "./Sidebar";
import GeographyChart from "./front/Geo";
import { Box,Typography } from "@mui/material";


const Dashboard = () => {
  return (
    <Box display="flex">
      {/* Sidebar */}
      <SidebarComponent />
      <Box
        flex="1"
        m="20px"
        color="#ffffff"
        p="20px"
      >
        
        <Box
          display="grid"
          gridTemplateColumns="repeat(12, 1fr)"
          gridAutoRows="140px"
          gap="20px"
        >
      {/* geo */}
      <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={"#727681"}
          padding="30px"
          width={"900px"}
        >
          <Typography
            variant="h5"
            fontWeight="600"
            sx={{ marginBottom: "15px" }}
          >
            Geography Based Traffic
          </Typography>
          <Box height="200px" >
            <GeographyChart isDashboard={true} />
          </Box>
      </Box>

        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
