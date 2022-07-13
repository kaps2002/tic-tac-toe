import React,{useState} from 'react';
import Square from './square';
const Board =()=> {
    const [board,setBoard]=useState(Array(9).fill(null));
    const [isxnext,setisxnext]=useState(false);
    const handlesquareclick=position=>{
        if(board[position]){
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
    const rendersquare= position =>{
        return (
            <Square 
                value={board[position]} 
                onClick={() => handlesquareclick(position)}
            />
        );
    };
    return(
        <div className='board'>
            <div className='board-row'>
                {rendersquare(0)}
                {rendersquare(1)}
                {rendersquare(2)}  
            </div>
            <div className='board-row'>
                {rendersquare(3)}
                {rendersquare(4)}
                {rendersquare(5)}
            </div>
            <div className='board-row'>
                {rendersquare(6)}
                {rendersquare(7)}
                {rendersquare(8)}
            </div>
        </div>
    )
}
export default Board;
