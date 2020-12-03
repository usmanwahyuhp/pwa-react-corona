import React from 'react';

import { Cards, CountryPicker } from './components';

class App extends React.Component {
    render() {
        return (
            <div>
                <Cards />
                <CountryPicker />
            </div>
        )
    }
}

export default App;