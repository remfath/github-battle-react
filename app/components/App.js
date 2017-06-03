import React from 'react';
import Popular from './Popular';
import Home from './Home';
import Battle from './Battle';

import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'

import './App.css';

class App extends React.Component {
    render() {
        return (
            <div>
                <Router>
                    <div>
                        <div className="nav">
                            <Link to="/">Home</Link>
                            <Link to="/popular">Popular</Link>
                            <Link to="/battle">Battle</Link>
                        </div>

                        <div className="container">
                            <Route exact path="/" component={Home}/>
                            <Route path="/popular" component={Popular}/>
                            <Route path="/battle" componet={Battle}/>
                        </div>
                    </div>
                </Router>
            </div>
        );
    }
}

export default App;