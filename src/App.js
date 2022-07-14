import React,{useState} from 'react';
import './App.css';
import Board from './components/board';
import './styles/root.scss';
import {calculatewinner} from './helpers'
const App =()=> {
  const [board,setBoard]=useState(Array(9).fill(null));
    const [isxnext,setisxnext]=useState(false);
    const winner = calculatewinner(board);
    console.log(winner);
    const message=winner ? `Winner is ${winner}`:`Next Player is ${isxnext ? 'X':'O'}`;
    const handlesquareclick=position=>{
        if(board[position] || winner){
            return;
        }
        setBoard(prev=>{
            return prev.map((square,pos)=>{
                if(pos === position){
                    return isxnext ? 'X':'O' ;
                }
                return square;
            });
        });
        setisxnext((prev)=> !prev);
    };
  return (
    <>
      <div className='app'>
          <h1>TIC-TAC-TOE</h1>
          <h2>{message}</h2>
          <Board board={board} handlesquareclick={handlesquareclick}/>

      </div>
    </>
  );
}
export default App;
