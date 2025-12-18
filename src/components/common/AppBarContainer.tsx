import type { SxProps, Theme } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Link } from "react-router";

interface AppBarContainerProps {
  brand?: string;
  pageTitle?: string;
  rightContent?: React.ReactNode;
  sx?: SxProps<Theme>;
}

export function AppBarContainer({
  brand = "EXPENSEIT",
  pageTitle,
  rightContent,
  sx,
}: AppBarContainerProps) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ px: 3, py: 0.5, ...sx }}>
        <Toolbar sx={{ justifyContent: "space-between", alignItems: "center" }}>
          <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
            <Typography variant="h1" component="h1" sx={{ fontWeight: "700" }}>
              {`${brand}${pageTitle ? ` | ${pageTitle}` : ""}`}
            </Typography>
          </Link>
          {rightContent && <Box>{rightContent}</Box>}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
