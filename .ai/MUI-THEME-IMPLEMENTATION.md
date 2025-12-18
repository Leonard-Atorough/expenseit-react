# Material UI Theme Implementation Guide

This theme translates the ExpenseIt design system into Material UI components.

## Theme Structure

### 1. Color Palette

The theme maps design colors directly to MUI palette properties:

```typescript
// Primary Actions
<Button variant="contained">Action</Button>  // Uses primaryGreen (#2D7D4A)
<Button variant="contained" color="secondary">Secondary</Button>  // Uses accentBlue

// Semantic Colors
<Alert severity="success">Income</Alert>  // Green (#4CAF50)
<Alert severity="error">Expense</Alert>   // Red (#F44336)
<Alert severity="warning">Pending</Alert> // Orange (#FF9800)
```

### 2. Typography

All text follows the Poppins/Inter font family with predefined variants:

```typescript
// Headings
<Typography variant="h1">Main Title</Typography>      // 32px, Bold
<Typography variant="h2">Section Title</Typography>   // 24px, Bold
<Typography variant="h3">Subsection</Typography>      // 20px, Bold
<Typography variant="h4">Card Title</Typography>      // 16px, Bold

// Body Text
<Typography variant="body1">Large body text</Typography>   // 16px
<Typography variant="body2">Normal body text</Typography>  // 14px
<Typography variant="caption">Small text</Typography>      // 12px

// Currency/Monospace (use for financial values)
<Typography variant="subtitle1">$1,234.56</Typography>  // 18px, Monospace, Bold
<Typography variant="subtitle2">$99.99</Typography>     // 14px, Monospace
```

### 3. Component Styling

#### Buttons

```typescript
// Primary (Green)
<Button variant="contained">Save</Button>

// Secondary (Outlined)
<Button variant="outlined">Cancel</Button>

// Danger (Red)
<Button variant="contained" color="error">Delete</Button>

// All buttons feature:
// - 8px border radius
// - Smooth hover animations with subtle lift effect
// - Proper spacing (10px 16px)
```

#### Cards & Containers

```typescript
<Card>
  {/* Features:
      - 12px border radius
      - Subtle shadow (0 2px 8px rgba(0,0,0,0.1))
      - Enhanced shadow on hover
      - Smooth transitions
  */}
</Card>

<Paper>
  {/* Same styling as Card for consistency */}
</Paper>
```

#### Form Fields

```typescript
<TextField label="Email" placeholder="your@email.com" variant="outlined" />
// Features:
// - Light gray background (#F5F5F5)
// - 6px border radius
// - Green border on focus with blue tint overlay
// - Uppercase labels (12px, medium gray)
```

#### App Bar

```typescript
<AppBar>
  {/* Features:
      - White background instead of blue
      - Subtle bottom border
      - Light shadow for depth
  */}
</AppBar>
```

### 4. Spacing System

The theme uses an 8px grid system for consistent spacing:

```typescript
// In sx prop or styled components
<Box sx={{ p: 2 }}>  // 16px padding (2 * 8px)
<Box sx={{ m: 3 }}>  // 24px margin (3 * 8px)
<Box sx={{ gap: 2 }}> // 16px gap

// Spacing values
// 1 = 8px
// 2 = 16px
// 3 = 24px
// 4 = 32px
// etc.
```

### 5. Color Usage Examples

```typescript
import { Box, Typography } from "@mui/material";

// Income (Green)
<Box sx={{ color: "success.main" }}>
  <Typography>+$500.00</Typography>
</Box>

// Expense (Red)
<Box sx={{ color: "error.main" }}>
  <Typography>-$120.00</Typography>
</Box>

// Neutral/Secondary
<Typography color="textSecondary">
  Optional secondary information
</Typography>

// Custom semantic colors
<Chip
  label="Food"
  sx={{
    backgroundColor: "rgba(76, 175, 80, 0.15)",
    color: "success.main"
  }}
/>
```

## Design-to-Implementation Mapping

| Design Spec           | MUI Implementation                               | Usage                         |
| --------------------- | ------------------------------------------------ | ----------------------------- |
| Primary Green #2D7D4A | `color="primary"`                                | Main actions, focus states    |
| Accent Blue #1976D2   | `color="secondary"`                              | Links, secondary actions      |
| Success Green #4CAF50 | `severity="success"` or `color="success"`        | Income, positive values       |
| Error Red #F44336     | `severity="error"` or `color="error"`            | Expenses, destructive actions |
| Warning Orange        | `severity="warning"` or `color="warning"`        | Alerts, pending states        |
| Dark Gray #1A1A1A     | `color="textPrimary"`                            | Primary text                  |
| Medium Gray #616161   | `color="textSecondary"`                          | Secondary text, hints         |
| Light Gray #F5F5F5    | `sx={{ backgroundColor: "background.default" }}` | Backgrounds                   |
| Monospace Bold        | `variant="subtitle1"` or `variant="subtitle2"`   | Currency values               |

## Responsive Breakpoints

The theme respects MUI's default breakpoints:

```typescript
// Use sx prop for responsive styling
<Box sx={{
  p: 2,                          // 16px on all
  "@media (min-width: 600px)": { p: 3 }, // 24px on tablet+
}}>
  Content
</Box>

// Or use responsive values directly
<Grid container spacing={{ xs: 1, sm: 2, md: 3 }} />
```

## Financial Data Patterns

### Amount Display

```typescript
<Typography variant="subtitle1" color="success.main">
  +$1,234.56
</Typography>

<Typography variant="subtitle1" color="error.main">
  -$567.89
</Typography>
```

### Category Tags

```typescript
<Chip
  label="Groceries"
  size="small"
  sx={{
    backgroundColor: "rgba(76, 175, 80, 0.15)",
    color: "success.main",
  }}
/>
```

### Summary Cards

```typescript
<Card sx={{ p: 3 }}>
  <Typography color="textSecondary" variant="caption">
    TOTAL BALANCE
  </Typography>
  <Typography variant="h2" color="primary" sx={{ mt: 1 }}>
    $5,234.50
  </Typography>
</Card>
```

## Dark Mode Extension (Future)

The theme is structured to easily support dark mode:

```typescript
// To add dark mode in the future:
const theme = createTheme({
  palette: {
    mode: "dark", // or "light"
    // Colors will auto-adapt
  },
});
```

## Customization Examples

### Override a specific component

```typescript
// In your component
<Button
  variant="contained"
  sx={{
    backgroundColor: "error.main",
    borderRadius: "12px", // Override default 8px
  }}
>
  Delete Account
</Button>
```

### Custom color variables

```typescript
const theme = useTheme();
<Box sx={{ color: theme.palette.success.light }}>Custom styling</Box>;
```

## Best Practices

1. **Always use theme colors** — Don't hardcode hex values
2. **Use semantic colors** — `success` for income, `error` for expenses
3. **Consistent spacing** — Stick to 8px multiples (1, 2, 3, 4, etc.)
4. **Typography variants** — Use predefined variants instead of custom sizes
5. **Shadows for depth** — Use MUI's built-in elevation system for cards
6. **Focus states** — All form elements have proper focus indicators
7. **Accessibility** — All color combinations meet WCAG AA contrast standards
