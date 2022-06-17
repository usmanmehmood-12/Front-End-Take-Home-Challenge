import { Component } from "react";
import { Typography } from "@mui/material";

/**
 * Description: Error boundary class component 
 * @returns An Error Boundary
 */
export class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }
  static getDerivedStateFrom(error) {
    return {
      hasError: true,
    };
  }
  componentDidCatch(error, errorInfo) {
    console.log("logging: ", error, errorInfo);
  }
  render() {
    if (this.state.hasError) {
      return (
        <Typography component="h3" variant="h3">
          Something went wrong..
        </Typography>
      );
    }
    return this.props.children;
  }
}
