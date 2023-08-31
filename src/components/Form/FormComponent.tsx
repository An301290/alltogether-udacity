import React, { useState } from "react";
import { Container, FormControl } from "@mui/material";
import InputField from "./InputField";
import AddButton from "./AddButton";
import UserList from "../UserList/UserList";

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

  const [numberOfGames, setNumberOfGames] = useState(0);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Form data submitted:", formData);
  };

  return (
    <>
      <form onClick={handleSubmit}>
        <FormControl
          sx={{
            border: 1,
            m: 4,
            p: 5,
            borderColor: "#D3D3D3",
            width: 500,
          }}
        >
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
        </FormControl>
      </form>
      <UserList userName={formData.userName} numberOfGames={numberOfGames} />
    </>
  );
};

export default FormComponent;
