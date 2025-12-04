import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import InputLabel from "@mui/material/InputLabel";
import { useState } from "react";
import { useAuth } from "../../hooks/Auth";

export function LoginOrRegister() {
  const [isLoginMode, setIsLoginMode] = useState(true);

  const auth = useAuth();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const email = data.get("email") as string;
    const password = data.get("password") as string;
    if (isLoginMode) {
      try {
        await auth.login({ email, password });
        // Successful login actions can be handled here, e.g., redirecting the user
      } catch (error) {
        console.error("Login error:", error);
        // Optionally, display an error message to the user
      }
    } else {
      const firstName = data.get("firstName") as string;
      const lastName = data.get("lastName") as string;
      try {
        await auth.register({ firstName, lastName, email, password });
        // Successful registration actions can be handled here, e.g., redirecting the user
      } catch (error) {
        console.error("Registration error:", error);
        // Optionally, display an error message to the user
      }
    }
  };

  return (
    // MUI heirarchy: Container > Paper > Box > Typography + Box(form) > Grid > TextFields, Buttons
    <Container maxWidth="sm" component="main" sx={{ marginTop: 8 }}>
      <Paper elevation={3} sx={{ padding: 4, marginTop: 8 }}>
        <Box display="flex" flexDirection="column" alignItems="center">
          <Typography component="h1" variant="h5">
            {isLoginMode ? "Login" : "Register"}
          </Typography>
          <Box component="form" width="100%" sx={{ mt: 3 }} onSubmit={(e) => void handleSubmit(e)}>
            <Grid container spacing={2}>
              {!isLoginMode && (
                <>
                  <Grid size={{ xs: 12, sm: 6 }} mt={2}>
                    <InputLabel htmlFor="firstName">First Name</InputLabel>
                    <TextField name="firstName" required fullWidth id="firstName" autoFocus />
                  </Grid>
                  <Grid size={{ xs: 12, sm: 6 }} mt={2}>
                    <InputLabel htmlFor="lastName">Last Name</InputLabel>
                    <TextField required fullWidth id="lastName" name="lastName" />
                  </Grid>
                </>
              )}
              <Grid size={{ xs: 12 }} mt={2}>
                <InputLabel htmlFor="email">Email Address</InputLabel>
                <TextField
                  required
                  fullWidth
                  id="email"
                  name="email"
                  autoComplete="email"
                  placeholder="your@email.com"
                />
              </Grid>
              <Grid size={{ xs: 12 }} mt={2}>
                <InputLabel htmlFor="password">Password</InputLabel>
                <TextField
                  required
                  fullWidth
                  name="password"
                  type="password"
                  id="password"
                  placeholder="*****"
                />
              </Grid>
              <Grid size={{ xs: 12 }} mt={2}>
                <Button
                  fullWidth
                  variant="contained"
                  color="primary"
                  type="submit"
                  disabled={auth.isLoading}
                >
                  {isLoginMode ? "Login" : "Register"}
                </Button>
              </Grid>
            </Grid>
            <Box mt={2}>
              <Button
                fullWidth
                variant="text"
                color="secondary"
                onClick={() => setIsLoginMode(!isLoginMode)}
                disabled={auth.isLoading}
              >
                {isLoginMode ? "Don't have an account? Register" : "Already have an account? Login"}
              </Button>
            </Box>
          </Box>
        </Box>
      </Paper>
    </Container>
  );
}
