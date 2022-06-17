import { MarkerType } from "react-flow-renderer";

/**
 * Descrpition: Created the initial elements(blocks) for the workflow steps mentioned in the procedure
 * section of the code challenge document
 */
export const initialElements = [
  {
    id: "1",
    type: "input",
    data: { label: "1) Prepare balance" },
    position: { x: -1100, y: 200 },
    sourcePosition: "right",
    targetPosition: "left",
  },
  {
    id: "2",
    type: "default",
    data: {
      label:
        "1.1) Place a beaker with 1000ul of distilled H20 on the balance and tare",
    },
    position: { x: -900, y: 200 },
    targetPosition: "left",
    sourcePosition: "right",
  },
  {
    id: "3",
    type: "default",
    data: { label: "2) Place a new pipette tip on the pipettor" },
    position: { x: -700, y: 200 },
    sourcePosition: "right",
    targetPosition: "left",
  },
  {
    id: "4",
    type: "default",
    data: { label: "3) Weigh the pipettes at 100% volume five times" },
    position: { x: -500, y: 200 },
    targetPosition: "left",
    sourcePosition: "right",
  },
  {
    id: "5",
    type: "CustomNode",
    position: { x: -300, y: 200 },
    style: { width: "12%" },
  },
  {
    id: "6",
    type: "default",
    data: { label: "3.2) Record the weigh in the table in step 6.4" },
    position: { x: -100, y: 200 },
    targetPosition: "left",
    sourcePosition: "right",
  },
  {
    id: "7",
    type: "CustomNodeTwo",
    position: { x: 0, y: 450 },
    sourcePosition: "right",
    targetPosition: "left",
  },
  {
    id: "8",
    type: "default",
    data: { label: "4) Data Tables" },
    position: { x: 100, y: 200 },
    targetPosition: "left",
    sourcePosition: "right",
  },
  {
    id: "9",
    type: "default",
    data: {
      label: "5) Calculate Mean, Std. Deviation, Accuracy and Precision",
    },
    position: { x: 300, y: 200 },
    sourcePosition: "right",
    targetPosition: "left",
  },
];

/**
 * Descrpition: Created the initial Edges(connecting lines) for the workflow blocks mentioned in the procedure section of
 * the code challenge document
 */
export const initialEdges = [
  { id: "e1-2", source: "1", target: "2", animated: true },
  { id: "e2-3", source: "2", target: "3", animated: true },
  { id: "e3-4", source: "3", target: "4", animated: true },
  { id: "e4-5", source: "4", target: "5", animated: true },
  { id: "e5-6", source: "5", target: "6", animated: true },
  {
    id: "e7a-5a",
    source: "7",
    sourceHandle: "a",
    target: "5",
    label: "Repeat steps 3.1 to 3.3 four more times",
    labelBgStyle: { fill: "#FFCC00", color: "#fff", fillOpacity: 0.7 },
    labelBgBorderRadius: 4,
    labelStyle: { fill: "red", fontWeight: 700 },
    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
  },
  { id: "e6-7", source: "6", target: "7", animated: true },
  { id: "e7b-8", source: "7", sourceHandle: "b", target: "8", animated: true },
  { id: "e8-9", source: "8", target: "9", animated: true },
  { id: "e9-10", source: "9", target: "10", animated: true },
];
