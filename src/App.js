import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {visible: true}
  }
  render() {
    return (
      <div className="App">
        <div onClick={() => this.setState({ visible: !this.state.visible  })} >show/hide</div>
        {this.state.visible &&
          <TimeUpdater>
            {(time) => <Clock dateString={time}/>}
          </TimeUpdater>
        }

      </div>
    );
  }
}

const Clock = ({dateString}) => <div><b>Time:</b> {dateString}  </div>


class TimeUpdater extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      time: new Date().toString(),
      interval:null
    }
  }

  componentDidMount(){
    const interval = setInterval(() => {
      console.log('cane')
      this.setState({time: new Date().toString()}  )
    }, 1000)

    this.setState({
      interval
    })

  }

  componentWillUnmount(){
    clearInterval(this.state.interval)
  }


  render() {

    return (
      <div className="App">
        {this.props.children(this.state.time)}
      </div>
    );
  }
}


// function timeUpdater(timeInterval){
//   return function (WrappedComponent){
//     return class TimeUpdater extends React.Component {
//       constructor(props){
//         super(props)
//         this.state = {
//           time: new Date().toString()
//         }
//       }
//
//       componentDidMount(){
//         setInterval(() => {
//           this.setState({time: new Date().toString()}  )
//         }, timeInterval)
//       }
//
//       render() {
//         return (
//           <div className="App">
//             <WrappedComponent time={this.state.time} />
//           </div>
//         );
//       }
//     }
//   }
// }


export default App;

