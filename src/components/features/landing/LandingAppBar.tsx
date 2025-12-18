import Button from "@mui/material/Button";
import { Link } from "react-router";
import { AppBarContainer } from "../../common";

export function LandingAppBar({ page }: { page: string | undefined }) {
  return (
    <AppBarContainer
      brand="EXPENSEIT"
      pageTitle={page}
      rightContent={
        <Button color="inherit" sx={{ fontWeight: "700" }} component={Link} to="/login">
          Login
        </Button>
      }
    />
  );
}
