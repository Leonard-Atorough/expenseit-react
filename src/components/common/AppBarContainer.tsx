import {  type SxProps, type Theme, AppBar as MuiAppBar } from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import type { ReactNode } from "react";

interface AppBarContainerProps {
  position?: "absolute" | "fixed" | "relative" | "static" | "sticky";
  children: ReactNode;
  sx?: SxProps<Theme>;
}

/**
 * Flexible header container for any header content (MainHeader, AppHeader, etc.)
 * Provides consistent responsive spacing and layout structure without enforcing content structure.
 *
 * Usage:
 * <AppBarContainer>
 *   <YourHeaderContent />
 * </AppBarContainer>
 */
export function AppBarContainer({ position = "sticky", children, sx }: AppBarContainerProps) {
  return (
    <MuiAppBar
      position={position}
      elevation={1}
      sx={{
        zIndex: (theme) => theme.zIndex.drawer + 1,
        backgroundColor: "background.paper",
        ...sx,
      }}
    >
      <Toolbar
        sx={{
          minHeight: { xs: "56px", sm: "64px" },
          px: { xs: 2, sm: 3, md: 4 },
          py: { xs: 0.5, sm: 1, md: 2 },
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 2,
        }}
      >
        {children}
      </Toolbar>
    </MuiAppBar>
  );
}
