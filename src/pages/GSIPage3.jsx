import React, {useState, useRef} from "react"
import '../styles/page.css'



const GSIPage3 = React.forwardRef((props, ref) => {
  return (
    <div className="page page-cover page-cover-top"  ref={ref} data-density="hard" >
        <div className="page-content" >
          <div className="center-title-txt" >
            <h2>{props.header}</h2>
          </div>
        </div>
    </div>
  )
})

export default GSIPage3