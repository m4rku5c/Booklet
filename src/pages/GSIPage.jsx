import React, {useState, useRef} from "react"
import '../styles/page.css'
import gsiLogo from '../assets/gsilogo.png'


const GSIPage = React.forwardRef((props, ref) => {
  return (
    <div className="page page-cover page-cover-top"  ref={ref} data-density="hard" >
        <div className="page-content" >
          <div className="center-title-txt" >
            <h2>GSI CERTIFICATE CATALOGUE</h2>
            <h4>Prepared Exclusively for<br></br> Signet Jewelers</h4>
          </div>

          <div style={{display: 'flex', gap: '5px'}}>
              <img width="120px" height="120px" src={gsiLogo}/>
              <div style={{display: 'flex', flexDirection: 'column', marginTop: '-110px', marginBottom: '10px', transform: 'scale(1,1)'}}>
                  <span style={{fontSize: '30px', marginTop: '110px', }}>Gemological Science</span>
                  <span style={{fontSize: '30px', transform: 'scale(1,1)', marginLeft: '5px', marginBottom: '8px'}}> I n t e r n a t i o n a l</span>
                  <span style={{fontSize: '20px', color: 'lightblue',marginLeft: '5px', transform: 'scale(1,1.3)',}}>Leading the way with Integrity & Innovation</span>
                      
               </div>  
           </div>
          
        </div>
    </div>
  )
})

export default GSIPage