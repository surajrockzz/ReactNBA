import React from 'react'
import {Link} from 'react-router-dom'

const header =()=>{
    return(
        <header>
            <div className ="flexbox-container">
            <Link className = "logo" to='/'>
                    <span></span>
                    </Link>
                </div>
            <nav>
                <Link to='/teams'>Teams</Link>
                </nav>
        </header>
    )
}


export default header