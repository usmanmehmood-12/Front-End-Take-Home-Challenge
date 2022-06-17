import React, { useState } from "react";
import { Typography, styled } from "@mui/material";
import FlowChart from "./nodes/FlowChart";
import DataTable from "./tables/DataTable";
import FormulaTable from "./tables/FormulaTable";
import { weighContext } from "../context/weightContext";

const StyledTypography = styled(Typography)(() => ({
  margin: "2%",
}));

/**
 * Description: A parent componet that displays the main UI components for the code challenge. Provides the
 * state values using the weigh context provider to the other components.
 *
 * @returns The FlowChart, DataTable & FormulaTable
 */

function ParentComponent() {
  const [weigh, setWeigh] = useState([]);
  const [meanValue, setMeanValue] = useState("");
  const [stdDevValue, setStdDevValue] = useState("");
  const [accuracyValue, setAccuracyValue] = useState("");
  const [precisionValue, setPrecisionValue] = useState("");

  return (
    <>
      <weighContext.Provider
        value={{
          weigh,
          setWeigh,
          meanValue,
          setMeanValue,
          stdDevValue,
          setStdDevValue,
          accuracyValue,
          setAccuracyValue,
          precisionValue,
          setPrecisionValue,
        }}
      >
        <StyledTypography
          variant="h3"
          align="center"
          component="h3"
          color="textSecondary"
          gutterBottom
        >
          Routine Pipette Check & Calibration
        </StyledTypography>
        <FlowChart />
        <DataTable />
        <FormulaTable />
      </weighContext.Provider>
    </>
  );
}

export default ParentComponent;
