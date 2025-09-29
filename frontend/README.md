# Frontend Project Documentation

## Overview
This project is a frontend application that complements a FastAPI backend. It is built using HTML, CSS, and JavaScript, providing an attractive and user-friendly interface for interacting with the backend services.

## Project Structure
```
frontend
├── css
│   └── style.css
├── js
│   └── app.js
├── index.html
└── README.md
```

## Files Description
- **index.html**: The main entry point for the application. It includes the structure of the webpage and links to the CSS and JavaScript files.
- **css/style.css**: Contains styles for the application, defining layout, colors, fonts, and overall design.
- **js/app.js**: Handles dynamic behavior, including fetching data from the FastAPI backend and updating the DOM.

## Setup Instructions
1. Ensure you have a web server to serve the files (e.g., using Python's built-in HTTP server).
2. Open a terminal and navigate to the `frontend` directory.
3. Run the following command to start the server:
   ```
   python3 -m http.server
   ```
4. Open your web browser and go to `http://localhost:8000` to view the application.

## Features
- Fetch and display products from the FastAPI backend.
- Filter products by price range.
- Responsive design for various screen sizes.

## Running the Application
To run the application, follow the setup instructions above. Ensure that the FastAPI backend is running and accessible to fetch data correctly.

## License
This project is licensed under the MIT License. See the LICENSE file for more details.