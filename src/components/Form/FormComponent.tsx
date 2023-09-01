import React, { useState } from "react";
import { FormControl } from "@mui/material";
import InputField from "./InputField";
import AddButton from "./AddButton";
import UserList from "../UserList/UserList";

export interface FormData {
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
  const [users, setUsers] = useState<Array<FormData>>([]);
  const [numberOfGames, setNumberOfGames] = useState(0);
  const [check, setCheck] = useState(false);
  const [userNameError, setUserNameError] = useState<string | undefined>(
    undefined
  );
  const [isFormIncomplete, setIsFormIncomplete] = useState(true);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setIsFormIncomplete(
      formData.firstName === "" ||
        formData.lastName === "" ||
        formData.userName === ""
    );
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const userNameExists = users.some(
      (user) => user.userName === formData.userName
    );
    if (userNameExists) {
      setUserNameError(
        "User name already exists. Please choose a different user name."
      );
    } else {
      setUserNameError(undefined);
      setUsers((prevUsers) => [...prevUsers, formData]);
      setFormData({
        firstName: "",
        lastName: "",
        userName: "",
      });
      setIsFormIncomplete(true);
    }
  };

  const handleIncreaseNumber = () => {
    setNumberOfGames(check ? numberOfGames + 1 : numberOfGames + 0);
    setCheck(!check);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
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
            error={undefined}
          />
          <InputField
            label={"Last Name"}
            name={"lastName"}
            value={formData.lastName}
            onChange={handleChange}
            error={undefined}
          />
          <InputField
            label={"User Name"}
            name={"userName"}
            value={formData.userName}
            onChange={handleChange}
            helperText={userNameError}
          />
          <AddButton isFormIncomplete={isFormIncomplete} />
        </FormControl>
      </form>
      {users.length > 0 && (
        <UserList
          users={users}
          handleIncreaseNumber={handleIncreaseNumber}
          numberOfGames={numberOfGames}
          check={check}
        />
      )}
    </>
  );
};

export default FormComponent;
