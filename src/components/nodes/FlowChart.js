import React, { useState, Fragment, useCallback } from "react";
import { useErrorHandler } from "react-error-boundary";
import ReactFlow, {
  addEdge,
  Background,
  Controls,
  useEdgesState,
  MiniMap,
  MarkerType,
} from "react-flow-renderer";
import { TextField, Button, Grid, Paper, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

import CustomNodeTwo from "./CustomNodeTwo";
import { initialElements, initialEdges } from "./utils/nodeUtils";
import CustomNode from "./CustomNode";

import "./custom-node.css";

const StyledGrid = styled(Grid)(() => ({
  marginTop: "1%",
  justifyContent: "center",
  alignItems: "center",
  display: "flex",
}));

const StyledReactFlow = styled(ReactFlow)(() => ({
  width: "100%",
  height: "75vh",
}));

const StyledButton = styled(Button)(() => ({
  margin: "2%",
}));

const StyledTypography = styled(Typography)(() => ({
  color: "#f44336",
  fontSize: "0.75rem",
}));

const StyledPaper = styled(Paper)(() => ({
  backgroundColor: "#fafafa",
  width: "30%",
}));
const nodeTypes = { CustomNode, CustomNodeTwo };

const onLoad = (reactFlowInstance) => {
  reactFlowInstance.fitView();
};

/**
 * Description: This component displays the complete flowchart created
 * using the ReactFlow library, new blocks can be added and named using the
 * append button
 *
 * @returns Complete Flow Chart
 */
const FlowChart = () => {
  const [elements, setElements] = useState(initialElements);
  const [edges, setEdges] = useEdgesState(initialEdges);
  const [name, setName] = useState("");

  const handleError = useErrorHandler();
  const addNode = () => {
    try {
      if (name !== "") {
        document.getElementById("err").innerHTML = "";
        setElements((e) =>
          e.concat({
            id: (e.length + 1).toString(),
            data: { label: `${name}` },
            position: {
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            },
          })
        );
      } else {
        document.getElementById("err").innerHTML = "Enter Block Name";
      }
    } catch (error) {
      handleError(error);
    }
  };

  const onConnect = useCallback(
    (params) =>
      setEdges((eds) =>
        addEdge(
          {
            ...params,
            type: "floating",
            markerEnd: { type: MarkerType.Arrow },
          },
          eds
        )
      ),
    []
  );

  return (
    <Fragment>
      <Paper elevation={2}>
        <Grid container>
          <StyledReactFlow
            nodes={elements}
            edges={edges}
            onLoad={onLoad}
            nodeTypes={nodeTypes}
            onConnect={onConnect}
            connectionLineStyle={{ stroke: "#ddd", strokeWidth: 2 }}
            connectionLineType="bezier"
            snapToGrid={true}
            snapGrid={[16, 16]}
            fitView
          >
            <Background color="#888" gap={16} />
            <MiniMap
              nodeColor={(n) => {
                if (n.type === "input") return "blue";
                return "#FFCC00";
              }}
            />
            <Controls />
          </StyledReactFlow>
        </Grid>
      </Paper>
      <StyledGrid spacing={2} container>
        <StyledPaper variant="outlined">
          <Grid
            style={{
              margin: "2%",
            }}
            item
            xs={12}
          >
            <Typography
              variant="h6"
              align="center"
              component="p"
              color="textPrimary"
            >
              Enter Workflow Block Name:
            </Typography>
            <TextField
              type="text"
              onChange={(e) => setName(e.target.value)}
              name="title"
            />
            <StyledTypography id="err" component="p"></StyledTypography>
          </Grid>
          <Grid item xs={12}>
            <StyledButton variant="contained" type="button" onClick={addNode}>
              Append Workflow
            </StyledButton>
          </Grid>
        </StyledPaper>
      </StyledGrid>
    </Fragment>
  );
};

export default FlowChart;
