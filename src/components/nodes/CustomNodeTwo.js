import { Handle, Position } from "react-flow-renderer";

/**
 * Description: Created a second custom block for fulfilling the workflow specification of repeating the
 * steps 6.3.1 to 6.3.3 mentioned in the procedure section in the challenge document
 *
 * @returns A Second Custom Workflow Block
 */

function CustomNodeTwo() {
  return (
    <div className="custom-node">
      <Handle id="c" type="target" position={Position.Top} />
      <label htmlFor="text">3.3) Tare the balance</label>
      <Handle type="source" position={Position.Left} id="a" />
      <Handle type="source" position={Position.Right} id="b" />
    </div>
  );
}

export default CustomNodeTwo;
