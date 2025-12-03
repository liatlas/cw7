import React, { Component } from 'react';
import './App.css';
import HelloWorld from './HelloWorld.jsx';
import Counter from './Counter.jsx';

class App extends Component {
    render() {
        return (
            <div className="app">
                <HelloWorld name={'Atlas'} />
                <Counter />
            </div>
        );
    }
}

export default App;
