import React from "react";
 const Square= ({value,onClick,iswinningsquare}) =>{
    // console.log(value);
    return(
        <button type="button" className="square" onClick={onClick} style={{fontWeight: iswinningsquare ? 'bold':'normal'}}>
            {value}
        </button>
    )
}
export default Square;