import React from "react";

const Style = (props) => {
  return(
    <div className="Style">
      <h1 style={props.font ? {color: props.font, backgroundColor: props.bground} : null} >
        The word is: {props.word}</h1>
    </div>
  )
}

export default Style;