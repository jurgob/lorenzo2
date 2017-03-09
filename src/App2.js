import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ClockWorking />
      </div>
    );
  }
}

const Clock = ({dateString}) => <div><b>Time:</b> {dateString}  </div>
const ClockAdapter = ({time}) => <Clock dateString={time} />
const ClockWorking = timeUpdater(1000)(ClockAdapter)




function timeUpdater(timeInterval){
  return function (WrappedComponent){
    return class TimeUpdater extends React.Component {
      constructor(props){
        super(props)
        this.state = {
          time: new Date().toString()
        }
      }

      componentDidMount(){
        setInterval(() => {
          this.setState({time: new Date().toString()}  )
        }, timeInterval)
      }

      render() {
        return (
          <div className="App">
            <WrappedComponent time={this.state.time} />
          </div>
        );
      }
    }
  }
}


export default App;

