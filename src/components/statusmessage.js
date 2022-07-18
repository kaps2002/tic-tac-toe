import React from 'react';
const StatusMessage =({winner,current})=>{
    const nomoveleft =current.board.every(el => el !==null);
    return (
        <div className='status-message'>
        <h2>
          {winner && (
          <>
          Winner is <span className={winner === 'X' ? 'text-green':'text-orange'}>{winner}</span>
          </>
          )
          }
          {!winner &&
            !nomoveleft &&
            <>
            Next player is<span className={current.isxnext ? 'text-green':'text-orange'}>{current.isXNext ? 'X' : 'O'}</span>
            </>}
          {!winner && nomoveleft && <>
          <span className='text-green'>X</span> and <span className='text-orange'>O</span> tied
          </>}
        </h2>
        </div>
      );
}
export default StatusMessage;