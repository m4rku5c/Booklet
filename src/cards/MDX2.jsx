import React, { useState, useRef} from 'react'
import '../styles/mdx.css'
import checkmark from '../../public/assets/check.png'
import rightArrow from '../../public/assets/arrow-right.png'
import leftArrow from '../../public/assets/arrow-left.png'

import whitetag from '../../public/assets/whitetag.png'

import Pricing from '../components/Pricing'
import PricingBig from '../components/PricingBig'

import a from '../../public/assets/a.png'

import b from '../../public/assets/b.png'

import c from '../../public/assets/c.png'

const MDX2 = React.forwardRef((props, ref) => {

      const [showPopout, setShowPopout] = useState(false)
      const [isFlipped, setIsFlipped] = useState(false)
      const handleMouseOver = () => {setShowPopout(true)}
      const handleMouseOut = () => {setShowPopout(false)}
      const handleFlip = () => {setIsFlipped(!isFlipped)}

      const [certSelected, setCertSelected] = useState(0)

      const handleRight = () => {
        if (certSelected < 2) {
        setCertSelected((prev) => prev +1)
        } else if (certSelected == 2) {
        setCertSelected(0)
        }
      }

      const handleLeft = () => {
        if (certSelected > 0) {
            setCertSelected((prev) => prev - 1)
        } else if (certSelected == 0) {
            setCertSelected(2)
        }
      }

      const [certSet, setCertSet] = useState([
            {
              frontImg: props.frontImg,
              backImg: props.backImg
            },
            {
              frontImg: props.frontImg2,
              backImg: props.backImg2
            },
            {
              frontImg: props.frontImg3,
              backImg: props.backImg3
            },
      ])

      const priceGrid = [
        {
            p1: props.priceMenu.p1,
            p2: props.priceMenu.p2,
            p3: props.priceMenu.p3,
            p4: props.priceMenu.p4,
            p5: props.priceMenu.p5,
            p6: props.priceMenu.p6,
            p7: props.priceMenu.p7,
            p8: props.priceMenu.p8,
            p9: props.priceMenu.p9,
            p10: props.priceMenu.p10,
            p11: props.priceMenu.p11,
            p12: props.priceMenu.p12,
            p13: props.priceMenu.p13,
            p14: props.priceMenu.p14,
            p15: props.priceMenu.p15,
            report: a
            
        },
        {
            p1: "$ 2",
            p2: "$ 2",
            p3: "$ 2",
            p4: "$ 2",
            p5: "$ 2",
            p6: "$ 2",
            p7: "$ 2",
            p8: "$ 2",
            p9: "$ 2",
            p10: "$ 2",
            p11: "$ 2",
            p12: "$ 2",
            p13: "$ 2",
            p14: "$ 2",
            p15: "$ 2",
            report: b
        },
        {
            p1: "$ 3",
            p2: "$ 3",
            p3: "$ 3",
            p4: "$ 3",
            p5: "$ 3",
            p6: "$ 3",
            p7: "$ 3",
            p8: "$ 3",
            p9: "$ 3",
            p10: "$ 3",
            p11: "$ 3",
            p12: "$ 3",
            p13: "$ 3",
            p14: "$ 3",
            p15: "$ 3",
            report: c
        }
      ]
    
      return (
        <div style={{display: 'flex', flexDirection: 'column', margin: 'auto 0', justifyContent: 'center', justifyItems: 'center'}}>
        {/* // <div style={{display: "flex", marginLeft:'20px', position: 'absolute', top: 0, left: 0, marginTop: '140px'}} > */}
        <div style={{display: 'flex', flexDirection: 'row', margin: 'auto 0', justifyContent: 'center'}}>
          
          <div style={{display: 'flex', flexDirection: 'column', all: 'unset', justifyContent: 'center', alignItems: 'center', marginTop: 'auto', marginBottom: 'auto'}}>
            {/* <button onClick={handleLeft}><img src={leftArrow} width="30px" height="30px"/></button> */}
             
        </div>
        <div className="new-card-wrapper">
            {/* <a>{props.subtitle}</a> */}
            <a>{props.subtitle}</a>
          <div
            className={`new-cardclickflip ${isFlipped ? 'flipped' : ''}`}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
            onClick={handleFlip}
            >
            <div className="new-cardclickflip-inner">
              <div className="new-cardclickflip-front">
                {/* <img src={props.frontImg} className="card-image"/> */}
                <img src={certSet[certSelected].frontImg} className="card-image"/>
              </div>
              <div className="new-cardclickflip-back">
                <img src={props.backImg} className="card-image"/>
                {/* {showPopout && (
                  <div className="new-popout-box">
                    <div className="new-price-grid">
                      <div className="new-price-item">Price 1</div>
                      <div className="new-price-item">Price 2</div>
                      <div className="new-price-item">Price 3</div>
                      <div className="new-price-item">Price 4</div>
                    </div>
                  </div>
                )} */}
              </div>
            </div>
          </div>
          
        </div>
        <div style={{display: 'flex', flexDirection: 'column', all: 'unset', justifyContent: 'center', alignItems: 'center', marginTop: 'auto', marginBottom: 'auto'}}>
            {/* <button onClick={handleRight}><img src={rightArrow} width="30px" height="30px"/></button> */}
             
        </div>
    
        </div>
        <section style={{textAlign: 'center'}}>
            {/* <p>Natural Diamonds - $10 Flat Fee</p> */}
            {/* <p>Laser Inscription:  $5.00 per stone</p>
            <p style={{marginLeft: '117px'}}> $9.00 studs</p>
            <p style={{marginLeft: '117px'}}>$13.00 three stone</p> */}
            
        </section>
        <div style={{display: 'flex', flexDirection: 'row', margin: 'auto 0', justifyContent: 'center', justifyContent: 'space-evenly', marginTop: '10px'}}>
        
        { props.menuType === 'true' ? 
        <PricingBig price1={priceGrid[certSelected].p1} price2={priceGrid[certSelected].p2} price3={priceGrid[certSelected].p3} price4={priceGrid[certSelected].p4} price5={priceGrid[certSelected].p5} price6={priceGrid[certSelected].p6} price7={priceGrid[certSelected].p7} price8={priceGrid[certSelected].p8} price9={priceGrid[certSelected].p9} price10={priceGrid[certSelected].p10} price11={priceGrid[certSelected].p11} price12={priceGrid[certSelected].p12} price13={priceGrid[certSelected].p13} price14={priceGrid[certSelected].p14} price15={priceGrid[certSelected].p15} />
        :
         <Pricing price1={priceGrid[certSelected].p1} price2={priceGrid[certSelected].p2} price3={priceGrid[certSelected].p3} price4={priceGrid[certSelected].p4} price5={priceGrid[certSelected].p5} price6={priceGrid[certSelected].p6} price7={priceGrid[certSelected].p7} price8={priceGrid[certSelected].p8} price9={priceGrid[certSelected].p9} price10={priceGrid[certSelected].p10} price11={priceGrid[certSelected].p11} price12={priceGrid[certSelected].p12} price13={priceGrid[certSelected].p13} price14={priceGrid[certSelected].p14} price15={priceGrid[certSelected].p15} />}
        
        <div style={{display:'flex', flexDirection:'column', justifyContent: 'center', alignItems:'center', }}>
          <img src={props.tail} height='50px' style={{marginBottom: "75px"}}/>
          <div>
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
                              <a>Cert Sleeve</a>
                              
                            </div>
                            <div className=''>
                              <img src={checkmark} width="20px" height="20px" />
                              <a>QR Code Tag</a>
                              
                            </div>
                            <div className=''>
                              <img src={checkmark} width="20px" height="20px" />
                              <a>Diamond(s) Laser Inscription</a>
                              
                            </div>
                            <div className=''>
                              <img src={checkmark} width="20px" height="20px" />
                              <a>E-Cert</a>
                              
                            </div>
                            
          </div>
                          </div>
        
        </div>
        
        </div>
      )
})

export default MDX2


