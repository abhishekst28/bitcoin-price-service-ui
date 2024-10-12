import React, { useState } from 'react';
import axios from 'axios';

function App() {
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [currency, setCurrency] = useState('USD');
    const [prices, setPrices] = useState(null);

    const fetchPrices = async () => {
        try {
            const response = await axios.post('https://bitcoin-price-service.onrender.com/api/bitcoin/historical-prices', {
                startDate, endDate, currency
            });
            setPrices(response.data);
        } catch (error) {
            console.error('Error fetching prices:', error);
        }
    };

    return (
        <div style={styles.container}>
            <div style={styles.card}>
                <h1 style={styles.heading}>Bitcoin Historical Price</h1>

                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        fetchPrices();
                    }}
                    style={styles.form}
                >
                    <div style={styles.inputGroup}>
                        <label style={styles.label}>Start Date:</label>
                        <input
                            type="date"
                            value={startDate}
                            onChange={(e) => setStartDate(e.target.value)}
                            required
                            style={styles.input}
                        />
                    </div>

                    <div style={styles.inputGroup}>
                        <label style={styles.label}>End Date:</label>
                        <input
                            type="date"
                            value={endDate}
                            onChange={(e) => setEndDate(e.target.value)}
                            required
                            style={styles.input}
                        />
                    </div>

                    <div style={styles.inputGroup}>
                        <label style={styles.label}>Currency:</label>
                        <input
                            type="text"
                            value={currency}
                            onChange={(e) => setCurrency(e.target.value)}
                            placeholder="Currency"
                            style={styles.input}
                        />
                    </div>

                    <button type="submit" style={styles.button}>
                        Get Prices
                    </button>
                </form>

                {prices && (
                    <div style={styles.results}>
                        <h2 style={styles.resultHeading}>Results</h2>
                        <p style={styles.resultItem}>
                            <strong>Min Price:</strong> {prices.minPrice}
                        </p>
                        <p style={styles.resultItem}>
                            <strong>Max Price:</strong> {prices.maxPrice}
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}

const styles = {
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#f0f2f5',
    },
    card: {
        backgroundColor: 'white',
        padding: '30px',
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        width: '400px',
        textAlign: 'center',
    },
    heading: {
        marginBottom: '20px',
        color: '#333',
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
    },
    inputGroup: {
        marginBottom: '15px',
    },
    label: {
        marginBottom: '5px',
        color: '#555',
        textAlign: 'left',
        display: 'block',
    },
    input: {
        width: '100%',
        padding: '10px',
        borderRadius: '5px',
        border: '1px solid #ccc',
        fontSize: '16px',
    },
    button: {
        backgroundColor: '#007bff',
        color: 'white',
        padding: '10px',
        borderRadius: '5px',
        border: 'none',
        cursor: 'pointer',
        fontSize: '16px',
        marginTop: '10px',
    },
    buttonHover: {
        backgroundColor: '#0056b3',
    },
    results: {
        marginTop: '30px',
        textAlign: 'left',
    },
    resultHeading: {
        marginBottom: '10px',
        fontSize: '18px',
        color: '#333',
    },
    resultItem: {
        fontSize: '16px',
        color: '#555',
    },
};

export default App;
