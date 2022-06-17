import { Handle, Position } from "react-flow-renderer";

/**
 * Description: Created a custom block for fulfilling the workflow specification mentioned in the
 *  challenge document
 *
 * @returns A Custom Workflow Block
 */
function CustomNode() {
  return (
    <div className="custom-node">
      <Handle id="c" type="target" position={Position.Left} />
      <label htmlFor="text">
        3.1) Aspirate and dispense 100% of the volume into the beaker
      </label>
      <Handle type="source" position={Position.Right} id="b" />
    </div>
  );
}

export default CustomNode;
