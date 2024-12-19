import { Box, useTheme } from "@mui/material";

const ProgressCircle = ({ progress = "0.75", size = "40" }) => {
  
  const angle = progress * 360;
  return (
    <Box
      sx={{
        background: `radial-gradient(${"#1b9ca2"} 55%, transparent 56%),
            conic-gradient(transparent 0deg ${angle}deg, ${"#1ba21d"} ${angle}deg 360deg),
            ${"#8ea21b"}`,
        borderRadius: "50%",
        width: `${size}px`,
        height: `${size}px`,
      }}
    />
  );
};

export default ProgressCircle;