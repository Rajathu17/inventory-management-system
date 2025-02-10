

# Inventory Management System (Frontend)

A robust, scalable, and responsive frontend for a **Distributed Inventory Management System** designed for high-traffic e-commerce platforms. This project features an Admin Dashboard, Vendor Panel, Customer UI, and a Billing module with real-time data updates and PDF invoice generation.

## Table of Contents

- [Live Demo](#live-demo)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [Environment Variables](#environment-variables)
- [Contributing](#contributing)
- [License](#license)

## Live Demo

Check out the live deployed version of the Inventory Management System:

[Deployed Link](https://snazzy-swan-ae8e75.netlify.app/login)



## Features

- **Admin Dashboard:**  
  - Real-time inventory tracking
  - Order management and analytics

- **Vendor Panel:**  
  - Product management and stock updates
  - Order fulfillment tools

- **Customer UI:**  
  - Browse and search products
  - Place orders with real-time stock availability

- **Billing Module:**  
  - Generate invoices using a dynamic billing form
  - Form validation with React Hook Form and Yup
  - PDF invoice generation using jsPDF

- **Real-Time Data Sync:**  
  - API integration via Axios or React Query
  - Live updates with WebSocket integration

- **Responsive & Modern UI:**  
  - Tailwind CSS for a modern and responsive design
  - Accessible and intuitive layout for all user roles

## Tech Stack

- **Framework:** React (with TypeScript, if desired)
- **Routing:** React Router
- **State Management:** Redux Toolkit or React Context API
- **Styling:** Tailwind CSS (or your preferred CSS framework)
- **Forms & Validation:** React Hook Form, Yup, @hookform/resolvers
- **HTTP Requests:** Axios or React Query
- **PDF Generation:** jsPDF
- **Build Tool:** Vite (or Create React App)
- **Version Control & CI:** Git, GitHub Actions/Jenkins (optional)

## Project Structure



```
inventory-management-system/
├── public/
│   ├── index.html
│   └── assets/              # Static assets like images, fonts, etc.
├── src/
│   ├── components/
│   │   ├── BillingForm.tsx  # Billing form component with validation
│   │   ├── Invoice.tsx      # Invoice display/download component
│   │   ├── Layout.tsx       # Global layout wrapper (header, footer, sidebar)
│   │   ├── Navbar.tsx       # Top navigation bar component
│   │   └── Sidebar.tsx      # Sidebar with links (Dashboard, Orders, Products, Billing, etc.)
│   ├── pages/
│   │   ├── Dashboard.tsx    # Main Admin Dashboard
│   │   ├── Login.tsx        # Authentication page
│   │   ├── Orders.tsx       # Order management view
│   │   ├── Products.tsx     # Product management view
│   │   ├── Users.tsx        # User management view
│   │   └── Billing.tsx      # Billing page integrating the BillingForm and Invoice components
│   ├── store/               # Redux slices or context providers
│   ├── types/               # TypeScript types/interfaces (if using TypeScript)
│   ├── App.tsx              # Main application component with router setup
│   ├── index.css            # Global CSS (Tailwind directives, custom styles)
│   └── main.tsx             # Entry point (ReactDOM render)
├── .gitignore
├── package.json
└── README.md
```


## Getting Started

Follow these steps to set up the project locally:

### Prerequisites

- **Node.js** (v14+ recommended)
- **npm** or **yarn**

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/inventory-management-system.git
   cd inventory-management-system
   ```

2. **Install dependencies:**

   Using npm:
   ```bash
   npm install
   ```

   Or using yarn:
   ```bash
   yarn install
   ```

3. **Set up Environment Variables:**

   Create a `.env` file in the root directory (if required) with the following variables:
   ```env
   REACT_APP_API_BASE_URL=https://api.yourdomain.com
   REACT_APP_WEBSOCKET_URL=wss://ws.yourdomain.com
   ```

4. **Start the Development Server:**

   Using npm:
   ```bash
   npm run dev
   ```

   Or using yarn:
   ```bash
   yarn dev
   ```

   The application should now be running on `http://localhost:3000`.

## Available Scripts

In the project directory, you can run:

- **`npm run dev`**  
  Runs the app in development mode.

- **`npm run build`**  
  Builds the app for production to the `dist` folder.

- **`npm run preview`**  
  Serves the production build locally (Vite specific).

- **`npm run lint`**  
  Lints the project files (if ESLint is configured).

## Environment Variables

Ensure you configure the following environment variables as needed:
- **`REACT_APP_API_BASE_URL`**: Base URL for your backend API.
- **`REACT_APP_WEBSOCKET_URL`**: WebSocket server URL for live updates.

## Contributing

Contributions are welcome! Follow these steps:

1. Fork the repository.
2. Create your feature branch: `git checkout -b feature/my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin feature/my-new-feature`
5. Open a pull request.

Please ensure your code adheres to the project’s style guidelines and includes relevant tests.

## License

Distributed under the MIT License. See `LICENSE` for more information.

---

Happy coding! 🚀
```
