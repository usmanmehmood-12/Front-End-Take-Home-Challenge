import React, { useContext } from "react";
import { useErrorHandler } from "react-error-boundary";
import {
  Button,
  Grid,
  Typography,
  TextField,
  TableRow,
  Table,
  TableHead,
  TableContainer,
  TableBody,
  Paper,
  Divider,
} from "@mui/material";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import { styled } from "@mui/material/styles";

import { weighContext } from "../../context/weightContext";

const StyledButton = styled(Button)(() => ({
  margin: "2%",
  float: "right",
}));

const StyledTypography = styled(Typography)(() => ({
  margin: "1%",
  color: "#f44336",
  fontSize: "0.75rem",
  float: "left",
}));

const StyledPaper = styled(Paper)(() => ({
  backgroundColor: "#fafafa",
}));

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
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

/**
 * Description: The DataTable component displays the data table for the weight of water from step 6.3 in
 * the procedure document. The TestVolume in the data table has been made dynamic which can be updated
 * in each dispense.
 *
 * @returns The DataTable
 */

const DataTable = () => {
  let { weigh, setWeigh } = useContext(weighContext);
  const handleError = useErrorHandler();
  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      document.getElementById("errData").innerHTML = "";
      if (e.target[0].value && weigh.length < 5) {
        setWeigh([
          ...weigh,
          {
            id: weigh.length,
            value: e.target[0].value,
          },
        ]);
        e.target.reset();
      } else if (!e.target[0].value) {
        document.getElementById("errData").innerHTML = "Enter Test Value";
      }
    } catch (error) {
      handleError(error);
    }
  };
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      style={{ marginTop: "5%" }}
    >
      <StyledPaper elevation={2}>
        <Grid item xs={12}>
          <Typography
            variant="h4"
            align="center"
            component="h3"
            color="textSecondary"
            gutterBottom
          >
            Data Table
            <Divider />
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <form onSubmit={handleSubmit}>
            <TableContainer>
              <Table
                sx={{ minWidth: 400, maxWidth: 780 }}
                aria-label="customized table"
              >
                <TableHead>
                  <TableRow>
                    <StyledTableCell>Test Volume </StyledTableCell>
                    <StyledTableCell align="left">Dispense-1</StyledTableCell>
                    <StyledTableCell align="left">Dispense-2</StyledTableCell>
                    <StyledTableCell align="left">Dispense-3</StyledTableCell>
                    <StyledTableCell align="left">Dispense-4</StyledTableCell>
                    <StyledTableCell align="left">Dispense-5</StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <StyledTableRow>
                    <StyledTableCell component="th" scope="row">
                      <TextField
                        label="Enter Volume"
                        type="number"
                        size="small"
                      />
                    </StyledTableCell>
                    {weigh.map((weigh) => {
                      return (
                        <StyledTableCell key={weigh.id} align="left">
                          {weigh.value}
                        </StyledTableCell>
                      );
                    })}
                  </StyledTableRow>
                </TableBody>
              </Table>
            </TableContainer>
            <Divider />
            <StyledTypography id="errData" component="p"></StyledTypography>
            <StyledButton variant="outlined" type="submit">
              Select Value
            </StyledButton>
          </form>
        </Grid>
      </StyledPaper>
    </Grid>
  );
};

export default DataTable;
