import React from 'react';
import Popular from './Popular';
import Home from './Home';
import Battle from './Battle';
import Nav from './Nav';
import NotFound from './NotFound';

import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch
} from 'react-router-dom'


import './App.css';

class App extends React.Component {
    render() {
        return (
            <Router>
                <div className="container">
                    <Nav/>
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route exact path="/battle" component={Battle}/>
                        <Route path="/popular" component={Popular}/>
                        <Route component={NotFound} />
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;