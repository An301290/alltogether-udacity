import React, { useState } from "react";
import { Container, FormControl } from "@mui/material";
import InputField from "./InputField";
import AddButton from "./AddButton";

interface FormData {
  firstName: string;
  lastName: string;
  userName: string;
}

const FormComponent = (props: FormData) => {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    userName: "",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <Container maxWidth="sm">
      <form>
        <InputField
          label={"First Name"}
          name={"firstName"}
          value={formData.firstName}
          onChange={handleChange}
        />
        <InputField
          label={"Last Name"}
          name={"lastName"}
          value={formData.lastName}
          onChange={handleChange}
        />
        <InputField
          label={"User Name"}
          name={"userName"}
          value={formData.userName}
          onChange={handleChange}
          helperText="User Name already exist"
        />
        <AddButton />
      </form>
    </Container>
  );
};

export default FormComponent;
