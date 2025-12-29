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
  position?: "absolute" | "fixed" | "relative" | "static" | "sticky";
  sx?: SxProps<Theme>;
}

export function AppBarContainer({
  brand = "EXPENSEIT",
  pageTitle,
  rightContent,
  position = "relative",
  sx,
}: AppBarContainerProps) {
  return (
    <AppBar position={position} sx={{ px: 3, py: 0.5, zIndex: (theme) => theme.zIndex.drawer + 2, ...sx }}>
      <Toolbar sx={{ justifyContent: "space-between", alignItems: "center" }}>
        <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
          <Typography variant="h1" component="h1" sx={{ fontWeight: "700" }}>
            {`${brand}${pageTitle ? ` | ${pageTitle}` : ""}`}
          </Typography>
        </Link>
        {rightContent && <Box>{rightContent}</Box>}
      </Toolbar>
    </AppBar>
  );
}
