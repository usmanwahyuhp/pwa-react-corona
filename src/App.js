import React from 'react';

import { Cards, CountryPicker } from './components';
import { fetchData } from './api';
import styles from './App.module.css';

class App extends React.Component {

    async componentDidMount(){
        const data = await fetchData();

        console.log(data);
    }
    
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