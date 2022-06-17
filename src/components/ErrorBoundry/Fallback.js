import { Typography } from "@mui/material";

/**
 * Description: A fall back component for error boundary 
 * @returns Fallback Component
 */
export const Fallback = () => {
  return (
    <Typography component="h3" variant="h3">
      Something went wrong..
    </Typography>
  );
};
