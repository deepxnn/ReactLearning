import { useRouteError } from "react-router";
import { Box } from "@mui/material";

export function ErrorPage() {
  let error = useRouteError();
  return (
    <Box>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </Box>
  );
}
