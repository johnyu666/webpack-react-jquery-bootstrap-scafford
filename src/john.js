import React from 'react'
import ReactDOM from 'react-dom'
import Sub from './components/Sub'
class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = { name: 'world' };
    }

    render() {
       return (
          <div>
            <h2>{this.state.name}</h2>
            <Sub></Sub>
            <button onClick={()=>this.setState({name:'john'})}>
                React 的按钮
            </button>
          </div>
        )
    }
  }
  ReactDOM.render(<App/>, document.querySelector('#app'));