import React from 'react';
import Square from './square';
const Board =({board,handlesquareclick,winningsquares})=> {
    
    const rendersquare= position =>{
        const iswinningsquare =winningsquares.includes(position);
        
        return (
            <Square 
                value={board[position]} 
                onClick={() => handlesquareclick(position)}
                iswinningsquare={iswinningsquare}
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
