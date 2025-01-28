import React, {useState, useRef} from "react"
import signet from '../assets/signet.png'
import '../styles/page.css'


const GSIPage = React.forwardRef((props, ref) => {
  return (
    <div className="page page-cover page-cover-top"  ref={ref} data-density="hard" >
        <div className="page-content" >
          <div className="center-title-txt" >
            <img src={signet} width='80%' height='250px'/>
          </div>
        </div>
    </div>
  )
})

export default GSIPage