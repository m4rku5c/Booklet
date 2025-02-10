import React from 'react'
import '../styles/details.css'
import checkm from '../../public/assets/check.png'
import tag from '../../public/assets/a.png'
import checkmark from '../../public/assets/check.png'
import box from '../../public/assets/box.png'
import checkbox from  '../../public/assets/checkbox.png'

const Details3 = ({stoneScreening, stoneShape, centerStoneActualColor, centerStoneActualClarity, centerStoneActualCarat, sideStoneMinColor, sideStoneMinClarity, sideStoneMinCarat, minTotalCarat, cutGrade, polishSymmetry, measurements, treatments, metalTitle}) => {


    const stoneScreeningImage = stoneScreening === 0;

    

  return (

    

    <div style={{display:'flex', flexDirection:'column', justifyContent: 'center', alignItems:'center', }}>
        {/* <img src={tag} height='70px' width="200px" style={{marginBottom:"60px"}}/> */}


        <div style={{display: 'flex', flexDirection: 'row', margin: 'auto 0', justifyContent: 'center', justifyContent: 'space-evenly', marginBottom: '200px'}}>
        
                  <div style={{marginRight: '30px'}}>
                  {/* <img src={checkmark} width="20px" height="20px" style={{visibility: 'hidden'}} /> */}
                    <b><a style={{fontSize: '25px'}}>Lab Validation Process</a></b>
                    <hr width="100px"></hr>

                    <div className=''>
                      {stoneScreening === 1? (<img src={checkbox} width="20px" height="20px" />) 
                      : (<img src={box} width="20px" height="20px" />)}
                      {/* <img src={box} width="20px" height="20px" /> */}
                      <a>Stone Screening <a style={{color: 'red'}}>*</a></a>
                      
                    </div>
                    <div className=''>
                    {stoneShape === 1? (<img src={checkbox} width="20px" height="20px" />) 
                      : (<img src={box} width="20px" height="20px" />)}
                      <a>Stone Shape</a>
                      
                    </div>
                    <div className=''>
                    {centerStoneActualColor === 1? (<img src={checkbox} width="20px" height="20px" />) 
                      : (<img src={box} width="20px" height="20px" />)}
                      <a>Center Stone(s) Actual Color</a>
                      
                    </div>

                    <div className=''>
                    {centerStoneActualClarity === 1? (<img src={checkbox} width="20px" height="20px" />) 
                      : (<img src={box} width="20px" height="20px" />)}
                      <a>Center Stone(s) Actual Clarity</a>
                      
                    </div>

                    <div className=''>
                    {centerStoneActualCarat === 1? (<img src={checkbox} width="20px" height="20px" />) 
                      : (<img src={box} width="20px" height="20px" />)}
                      <a>Center Stone(s) Actual Carat Weight</a>
                      
                    </div>

                    <div className=''>
                    {sideStoneMinColor === 1? (<img src={checkbox} width="20px" height="20px" />) 
                      : (<img src={box} width="20px" height="20px" />)}
                      <a>Side Stone(s) Minimum Color <a style={{color: 'red'}}>*</a></a>
                      
                    </div>

                    <div className=''>
                    {sideStoneMinClarity === 1? (<img src={checkbox} width="20px" height="20px" />) 
                      : (<img src={box} width="20px" height="20px" />)}
                      <a>Side Stone(s) Minimum Clarity <a style={{color: 'red'}}>*</a></a>
                      
                    </div>

                    <div className=''>
                    {sideStoneMinCarat === 1? (<img src={checkbox} width="20px" height="20px" />) 
                      : (<img src={box} width="20px" height="20px" />)}
                      <a>Side Stone(s) Minimum Carat Weight</a>
                      
                    </div>


                    <div className=''>
                    {minTotalCarat === 1? (<img src={checkbox} width="20px" height="20px" />) 
                      : (<img src={box} width="20px" height="20px" />)}
                      <a>Minimum Total Carat Weight</a>
                      
                    </div>


                    <div className=''>
                    {cutGrade === 1? (<img src={checkbox} width="20px" height="20px" />) 
                      : (<img src={box} width="20px" height="20px" />)}
                      <a>Cut Grade</a>
                      
                    </div>

                    <div className=''>
                    {polishSymmetry === 1? (<img src={checkbox} width="20px" height="20px" />) 
                      : (<img src={box} width="20px" height="20px" />)}
                      <a>Polish / Symmetry</a>
                      
                    </div>

                    <div className=''>
                    {measurements === 1? (<img src={checkbox} width="20px" height="20px" />) 
                      : (<img src={box} width="20px" height="20px" />)}
                      <a>Measurements</a>
                      
                    </div>

                    <div className=''>
                    {treatments === 1? (<img src={checkbox} width="20px" height="20px" />) 
                      : (<img src={box} width="20px" height="20px" />)}
                      <a>Treatments <a style={{color: 'red'}}>*</a></a>
                      
                    </div>

                    <div className=''>
                    {metalTitle === 1? (<img src={checkbox} width="20px" height="20px" />) 
                      : (<img src={box} width="20px" height="20px" />)}
                      <a>Metal Title / Trademark Stamp Validation</a>
                      
                    </div>

                    <div style={{marginTop: '10px'}}>
                        <a style={{color: 'red'}}>* Chain of custody responsibility shifts to vendor</a>
                    </div>

                  </div>       

                  </div> 
    </div>
  )
}

export default Details3