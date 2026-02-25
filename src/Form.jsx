import { Formik, Form } from "formik";
import { Button, TextField, Grid, Box } from "@mui/material";
import * as Yup from "yup";

const loginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .min(10, "Password must be at least 10 characters")
    .required("Password is required"),
  price: Yup.string()
    .test("is-valid-price", "Price must be in the format $10", (value) => {
      const priceRegex = /^\$\d+(\.\d{2})?$/;
      return priceRegex.test(value);
    })
    .required("Price is required"),
});

const FormRender = () => {
  return (
    <Box
      height="100vh"
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <Box
        width="80vw"
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Formik
          initialValues={{ email: "", password: "", price: "$10" }}
          onSubmit={(values, { setSubmitting }) => {
            console.log(values);
            setSubmitting(false);
          }}
          validationSchema={loginSchema}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
          }) => (
            <Form onSubmit={handleSubmit}>
              <Grid container spacing={2} width={350}>
                <Grid item size={12}>
                  <TextField
                    variant="filled"
                    type="email"
                    name="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                    placeholder="Enter email"
                    fullWidth
                    error={errors.email && touched.email}
                    helperText={errors.email && touched.email && errors.email}
                  />
                </Grid>
                <Grid item size={12}>
                  <TextField
                    variant="filled"
                    type="password"
                    name="password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                    placeholder="Enter password"
                    fullWidth
                    error={errors.password && touched.password}
                    helperText={
                      errors.password && touched.password && errors.password
                    }
                  />
                </Grid>
                <Grid item size={12}>
                  <TextField
                    variant="filled"
                    type="text"
                    name="price"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.price}
                    placeholder="Enter price"
                    fullWidth
                    error={errors.price && touched.price}
                    helperText={errors.price && touched.price && errors.price}
                  />
                </Grid>
              </Grid>

              <Button
                variant="outlined"
                type="submit"
                disabled={isSubmitting}
                sx={{ marginTop: "20px" }}
              >
                Login
              </Button>
            </Form>
          )}
        </Formik>
      </Box>
    </Box>
  );
};

export default FormRender;
