import React from 'react'
import './Logo.css';
import Brain from './icons8-brain-100.png'
import Tilt from 'react-tilt'

const Logo =()=>{
    return(
        <div className="ma4 mt0">
            <Tilt className="Tilt br2 shadow-2" options={{ max : 55 }} style={{ height: 150, width: 150 }} >
                <div className="Tilt-inner pa3"> <img alt="brain" src={Brain}/> </div>
            </Tilt>
        </div>
    )
}

export default Logo