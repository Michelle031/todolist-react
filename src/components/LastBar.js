import React from 'react'
import '../App.css'

function LastBar({setStatus}) {

    const statusHandler = (e) => {
       setStatus(e.target.innerText);
    }
    return (
        <div className="select">
            <p className="all option" onClick={statusHandler}>all</p>
            <p className="active option"  onClick={statusHandler}>active</p>
            <p className="complete option"  onClick={statusHandler}>completed</p>
        </div>
    )
}

export default LastBar
