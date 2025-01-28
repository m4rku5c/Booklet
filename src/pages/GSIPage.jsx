import React, {useState, useRef} from "react"
import '../styles/page.css'


const GSIPage = React.forwardRef((props, ref) => {
  return (
    <div className="page page-cover page-cover-top"  ref={ref} data-density="hard" >
        <div className="page-content" >
          <div className="center-title-txt" >GSI CERTIFICATE BOOKLET</div>
        </div>
    </div>
  )
})

export default GSIPage