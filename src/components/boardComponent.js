import React from 'react';
import ReactDOM from 'react-dom';
import '../index.css'
import Square from './squareComponent'
import getWinner from '../utils/winner'
class Board extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            squares: Array(9).fill(null),
            role:'X'
        };
      }


      handleClick(i) {
        const squares = this.state.squares.slice();
        if(getWinner(squares) || squares[i]){
            return ;
        }
        squares[i] =  this.state.role;
        this.toggleRole();
        this.setState({squares: squares});
      }

    renderSquare(i){
        return (
            <Square value={this.state.squares[i]} onClick={() => this.handleClick(i)}></Square>
        )
    }


    toggleRole(){
       this.state.role === 'X' ? this.setState({role:'O'}) : this.setState({role:'X'});
       return this.state.role;
    }

    reset(){
        this.setState({
            squares: Array(9).fill(null),
            role:'X'
        })
    }

    render(){
        let winner =getWinner(this.state.squares);
        const status = winner ? 'Winner Is '+ winner :   'Next player : ' + this.state.role;

    return (
      <div className="container">
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>

        <button className="reset" onClick={()=>this.reset()}>Reset</button>
      </div>
         );
    }


}

export default Board