import React from 'react';
const StatusMessage =({winner,current})=>{
    const nomoveleft =current.board.every(el => el !==null);
    return (
        <h2>
          {winner && `Winner is ${winner}`}
          {!winner &&
            !nomoveleft &&
            `Next player is ${current.isXNext ? 'X' : 'O'}`}
          {!winner && nomoveleft && 'X and O tied'}
        </h2>
      );
}
export default StatusMessage;