# ExpenseIt - UI Design System

## Design Philosophy

**Trust, Clarity, Efficiency** — A professional finance app with a clean, minimal aesthetic that prioritizes clarity and user confidence.

---

## Color Palette

### Primary Colors

- **Primary Green** `#2D7D4A` — Trust, growth, financial stability
- **Accent Blue** `#1976D2` — Actions, links, positive CTAs
- **Success Green** `#4CAF50` — Income, gains, positive values
- **Warning Orange** `#FF9800` — Alerts, caution, pending items

### Neutrals

- **Dark Gray** `#1A1A1A` — Text, headings
- **Medium Gray** `#616161` — Secondary text, borders
- **Light Gray** `#F5F5F5` — Backgrounds, cards
- **White** `#FFFFFF` — Surfaces, cards

### Semantic Colors

- **Income** `#4CAF50` (Green)
- **Expense** `#F44336` (Red)
- **Neutral** `#9E9E9E` (Gray)

---

## Typography

- **Headings** — Poppins/Inter, Bold (600-700)
  - H1: 32px, H2: 24px, H3: 20px, H4: 16px
- **Body** — Poppins/Inter, Regular (400)
  - Large: 16px, Normal: 14px, Small: 12px
- **Numbers/Currency** — Monospace, Bold (500-600)
  - For emphasis on monetary values

---

## Component Guidelines

### Buttons

- **Primary** — Solid green background, white text
- **Secondary** — Outlined gray, dark text
- **Danger** — Red background, white text
- Corner radius: 8px, Padding: 10px 16px

### Cards & Containers

- Corner radius: 12px
- Shadow: `0 2px 8px rgba(0,0,0,0.1)`
- Padding: 16px (mobile), 24px (desktop)

### Forms

- **Input Fields** — Light gray background, dark gray borders
- **Labels** — Small caps, 12px, medium gray
- Border radius: 6px
- Focus state: Primary green border + blue outline

### Layout Spacing

- **XS** — 4px
- **S** — 8px
- **M** — 16px
- **L** — 24px
- **XL** — 32px

---

## Page Layouts

### Landing Page

- **Hero Section** — Full-width hero with dark overlay, large headline, CTA button
- **Features Section** — 3-column grid showcasing key features
- **Footer** — Simple, minimal footer with links

### Authentication (Login/Register)

- **Centered Card** — Max-width 400px, elevated white card
- **Toggle** — Switch between login/register modes
- **Error Handling** — Inline error alerts above form

### Dashboard

- **Header** — Welcome message + greeting
- **Quick Stats** — 3-column grid with key metrics (Balance, Monthly, Transactions)
- **Recent Transactions** — Table or list view with dates, amounts, categories
- **Call-to-Actions** — Floating action buttons for adding transactions

### Transactions

- **Header** — Title + "Add Transaction" button
- **Filter Bar** — Date range, category filters (collapsible)
- **Transaction List** — Clean rows with date, description, amount, category badge
- **Empty State** — Centered message with illustration

### Reports

- **Chart Area** — Spending distribution pie chart / monthly trend line chart
- **Summary Cards** — Spending by category, top expenses
- **Export Option** — Button to export/download report

### Settings

- **Section Tabs** — Account Info, Security, Preferences
- **Form Groups** — Organized in white cards with clear labels
- **Status Indicators** — Green check for secure password, warning icons for updates needed

---

## Interactive Elements

### Loading States

- Skeleton loaders for tables/lists
- Spinner for async actions
- Disabled buttons during submission

### Feedback

- Toast notifications for success/error (top-right corner)
- Inline validation on forms
- Confirmation dialogs for destructive actions

### Navigation

- **Top AppBar** — Logo/brand, breadcrumbs, user menu
- **Sidebar** (Optional) — Navigation links with icons
- **Mobile** — Hamburger menu, sticky header

---

## Accessibility

- **Contrast Ratios** — All text meets WCAG AA (4.5:1+)
- **Font Size** — Minimum 14px body text
- **Touch Targets** — 48px minimum for interactive elements
- **Focus States** — Visible keyboard navigation (blue outline)

---

## Responsive Breakpoints

| Breakpoint | Width     | Layout        |
| ---------- | --------- | ------------- |
| Mobile     | < 600px   | Single column |
| Tablet     | 600-900px | 2-column grid |
| Desktop    | > 900px   | Full layout   |

---

## Financial Data Visualization

### Amount Display

- **Large numbers** — Monospace, bold, primary green for income / red for expenses
- **Percent changes** — Show trend arrows (↑/↓) with color coding
- **Currency format** — Always show $ symbol, 2 decimal places

### Icons

- Simple, consistent icon set (Material Icons)
- Category icons for transactions (food, transport, utilities, etc.)
- Status icons (pending, completed, failed)

---

## Tone & Messaging

- **Professional but friendly** — "Welcome back! Here's your financial snapshot"
- **Clear & concise** — Avoid jargon, use simple language
- **Confident** — Reassure users their data is secure
- **Action-oriented** — CTAs are clear and motivating

---

## Key Design Decisions

1. **Green as primary** — Conveys trust, growth, and financial well-being
2. **Minimal animations** — Subtle micro-interactions (0.2-0.3s transitions)
3. **Data-first layouts** — Numbers are prominent and easy to scan
4. **Mobile-first approach** — Design works seamlessly on all devices
5. **Consistent spacing** — 8px grid for alignment and rhythm
