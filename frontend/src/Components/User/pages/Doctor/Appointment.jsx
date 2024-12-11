import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { getpatient } from "../../slices/patientSlice";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import { Grid, Typography } from "@mui/material";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export default function Cart() {
  const dispatch = useDispatch();

  const appointment = useSelector((state) => state.patient);
  console.log("Appointment Data:", appointment); 

  React.useEffect(() => {
    dispatch(getpatient());
  }, [dispatch]);

  return (
    <Grid container sx={{ display: "flex", flexDirection: "column" }}>
      <Grid item sx={{ marginTop: "20px", marginBottom: "20px" }}>
        <Typography variant="h4" align="center" gutterBottom>
          User Dashboard
        </Typography>
      </Grid>
      <Grid item>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 600 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>Doctors Name</StyledTableCell>
                <StyledTableCell align="left">Disease</StyledTableCell>
                <StyledTableCell align="left">Date</StyledTableCell>
                <StyledTableCell align="left">Invoice</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {appointment?.list?.user_appointments?.map((item) => (
                <StyledTableRow key={item._id}>
                  <StyledTableCell align="left">{item?.doctor?.name}</StyledTableCell>
                  <StyledTableCell align="left">{item?.disease}</StyledTableCell>
                  <StyledTableCell align="left">{moment.utc(item?.date).format("MM/DD/YYYY")}</StyledTableCell>
                  <StyledTableCell align="left">{item?.doctor?.ammount}</StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </Grid>
  );
}
