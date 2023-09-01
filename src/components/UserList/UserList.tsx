import React, { useState } from "react";
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Switch,
} from "@mui/material";

import { FormData } from "../Form/FormComponent";

interface UserListProps {
  users: Array<FormData>;
  handleIncreaseNumber: () => void;
  numberOfGames: number;
  check: boolean;
}

const UserList: React.FC<UserListProps> = ({
  users,
  handleIncreaseNumber,
  numberOfGames,
  check,
}) => {
  return (
    <Box sx={{ width: 900 }}>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align="center">First Name</TableCell>
              <TableCell align="center">Last Name</TableCell>
              <TableCell align="center">User Name</TableCell>
              <TableCell align="center">Number of Games</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user, index) => (
              <TableRow key={index}>
                <TableCell align="center">{user.firstName}</TableCell>
                <TableCell align="center">{user.lastName}</TableCell>
                <TableCell align="center">{user.userName}</TableCell>
                <TableCell align="center">
                  {check ? numberOfGames : null}
                  <Switch onClick={handleIncreaseNumber} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default UserList;
