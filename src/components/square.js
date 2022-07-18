import React from "react";
 const Square= ({value,onClick,iswinningsquare}) =>{
    // console.log(value);
    return(
        <button type="button" className={`square ${iswinningsquare ? 'winning':''} ${value==='X' ? 'text-green':'text-orange'}`} onClick={onClick}>
            {value}
        </button>
    )
}
export default Square;