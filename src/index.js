import React from 'react';
import ReactDOM from 'react-dom';
import {browserRouter} from 'react-router-dom';

import App from './App.js';

class Main extends React.Component {
    render() {
        return (
            <browserRouter>
            <App />
            </browserRouter>
        );
    }
}

const rootElement = document.getElementById('root');
ReactDOM.render(<Main />, rootElement);