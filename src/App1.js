import React, { Component } from 'react';
import './App.css';

// class App extends Component {
//   constructor(){
//     super()
//     this.state = {
//       time: new Date().toString()
//     }
//   }
//
//   componentDidMount(){
//     setInterval(() => {
//       this.setState({time: new Date().toString()}  )
//     }, 1000)
//   }
//
//   render() {
//     return (
//       <div className="App">
//         <Clock time={this.state.time} />
//       </div>
//     );
//   }
// }
//
// const Clock = ({time}) => <div><b>Time:</b> {time}  </div>


class App extends Component {
  render() {
    return (
      <div className="App">
        <ClockWorking />
        <ClockH1Working />
        <ClockH2Working />
        <h1>time</h1>
        <ClockWorking3 />
        <ClockWorking2 />

      </div>
    );
  }
}



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
          console.log('cane')
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


const Clock = ({time}) => <div><b>Time:</b> {time}  </div>
const ClockH1 = ({time}) => <div><h1>Time:</h1> {time}  </div>
const ClockH2 = ({time}) => <div><h2>Time:</h2> {time}  </div>

const tu = timeUpdater(2000)

const ClockWorking = tu(Clock)
const ClockH1Working = tu(ClockH1)
const ClockH2Working = tu(ClockH2)

const ClockWorking3 = timeUpdater(3000)(Clock)
const ClockWorking2 = timeUpdater(2000)(Clock)

export default App;

