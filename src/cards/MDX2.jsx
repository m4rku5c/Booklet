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

      const [certSet, setCertSet] = useState(
        [
          props.frontImg && props.backImg ? { frontImg: props.frontImg, backImg: props.backImg } : null,
          props.frontImg2 && props.backImg2 ? { frontImg: props.frontImg2, backImg: props.backImg2 } : null,
          props.frontImg3 && props.backImg3 ? { frontImg: props.frontImg3, backImg: props.backImg3 } : null,
        ].filter(Boolean) // Remove null values
      );
      

      // const handleRight = () => {
      //   if (certSelected < 2) {
      //   setCertSelected((prev) => prev +1)
      //   } else if (certSelected == 2) {
      //   setCertSelected(0)
      //   }
      // }
      const handleRight = () => {
        setCertSelected((prev) => (prev + 1) % certSet.length);
      };
      

      // const handleLeft = () => {
      //   if (certSelected > 0) {
      //       setCertSelected((prev) => prev - 1)
      //   } else if (certSelected == 0) {
      //       setCertSelected(2)
      //   }
      // }
      const handleLeft = () => {
        setCertSelected((prev) => (prev - 1 + certSet.length) % certSet.length);
      };
      

     

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
        },
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
        }
      ]
    
      return (
        <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', justifyItems: 'center'}}>
        {/* // <div style={{display: "flex", marginLeft:'20px', position: 'absolute', top: 0, left: 0, marginTop: '140px'}} > */}
        <div style={{display: 'flex', flexDirection: 'row', margin: 'auto 0', justifyContent: 'center'}}>
          
          <div style={{display: 'flex', flexDirection: 'column', all: 'unset', justifyContent: 'center', alignItems: 'center', marginTop: 'auto', marginBottom: 'auto'}}>
            { props.multiMDX == 'false' ? <></> :<button onClick={handleLeft}><img src={leftArrow} width="30px" height="30px"/></button>}
             
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
        {props.multiMDX == 'false' ? <></> :<button onClick={handleRight}><img src={rightArrow} width="30px" height="30px"/></button>}
             
        </div>
    
        </div>
        <section style={{textAlign: 'center'}}>
            {/* <p>Natural Diamonds - $10 Flat Fee</p> */}
            {/* <p>Laser Inscription:  $5.00 per stone</p>
            <p style={{marginLeft: '117px'}}> $9.00 studs</p>
            <p style={{marginLeft: '117px'}}>$13.00 three stone</p> */}
            
        </section>
        <div style={{display: 'flex', flexDirection: 'row', margin: 'auto 0', justifyContent: 'space-evenly',  marginTop: '20px'}}>
        
        { props.menuType === 'true' ? 
        <PricingBig pricetitle={props.pricetitle} label1={props.label1} label2={props.label2} label3={props.label3} label4={props.label4} label5={props.label5} label6={props.label6} label7={props.label7} label8={props.label8} price1={priceGrid[certSelected].p1} price2={priceGrid[certSelected].p2} price3={priceGrid[certSelected].p3} price4={priceGrid[certSelected].p4} price5={priceGrid[certSelected].p5} price6={priceGrid[certSelected].p6} price7={priceGrid[certSelected].p7} price8={priceGrid[certSelected].p8} price9={priceGrid[certSelected].p9} price10={priceGrid[certSelected].p10} price11={priceGrid[certSelected].p11} price12={priceGrid[certSelected].p12} price13={priceGrid[certSelected].p13} price14={priceGrid[certSelected].p14} price15={priceGrid[certSelected].p15} />
        :
         <Pricing pricetitle={props.pricetitle} label1={props.label1} label2={props.label2} label3={props.label3} label4={props.label4} label5={props.label5} label6={props.label6} label7={props.label7} label8={props.label8} priceOn={props.placePrice} price1={priceGrid[certSelected].p1} price2={priceGrid[certSelected].p2} price3={priceGrid[certSelected].p3} price4={priceGrid[certSelected].p4} price5={priceGrid[certSelected].p5} price6={priceGrid[certSelected].p6} price7={priceGrid[certSelected].p7} price8={priceGrid[certSelected].p8} price9={priceGrid[certSelected].p9} price10={priceGrid[certSelected].p10} price11={priceGrid[certSelected].p11} price12={priceGrid[certSelected].p12} price13={priceGrid[certSelected].p13} price14={priceGrid[certSelected].p14} price15={priceGrid[certSelected].p15} />}
        
        <div style={{display:'flex', flexDirection:'column' }}>
          <img src={props.tail} height='60px' width="300px" style={{marginBottom: "40px"}}/>
          <div className='includes-box'>
                          {/* <img src={checkmark} width="20px" height="20px" style={{visibility: 'hidden'}} /> */}
                            <b><p style={{unset: 'all',fontSize: '25px',}}>Includes</p></b>
                            <hr width="100px"></hr>
                            <div className=''>
                              { props.pi1 != null ? (<><img src={checkmark} width="20px" height="20px" />
                              <a>{props.pi1}</a></>) : (<></>)}
                              
                              
                            </div>
                            <div className=''>
                            { props.pi2 != null ? (<><img src={checkmark} width="20px" height="20px" />
                              <a>{props.pi2}</a></>) : (<></>)}
                            </div>
                            <div className=''>
                            { props.pi3 != null ? (<><img src={checkmark} width="20px" height="20px" />
                              <a>{props.pi3}</a></>) : (<></>)}
                              
                            </div>
                            <div className=''>
                            { props.pi4 != null ? (<><img src={checkmark} width="20px" height="20px" />
                              <a>{props.pi4}</a></>) : (<></>)}
                              
                            </div>
                            <div className=''>
                            { props.pi5 != null ? (<><img src={checkmark} width="20px" height="20px" />
                              <a>{props.pi5}</a></>) : (<></>)}                   
                            </div>

                            <div className=''>
                            { props.pi6 != null ? (<><img src={checkmark} width="20px" height="20px" />
                              <a>{props.pi6}</a></>) : (<></>)}                   
                            </div>
                            
                            
          </div>
                          </div>
        
        </div>
        
        </div>
      )
})

export default MDX2


