import React from 'react';
import ReactDOM from 'react-dom';
import '../index.css'

class Square extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          value: null,
        };
      }
    render(){
       let value = this.props.value;

        return(
            <button onClick={()=>this.props.onClick()} className="square">{this.props.value}</button>
            )
    }


}

export default Square