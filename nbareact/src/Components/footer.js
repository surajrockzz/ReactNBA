import React from 'react'
import {Link} from 'react-router-dom'

const footer =()=>{
    return(
        <footer>
            <div className ="flexbox-container">
            <Link className = "logo" to='/'>
                    <span></span>
                    </Link>
                </div>
        </footer>
    )
}


export default footer