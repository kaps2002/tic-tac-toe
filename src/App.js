import React,{useState} from 'react';
import './App.css';
import Board from './components/board';
import History from './components/history';
import StatusMessage from './components/statusmessage';
import './styles/root.scss';
import { calculatewinner } from './helpers'
const new_game=[{
  board:Array(9).fill(null), isxnext:true
},];
const App =()=> {
  const [history,sethistory] =useState([{board:Array(9).fill(null),isxnext: true}]);
  const [currentmove,setcurrentmove]=useState(0);
  const current =history[currentmove];
  const {winner,winningsquares} = calculatewinner(current.board);

  const handlesquareclick = position => {
    if (current.board[position] || winner) {
      return;
    }

    sethistory(prev => {
      const last = prev[prev.length - 1];

      const newBoard = last.board.map((square, pos) => {
        if (pos === position) {
          return last.isxnext ? 'X' : 'O';
        }

        return square;
      });

      return prev.concat({ board: newBoard, isxnext: !last.isxnext });
    });

    setcurrentmove(prev => prev + 1);
  };
  const moveTo = move => {
    setcurrentmove(move);
  };
  const onnewgame=()=>{
    sethistory(new_game);
    setcurrentmove(0);
  }
  return (
    <>
      <div className='app'>
          <h1>TIC-TAC-TOE</h1>
          <StatusMessage winner={winner} current={current}/>
          <Board board={current.board} handlesquareclick={handlesquareclick} winningsquares={winningsquares}/>
          <button type='button' onClick={onnewgame}>Start New game</button>
          <History history={history} moveTo={moveTo} currentmove={currentmove}/>
      
      </div>

    </>
  );
}
export default App;
