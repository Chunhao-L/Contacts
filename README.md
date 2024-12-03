# Contacts Table Application

## Overview
This project is a React application that displays user contact information in a table with features such as sorting, searching, and pagination. It includes a responsive navbar and styled components.

## Features
- **Navbar:** Displays a logo and the app title.
  - The Navbar component includes a logo and a static title.
  - The logo image is loaded dynamically using the import.meta.url.
- **Dynamic Table:** 
  - **Data Fetching**: Fetches user data from https://jsonplaceholder.typicode.com/users.
  - **Sorting**: Clickable headers to sort columns in ascending or descending order.
  - **Search**: Filters data across all fields based on user input.
  - **Pagination**: Allows navigation through pages and changing rows per page.
- **Styling:**
  - Styled using CSS Modules for modular and scoped styling.
  - Responsive design ensures usability on different screen sizes.

## Technologies Used
- **React**: For building the UI.
- **React-Table**: For table functionality.
- **CSS Modules**: For scoped and reusable styles.
- **Fetch API**: For fetching user data.

## Installation and Setup

### Prerequisites
Ensure you have the following installed on your system:
- **Node.js** (v14 or later)
- **npm** (comes with Node.js)

### Steps to Run the Project
1. **Clone the repository:**
   ```bash
   git clone https://github.com/Chunhao-L/Contacts.git

2. **Navigate to the project directory:**
   ```bash
    cd Contacts

3. **Install dependencies:**
   ```bash
   npm install

4. **Start the development server:**
   ```bash
   npm run dev

5. **Open the application in your browser:**
    Open your browser and visit http://localhost:5173 to view the application

Features in Detail
Navbar
The Navbar component includes a logo and a static title.
The logo image is loaded dynamically using the import.meta.url.
Table
Data Fetching: Fetches user data from https://jsonplaceholder.typicode.com/users.
Sorting: Clickable headers to sort columns in ascending or descending order.
Search: Filters data across all fields based on user input.
Pagination: Allows navigation through pages and changing rows per page.
Styling
Styled using CSS Modules for modular and scoped styling.
Responsive design ensures usability on different screen sizes.
Technologies Used
React: For building the UI.
React-Table: For table functionality.
CSS Modules: For scoped and reusable styles.
Fetch API: For fetching user data.
