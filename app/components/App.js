import React from 'react';
import Popular from './Popular';
import './App.css';

class App extends React.Component {
    render() {
        return (
            <div className="container">
                <ul className="nav-list">
                    <li>Hi</li>
                </ul>
                <Popular/>
            </div>
        );
    }
}

export default App;