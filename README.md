# Keeper App

A React-based note-keeping application inspired by Google Keep. This project displays and manages notes with a clean, organized interface.

## Features

- Display notes with titles and content
- Responsive layout
- React component-based architecture
- Clean and minimal UI design

## Tech Stack

- **React** (v17.0.2) - UI library
- **React DOM** - React rendering
- **React Scripts** - Build tooling
- **CSS** - Styling

## Project Structure

```
keeper/
├── public/
│   ├── index.html          # Main HTML file
│   └── styles.css          # Global styles
├── src/
│   ├── index.js            # App entry point
│   ├── index.css           # Global CSS
│   └── Components/
│       ├── notes.js        # Notes data
│       ├── App/
│       │   ├── App.jsx     # Main app component
│       │   └── App.css     # App styles
│       ├── Header/
│       │   ├── Header.jsx  # Header component
│       │   └── Header.css  # Header styles
│       ├── Footer/
│       │   ├── Footer.jsx  # Footer component
│       │   └── Footer.css  # Footer styles
│       └── Notes/
│           ├── Note.jsx    # Individual note component
│           └── Note.css    # Note styles
└── package.json            # Dependencies and scripts
```

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd keeper
```

2. Install dependencies:
```bash
npm install
```

## Usage

### Development Mode

Start the development server:
```bash
npm start
```

The app will open at [http://localhost:3000](http://localhost:3000)

### Build for Production

Create an optimized production build:
```bash
npm run build
```

### Run Tests

Execute the test suite:
```bash
npm test
```

## Available Scripts

- `npm start` - Runs the app in development mode
- `npm build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm eject` - Ejects from Create React App (one-way operation)

## Components

### App
Main application component that renders the header, notes list, and footer.

### Header
Displays the application header/branding.

### Note
Renders individual note items with title and content.

### Footer
Displays the application footer.

## Future Enhancements

- Add new notes functionality
- Delete notes feature
- Edit existing notes
- Persistent storage (localStorage/database)
- Note categories/tags
- Search and filter notes

## License

This project is licensed under the terms specified in the LICENSE file.

