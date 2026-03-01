import { Container, type SxProps, type Theme } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Link } from "react-router";

interface AppBarContainerProps {
  brand?: string;
  pageTitle?: string;
  children?: React.ReactNode;
  position?: "absolute" | "fixed" | "relative" | "static" | "sticky";
  sx?: SxProps<Theme>;
}

export function AppBarContainerCopy({
  brand = "EXPENSEIT",
  pageTitle,
  children,
  position = "relative",
  sx,
}: AppBarContainerProps) {
  return (
    <AppBar
      position={position}
      sx={{ px: 3, py: 0.5, zIndex: (theme) => theme.zIndex.drawer + 2, ...sx }}
    >
      <Toolbar sx={{ justifyContent: "space-between", alignItems: "center" }}>
        <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
          <Typography variant="h1" component="h1" sx={{ fontWeight: "700" }}>
            {`${brand}${pageTitle ? ` | ${pageTitle}` : ""}`}
          </Typography>
        </Link>
        {children && <Container>{children}</Container>}
      </Toolbar>
    </AppBar>
  );
}
