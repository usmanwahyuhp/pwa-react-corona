import React from 'react';

import { Cards, CountryPicker } from './components';
import styles from './App.module.css';

class App extends React.Component {
    render() {
        return (
            <div className={styles.container}>
                <Cards />
                <CountryPicker />
            </div>
        )
    }
}

export default App;