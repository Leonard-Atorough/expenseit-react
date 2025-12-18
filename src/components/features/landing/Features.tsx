import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

export function Features() {
  // MUI features page
  // MUI components heirarchy: Box > Grid > Card > CardContent > Typography
  // Features are: Expense tracking (income and expenses), Analytics and charts, Budgeting tools.

  return (
    <Box
      sx={{
        flexGrow: 1,
        py: 8,
        px: 4,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Container maxWidth="lg" sx={{ mb: 6 }}>
        <Typography variant="h2" component="h2" gutterBottom align="center">
          Features
        </Typography>
        <Typography variant="h5" component="h3" color="text.secondary" align="center">
          Explore the powerful features that make ExpenseIt your go-to solution for managing
          personal finances.
        </Typography>
      </Container>
      <Grid
        container
        spacing={4}
        maxWidth="lg"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
      >
        <Grid
          size={{ xs: 12, md: 6 }}
          width="100%"
          display="flex"
          alignItems="space-between"
          justifyContent="center"
          gap={4}
        >
          <Card sx={{ minWidth: 275, p: 3, mb: 4, backgroundColor: "background.default" }} elevation={3}>
            <Typography variant="h5" component="h3" gutterBottom>
              Expense Tracking
            </Typography>
            <Typography variant="body1" color="text.secondary" mb={4}>
              Track your income and expenses effortlessly to stay on top of your financial health.
            </Typography>
          </Card>
          <Card sx={{ minWidth: 275, p: 3, mb: 4, backgroundColor: "background.default" }} elevation={3}>
            <Typography variant="h5" component="h3" gutterBottom>
              Analytics and Charts
            </Typography>
            <Typography variant="body1" color="text.secondary" mb={4}>
              Visualize your spending patterns with interactive charts and detailed analytics.
            </Typography>
          </Card>
          <Card sx={{ minWidth: 275, p: 3, mb: 4, backgroundColor: "background.default" }} elevation={3}>
            <Typography variant="h5" component="h3" gutterBottom>
              Budgeting Tools
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Set budgets and financial goals to manage your money effectively and achieve your
              objectives.
            </Typography>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}
