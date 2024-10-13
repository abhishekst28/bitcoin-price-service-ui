Bitcoin Price UI Service
    This is the front-end application for the Bitcoin Price Service, which allows users to query historical Bitcoin prices within a given date range and currency. The UI also supports toggling between online and offline modes, providing a seamless experience even when the backend or external APIs are unavailable.

Features
    Date Range Selection: Users can input a start date and end date to fetch Bitcoin prices for that period.
    Currency Input: Option to choose the currency in which the Bitcoin prices should be displayed (default is USD).
    Offline Mode Toggle: A toggle switch that allows users to switch between offline and online modes.
    Results Display: Displays the minimum and maximum prices for the selected date range.
    Error Handling: Displays an error message if something goes wrong while fetching the data.
    Technologies Used
    React (Functional Components with Hooks)
    Axios (for HTTP requests)
    CSS for basic styling
    External API: CoinDesk API
    How It Works
    This application interacts with the backend Bitcoin Price Service to fetch historical Bitcoin price data. Users can input the start and end dates, specify a currency, and toggle between online/offline modes. In offline mode, the app will rely on cached data, while in online mode, it fetches fresh data from the backend.

UI Overview
    Date Range Inputs: Select a start date and end date.
    Currency Input: Input field to specify the desired currency (default is USD).
    Offline Mode Toggle: A switch to enable or disable offline mode.
    Price Results: The app displays the minimum and maximum Bitcoin prices for the selected date range.
    Error Alerts: Alerts to indicate errors during data fetching.
    How to Use
    Set the Date Range: Enter the start date and end date for the period you want to query the Bitcoin prices for.
    Set the Currency: Enter the currency code (e.g., USD, EUR, GBP). The default currency is USD.
    Enable Offline Mode (optional): Use the toggle switch to enable offline mode. When offline mode is enabled, the app will serve cached data.
    Fetch Prices: Click the Get Prices button to retrieve the historical Bitcoin price data.
    View Results: The minimum and maximum Bitcoin prices for the selected period will be displayed below the form.


Installation and Setup
    Prerequisites
    Node.js (version 12+)
    NPM (comes with Node.js)
    A running instance of the backend Bitcoin Price Service


Steps
    Clone the repository: https://github.com/abhishekst28/bitcoin-price-service-ui.git

bash
    Copy code
    git clone 
    cd bitcoin-price-ui
    Install the dependencies:

bash
    Copy code
    npm install
    Configure the backend API URL (if needed):

Open src/App.js and modify the base URL for the backend API.
    javascript
    Copy code
    const API_BASE_URL = 'https://bitcoin-price-service.onrender.com';
    Run the application:

bash
    Copy code
    npm start
    The app will be available at http://localhost:3000.

Deployment
    You can deploy this UI application on any static hosting platform such as Netlify, Vercel, or Render.

    Deploy on Render
    Create a new Static Site in your Render dashboard.
    Connect the GitHub repository containing your code.
    Set the build command to:
    bash
    Copy code
    npm install && npm run build
    Set the publish directory to build.
    Deploy the service. Render will provide you with a URL to access your live application.


Components
    App.js
        This is the main React component that handles the UI for the historical Bitcoin price query.

    Key functionality includes:

        Managing form input (start date, end date, currency).
        Handling the toggle switch for offline mode.
        Making HTTP requests to the backend using Axios.
        Displaying the results in a simple and user-friendly format.
        BitcoinPrice.js
        This component manages the offline mode toggle switch and sends requests to the backend to update the mode.

    styles/bitcoinPrice.css
        This file contains all the styles for the application, ensuring a clean and modern look.

    API Integration
        The app integrates with the backend service via Axios. The backend service is expected to expose the following endpoints:

    POST /api/bitcoin/historical-prices: Retrieves Bitcoin prices for a given date range and currency.
    POST /api/bitcoin/offline-mode?offlineMode=true|false: Toggles the backend between online and offline modes.
    GET /api/bitcoin/offline-mode: Checks whether offline mode is currently enabled.
    Error Handling
    The app handles errors by displaying relevant messages to the user. If the backend or the external API is unavailable, the app gracefully shows an error without crashing.

CSS Styling
    The styling is modular and stored in the styles/ directory.
    The form and input elements are styled to provide a clean and modern user experience.
    The toggle switch is styled using the react-toggle library.
    Contributing
    Fork the repository.
    Create a new branch (git checkout -b feature-branch).
    Make your changes and commit them (git commit -m "Add some feature").
    Push the branch (git push origin feature-branch).
    Open a Pull Request.

License
    This project is licensed under the MIT License.