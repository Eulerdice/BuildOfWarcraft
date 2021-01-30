import React from 'react';
import logo from './logo.svg';
import './App.css';


class App extends React.Component {
    componentDidMount() {
        var canvas = document.getElementById('characterScreen');
        if (canvas.getContext) {
          var ctx = canvas.getContext('2d');
        }
    }
    
    render() {
        return (
            <div className="container character_screen">
                <canvas id="characterScreen" width="223" height="307"></canvas>
            </div>
            );
    }
}

export default App;
