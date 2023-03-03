// import React from 'react'
import './Card.css'

const Card = (props) => {
    const classes = " card " + props.className
    return <div className={classes}>{props.children}</div>
    //   children is a reserved name   
    // classes are added      const classes = " card " + props.className

}

export default Card
