import React from "react";
import NavBarComponent from "./components/NavBarComponent";
import FormComponent from "./components/Form/FormComponent";

function App() {
  return (
    <div>
      <NavBarComponent />
      <FormComponent firstName="" lastName="" userName="" />
    </div>
  );
}

export default App;
