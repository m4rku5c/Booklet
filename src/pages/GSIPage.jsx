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

          {/* <div style={{display: 'flex', gap: '5px'}}>
              <img width="120px" height="120px" src={gsiLogo}/>
              <div style={{display: 'flex', flexDirection: 'column', marginTop: '-110px', marginBottom: '10px', transform: 'scale(1,1)'}}>
                  <span style={{fontSize: '30px', marginTop: '110px', }}>Gemological Science</span>
                  <span style={{fontSize: '30px', transform: 'scale(1,1)', marginLeft: '5px', marginBottom: '8px'}}> I n t e r n a t i o n a l</span>
                  <span style={{fontSize: '20px', color: 'lightblue',marginLeft: '5px', transform: 'scale(1,1.3)',}}>Leading the way with Integrity & Innovation</span>
                      
               </div>  
           </div> */}

           <div style={{display: 'flex'}}>

              <img style={{position: 'absolute', bottom: 0, left: 0}} src = {gsiLogo} width='120px' height='130px' />

              <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'flex-end'}}>
                <p style={{marginLeft: '125px', marginBottom: '0px'}}>
                  <section style={{marginLeft: '0px',all: 'unset', letterSpacing: '2px', fontSize: '35px', fontFamily: 'monospace'}}>Gemological Science</section><br/>
                  <section style={{marginLeft: '3px', marginBottom: '-20px', letterSpacing: '17px', fontSize: '25px'}}>INTERNATIONAL</section><br/>
                  <section style={{marginLeft: '3px', marginBottom: '-15px', color: 'darkcyan', letterSpacing: '1.1px', fontSize: '20px'}}><i>Leading the way with Integrity & Innovation</i></section><br/>
                </p>


              </div>
           </div>
          
        </div>
    </div>
  )
})

export default GSIPage