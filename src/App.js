import React,{useState} from 'react';
import './App.css';
import Board from './components/board';
import History from './components/history';

import './styles/root.scss';
import {calculatewinner} from './helpers'
const App =()=> {
  const [history,sethistory] =useState([{board:Array(9).fill(null),isxnext: true}]);
  const [currentmove,setcurrentmove]=useState(0);
  const current =history[currentmove];
  const [board,setBoard]=useState(Array(9).fill(null));
    
  const [isxnext,setisxnext]=useState(false);
    const winner = calculatewinner(board);
    console.log(winner);
    const message=winner ? `Winner is ${winner}`:`Next Player is ${current.isxnext ? 'X':'O'}`;
    const handlesquareclick=position=>{
        if(current.board[position] || winner){
            return;
        }
        sethistory(prev=>{
          const last=prev[prev.length-1];
            const newboard= last.board.map((square,pos)=>{
                if(pos === position){
                    return last.isxnext ? 'X':'O' ;
                }
                return square;
            });
            return prev.concat({board:newboard, isxnext: !last.isxnext});

        });
        setcurrentmove(prev=> prev+1);
    };
    const moveTo=(move)=>{
      setcurrentmove(move);
    }
  return (
    <>
      <div className='app'>
          <h1>TIC-TAC-TOE</h1>
          <h2>{message}</h2>
          <Board board={current.board} handlesquareclick={handlesquareclick}/>
          <History history={history} moveTo={moveTo} currentmove={currentmove}/>
      </div>
    </>
  );
}
export default App;
