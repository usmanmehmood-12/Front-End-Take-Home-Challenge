import React, { useCallback, useContext, useEffect } from "react";
import {
  Grid,
  Typography,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  Divider,
  Paper,
} from "@mui/material";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import { styled } from "@mui/material/styles";

import { weighContext } from "../../context/weightContext";

const StyledGrid = styled(Grid)(() => ({
  marginTop: "5%",
  marginBottom: "10%",
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
 * Description: The formula table dynamically calculates the values for mean, std. deviation, accuracy &
 * precision. It does this by taking the test volume from the parent and and datatable component using
 * the context api.
 *
 * @returns The Formula Table
 */

const FormulaTable = () => {
  let {
    weigh,
    meanValue,
    setMeanValue,
    stdDevValue,
    setStdDevValue,
    accuracyValue,
    setAccuracyValue,
    precisionValue,
    setPrecisionValue,
  } = useContext(weighContext);

  const calcFormulas = useCallback(() => {
    let sum = 0;
    let tempMean = 0;
    let tempArr = [];
    let tempVal = 0;
    let tempMax = 0;
    let tempMin = 0;
    let tempRange = 0;
    let tempPercentError = 0;

    try {
      /**
       *  Mean Calculation
       *
       *  */

      for (let Weigh of weigh) {
        sum += Number(Weigh.value);
      }

      tempMean = sum / weigh.length;
      setMeanValue(tempMean);

      /**
       * Std. Deviation Calculation
       *
       *  */

      for (let Weigh of weigh) {
        tempArr.push(Math.pow(Number(Weigh.value) - tempMean, 2));
      }

      sum = 0; //did for std dev

      for (let value of tempArr) {
        sum += value;
      }

      tempVal = Math.sqrt(sum / weigh.length); //Std dev value
      setStdDevValue(tempVal.toFixed(2));

      /**
       * Precision Calculation
       *
       *  */
      tempArr = [...weigh];
      tempArr.sort((a, b) => a.value - b.value); //sorted
      tempMax = Math.max(...tempArr.map((a) => a.value));
      tempMin = Math.min(...tempArr.map((a) => a.value));
      tempRange = tempMax - tempMin;
      setPrecisionValue(`${tempMean} ± ${tempRange}`);

      /**
       * Accuracy Calculation
       *
       *  */
      tempPercentError = ((100 - tempMean) / 100) * 100;
      setAccuracyValue(tempPercentError.toFixed(2));
    } catch (error) {
      console.log(error);
    }
  }, [weigh, meanValue]);

  useEffect(() => {
    if (weigh.length === 5) {
      /** calcFormulas function Called */
      calcFormulas();
    }
  }, [calcFormulas]);
  return (
    <StyledGrid
      direction="column"
      alignItems="center"
      justifyContent="center"
      container
      spacing={0}
    >
      <StyledPaper elevation={2}>
        <Grid item xs={12}>
          <Typography
            variant="h5"
            align="center"
            component="h5"
            color="textSecondary"
            gutterBottom
          >
            Mean, Std. Deviation, Accuracy, Precision
            <Divider />
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <TableContainer>
            <Table
              sx={{ minWidth: 400, maxWidth: 700 }}
              aria-label="customized table"
            >
              <TableHead>
                <TableRow>
                  <StyledTableCell>Test Volume </StyledTableCell>
                  <StyledTableCell align="left">Mean</StyledTableCell>
                  <StyledTableCell align="left">Std. Deviation</StyledTableCell>
                  <StyledTableCell align="left">Accuracy(%)</StyledTableCell>
                  <StyledTableCell align="left">Precision(%)</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <StyledTableRow>
                  <StyledTableCell component="th" scope="row">
                    100%
                  </StyledTableCell>
                  <StyledTableCell align="left">{meanValue}</StyledTableCell>
                  <StyledTableCell align="left">{stdDevValue}</StyledTableCell>
                  <StyledTableCell align="left">
                    {accuracyValue}
                  </StyledTableCell>
                  <StyledTableCell align="left">
                    {precisionValue}
                  </StyledTableCell>
                </StyledTableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </StyledPaper>
    </StyledGrid>
  );
};

export default FormulaTable;
