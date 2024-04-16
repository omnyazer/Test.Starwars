import { Box } from "@mui/material";
import kylorenImage from "../StarWars/images/kyloren-2x.jpg";

function Section3() {
  return (
    <Box sx={{ textAlign: "center" }}>
      <img
        src={kylorenImage}
        alt="kylorenImage"
        style={{ maxWidth: "100%", height: "auto" }}
      />
    </Box>
  );
}

export default Section3;
