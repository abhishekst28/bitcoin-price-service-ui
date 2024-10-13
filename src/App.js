import React, { useState, useEffect } from 'react';
import Toggle from 'react-toggle';
import axios from 'axios';
import "react-toggle/style.css";
import './App.css';

function App() {
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [currency, setCurrency] = useState('USD');
    const [prices, setPrices] = useState(null);
    const [offlineMode, setOfflineMode] = useState(false); // New state for offline mode
    const baseUrl = 'https://bitcoin-price-service.onrender.com';
    // Fetch the current offline mode from the server when the component mounts
    useEffect(() => {
        axios.get(`${baseUrl}/api/v1/bitcoin/offline-mode`)
            .then(response => {
                setOfflineMode(response.data);
            })
            .catch(error => {
                console.error("Error fetching offline mode:", error);
            });
    }, []);

    // Handle toggle switch to update offline mode on the server
    const handleToggleChange = () => {
        axios.post(`${baseUrl}/api/bitcoin/offline-mode?offlineMode=${!offlineMode}`)
            .then(response => {
                console.log(response.data);
                setOfflineMode(!offlineMode); // Toggle the offlineMode state
            })
            .catch(error => {
                console.error("Error updating offline mode:", error);
            });
    };

    // Fetch Bitcoin prices based on the current mode (offline or online)
    const fetchPrices = async () => {
        try {
            const response = await axios.post(`${baseUrl}/api/bitcoin/historical-prices`, {
                startDate, endDate, currency
            });
            setPrices(response.data);
        } catch (error) {
            console.error('Error fetching prices:', error);
        }
    };

    return (
        <div className="container">
            <div className="card">
                <h1 className="heading">Bitcoin Historical Price</h1>

                <div className="toggleContainer">
                    <label>
                        <Toggle
                            defaultChecked={offlineMode}
                            onChange={handleToggleChange}
                        />
                        <span style={{ marginLeft: '8px' }}>
                            {offlineMode ? 'Offline Mode' : 'Online Mode'}
                        </span>
                    </label>
                </div>

                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        fetchPrices();
                    }}
                    className="form"
                >
                    <div className="inputGroup">
                        <label className="label">Start Date:</label>
                        <input
                            type="date"
                            value={startDate}
                            onChange={(e) => setStartDate(e.target.value)}
                            required
                            className="input"
                        />
                    </div>

                    <div className="inputGroup">
                        <label className="label">End Date:</label>
                        <input
                            type="date"
                            value={endDate}
                            onChange={(e) => setEndDate(e.target.value)}
                            required
                            className="input"
                        />
                    </div>

                    <div className="inputGroup">
                        <label className="label">Currency:</label>
                        <input
                            type="text"
                            value={currency}
                            onChange={(e) => setCurrency(e.target.value)}
                            placeholder="Currency"
                            className="input"
                        />
                    </div>

                    <button type="submit" className="button">
                        Get Prices
                    </button>
                </form>

                {prices && (
                    <div className="results">
                        <h2 className="resultHeading">Results</h2>
                        <p className="resultItem">
                            <strong>Min Price:</strong> {prices.minPrice}
                        </p>
                        <p className="resultItem">
                            <strong>Max Price:</strong> {prices.maxPrice}
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default App;