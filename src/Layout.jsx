import { Box, Typography } from "@mui/material";

{
  /* <Layout>
  <App /> --> children
</Layout>; */
}
// HOC - Higher order component
const Layout = (props) => {
  const { children } = props;
  return (
    <Box>
      <Box
        sx={{
          height: 80,
          width: "100%",
          backgroundColor: "black",
        }}
      >
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          height="100%"
        >
          <Typography variant="h4" color="white" marginLeft={2}>
            My App
          </Typography>

          <Box display="flex" gap={2} marginRight={2}>
            <Typography variant="h6" color="white">
              Home
            </Typography>
            <Typography variant="h6" color="white">
              About
            </Typography>
            <Typography variant="h6" color="white">
              Contact
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box display="flex">
        <Box
          sx={{
            borderRight: "1px solid",
            width: "10%",
          }}
        >
          <Box>
            <Typography variant="h5" margin={2}>
              Home{" "}
            </Typography>
            <Typography variant="h5" margin={2}>
              Cart{" "}
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            width: "90%",
          }}
        >
          {children}
        </Box>
      </Box>
    </Box>
  );
};

export default Layout;
