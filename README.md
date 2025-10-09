# IPO Tracker - React Application

A modern, responsive React application for tracking Initial Public Offerings (IPOs) with a clean, professional design using the Sora font family.

## Features

### Pages
1. **IPO List Page** - Displays a table of available IPOs with company information, issue dates, and investment details
2. **IPO Details Page** - Comprehensive view of individual IPO details with both web and mobile responsive versions

### Key Components
- **Header** - Navigation with breadcrumbs and back button functionality
- **Company Logo** - Circular company logos with brand colors
- **Action Buttons** - Download and Apply now buttons
- **Timeline** - Interactive timeline for IPO process stages
- **Responsive Design** - Optimized for both desktop and mobile devices

### Design Features
- Clean, minimalist design with professional styling
- Sora font family throughout the application
- Responsive grid layouts that adapt to different screen sizes
- Interactive elements with hover states and transitions
- Card-based layout for better content organization

## Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── Header/          # Page header with navigation
│   ├── CompanyLogo/     # Company logo component
│   ├── ActionButtons/   # Download and Apply buttons
│   └── Timeline/        # Timeline component for IPO stages
├── pages/               # Main application pages
│   ├── IPOListPage/     # IPO listing page
│   └── IPODetailsPage/  # IPO details page
├── data/                # Mock data and constants
│   └── ipoData.js       # IPO and company data
├── App.js               # Main application component
├── App.css              # Application styles
├── index.js             # Application entry point
└── index.css            # Global styles
```

## Getting Started

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm start
```

3. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Available Scripts

- `npm start` - Runs the app in development mode
- `npm build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm eject` - Ejects from Create React App (one-way operation)

## Features Implemented

### IPO List Page
- ✅ Company logos with brand colors
- ✅ Issue dates and investment information
- ✅ Number of lots/shares display
- ✅ Responsive table layout
- ✅ Click-to-navigate functionality

### IPO Details Page
- ✅ Home navigation placeholder (breadcrumbs)
- ✅ Download button functionality
- ✅ Company information header
- ✅ IPO details grid layout
- ✅ Interactive timeline
- ✅ About company section
- ✅ Mobile responsive design
- ✅ Apply now button

### Design Requirements
- ✅ Sora font family implementation
- ✅ Professional, clean design
- ✅ Responsive mobile version
- ✅ Card-based layout
- ✅ Interactive elements

## Technology Stack

- **React 18** - Frontend framework
- **React Router DOM** - Client-side routing
- **CSS3** - Styling with modern features
- **Google Fonts** - Sora font family
- **Responsive Design** - Mobile-first approach

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Development

The application follows modern React best practices:
- Functional components with hooks
- Modular component structure
- CSS modules for styling
- Responsive design principles
- Clean, maintainable code

## License

This project is created for demonstration purposes.
