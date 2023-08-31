import { Box } from "@mui/material";
import NavBarComponent from "./components/NavBarComponent";
import FormComponent from "./components/Form/FormComponent";

function App() {
  return (
    <Box>
      <NavBarComponent />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <FormComponent firstName="" lastName="" userName="" />
      </Box>
    </Box>
  );
}

export default App;
