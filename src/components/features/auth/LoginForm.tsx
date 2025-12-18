import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import Paper from "@mui/material/Paper";

interface LoginFormProps {
  isLoginMode: boolean;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  onToggleMode: () => void;
}

export function LoginForm({ isLoginMode, onSubmit, onToggleMode }: LoginFormProps) {
  return (
    <Paper elevation={3} sx={{ p: 4, mt: 8 }}>
      <Box display="flex" flexDirection="column" alignItems="center">
        <Typography component="h1" variant="h4" sx={{ mb: 3 }}>
          {isLoginMode ? "Login" : "Register"}
        </Typography>
        <Box component="form" width="100%" sx={{ mt: 2 }} onSubmit={(e) => void onSubmit(e)}>
          <Grid container spacing={2}>
            {!isLoginMode && (
              <>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <InputLabel htmlFor="firstName">First Name</InputLabel>
                  <TextField name="firstName" required fullWidth id="firstName" autoFocus />
                </Grid>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <InputLabel htmlFor="lastName">Last Name</InputLabel>
                  <TextField required fullWidth id="lastName" name="lastName" />
                </Grid>
              </>
            )}
            <Grid size={{ xs: 12 }}>
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
            <Grid size={{ xs: 12 }}>
              <InputLabel htmlFor="password">Password</InputLabel>
              <TextField
                required
                fullWidth
                name="password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
            </Grid>
            <Grid size={{ xs: 12 }} sx={{ mt: 2 }}>
              <Button type="submit" fullWidth variant="contained" color="primary" size="large">
                {isLoginMode ? "Login" : "Register"}
              </Button>
            </Grid>
            <Grid size={{ xs: 12 }}>
              <Button
                fullWidth
                variant="text"
                onClick={onToggleMode}
                sx={{ textTransform: "capitalize", color: "text.secondary" }}
              >
                {isLoginMode ? "New here? Register" : "Already have an account? Login"}
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Paper>
  );
}
