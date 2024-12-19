import { Box, Typography } from "@mui/material";

const StatBox = ({ certificate, date }) => {
  return (
    <Box
      sx={{
        width: "400px",  
        height: "100px",  
        backgroundColor: "#343a40",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",  
        alignItems: "flex-start",   
        padding: "0 10px",  
      }}
    >
      <Box display="flex" justifyContent="flex-start" width="100%">
        <Box>
          <Typography variant="h6" fontWeight="bold" sx={{ color: '#D7D4D4' }}>
            {certificate}
          </Typography>
        </Box>
      </Box>

      <Box display="flex" justifyContent="flex-start" width="100%" mt="10px">
        <Typography variant="p" sx={{ color: '#D7D4D4' }}>
          {date}
        </Typography>
        
      </Box>
    </Box>
  );
};

export default StatBox;
