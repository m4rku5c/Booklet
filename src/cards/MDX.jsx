import React, { useState, useRef} from 'react'
import '../styles/mdx.css'
import checkmark from '../../public/assets/check.png'

const MDX = React.forwardRef((props, ref) => {

      const [showPopout, setShowPopout] = useState(false)
      const [isFlipped, setIsFlipped] = useState(false)
      const handleMouseOver = () => {setShowPopout(true)}
      const handleMouseOut = () => {setShowPopout(false)}
      const handleFlip = () => {setIsFlipped(!isFlipped)}
    
      return (
        <div style={{display: "flex", marginLeft:'20px', position: 'absolute', top: 0, left: 0, marginTop: '140px'}} >
          <div style={{marginRight: '30px'}}>
          {/* <img src={checkmark} width="20px" height="20px" style={{visibility: 'hidden'}} /> */}
            <b><a style={{fontSize: '25px'}}>Includes</a></b>
            <hr width="100px"></hr>
            <div className=''>
              <img src={checkmark} width="20px" height="20px" />
              <a>Cert Card</a>
              {/* <div>This is the inscription comment</div> */}
            </div>
            <div className=''>
              <img src={checkmark} width="20px" height="20px" />
              <a>Cert Sheet</a>
              
            </div>
            <div className=''>
              <img src={checkmark} width="20px" height="20px" />
              <a>QR Tag</a>
              
            </div>
            <div className=''>
              <img src={checkmark} width="20px" height="20px" />
              <a>Inscription</a>
              
            </div>
          </div>
         
        <div className="new-card-wrapper">
          <div
            className={`new-cardclickflip ${isFlipped ? 'flipped' : ''}`}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
            onClick={handleFlip}
            >
            <div className="new-cardclickflip-inner">
              <div className="new-cardclickflip-front">
                <img src={props.frontImg} className="card-image"/>
              </div>
              <div className="new-cardclickflip-back">
                <img src={props.backImg} className="card-image"/>
                {showPopout && (
                  <div className="new-popout-box">
                    <div className="new-price-grid">
                      <div className="new-price-item">Price 1</div>
                      <div className="new-price-item">Price 2</div>
                      <div className="new-price-item">Price 3</div>
                      <div className="new-price-item">Price 4</div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
          
        </div>
        
        </div>
      )
})

export default MDX


