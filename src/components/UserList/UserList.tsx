import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Box,
} from "@mui/material";
import ToggleButton from "./ToggleButton";
interface Props {
  userName: string;
  numberOfGames: number;
}

function createData(userName: string, numberOfGames: number) {
  return { userName, numberOfGames };
}

const UserList = (props: Props) => {
  const { userName, numberOfGames } = props;
  const rows = [createData(userName, numberOfGames)];
  return (
    <TableContainer
      sx={{
        border: 1,
        p: 5,
        borderColor: "#D3D3D3",
        width: 500,
      }}
      component={Paper}
    >
      <Table size="small" aria-label="table">
        <TableHead>
          <TableRow>
            <TableCell>User Name</TableCell>
            <TableCell align="center">Number of Games</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.userName}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.userName}
              </TableCell>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  ml:"100px"
                }}
              >
                <ToggleButton />
                <TableCell align="center">{row.numberOfGames}</TableCell>
              </Box>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default UserList;
