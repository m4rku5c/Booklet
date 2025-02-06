import React from 'react'
import '../styles/details.css'
import checkm from '../../public/assets/check.png'
import tag from '../../public/assets/a.png'
import checkmark from '../../public/assets/check.png'
import box from '../../public/assets/box.png'
import checkbox from  '../../public/assets/checkbox.png'

const Details = (props) => {
  return (
    <div style={{display:'flex', flexDirection:'column', justifyContent: 'center', alignItems:'center', }}>
        {/* <img src={tag} height='70px' width="200px" style={{marginBottom:"60px"}}/> */}


        <div style={{display: 'flex', flexDirection: 'row', margin: 'auto 0', justifyContent: 'center', justifyContent: 'space-evenly', marginBottom: '200px'}}>
        
                  <div style={{marginRight: '30px'}}>
                  {/* <img src={checkmark} width="20px" height="20px" style={{visibility: 'hidden'}} /> */}
                    <b><a style={{fontSize: '25px'}}>Lab Validation Process</a></b>
                    <hr width="100px"></hr>

                    <div className=''>
                      <img src={checkbox} width="20px" height="20px" />
                      <a>Stone Screening <a style={{color: 'red'}}>*</a></a>
                      
                    </div>
                    <div className=''>
                      <img src={checkbox} width="20px" height="20px" />
                      <a>Stone Shape</a>
                      
                    </div>
                    <div className=''>
                      <img src={checkbox} width="20px" height="20px" />
                      <a>Center Stone(s) Actual Color</a>
                      
                    </div>

                    <div className=''>
                      <img src={checkbox} width="20px" height="20px" />
                      <a>Center Stone(s) Actual Clarity</a>
                      
                    </div>

                    <div className=''>
                      <img src={checkbox} width="20px" height="20px" />
                      <a>Center Stone(s) Actual Carat Weight</a>
                      
                    </div>

                    <div className=''>
                      <img src={checkbox} width="20px" height="20px" />
                      <a>Side Stone(s) Minimum Color <a style={{color: 'red'}}>*</a></a>
                      
                    </div>

                    <div className=''>
                      <img src={checkbox} width="20px" height="20px" />
                      <a>Side Stone(s) Minimum Clarity <a style={{color: 'red'}}>*</a></a>
                      
                    </div>

                    <div className=''>
                      <img src={box} width="20px" height="20px" />
                      <a>Side Stone(s) Minimum Carat Weight</a>
                      
                    </div>


                    <div className=''>
                      <img src={box} width="20px" height="20px" />
                      <a>Minimum Total Carat Weight</a>
                      
                    </div>


                    <div className=''>
                      <img src={box} width="20px" height="20px" />
                      <a>Cut Grade</a>
                      
                    </div>

                    <div className=''>
                      <img src={checkbox} width="20px" height="20px" />
                      <a>Polish / Symmetry</a>
                      
                    </div>

                    <div className=''>
                      <img src={checkbox} width="20px" height="20px" />
                      <a>Measurements</a>
                      
                    </div>

                    <div className=''>
                      <img src={checkbox} width="20px" height="20px" />
                      <a>Treatments</a>
                      
                    </div>

                    <div className=''>
                      <img src={box} width="20px" height="20px" />
                      <a>Metal Title / Trademark Stamp Validation</a>
                      
                    </div>

                    <div style={{marginTop: '10px'}}>
                        <a style={{color: 'red'}}>* Chain of custody responsibility shifts to vendor</a>
                    </div>

                  </div>       

                  </div> 

        {/* <table style={{fontSize: '10px', marginBottom:"200px"}}>
            <tr>
                <th>Certifcation Type</th>
                <th>Origin</th>
                <th>Shape(s)</th>
                <th>MIN Color</th>
                <th>MIN Clarity</th>
                <th>ACTUAL Color</th>
                <th>ACTUAL Clarity</th>
                <th>MIN Total Weight</th>
                <th>ACTUAL Total Weight</th>
                <th>Center Stone(s) MIN</th>
                <th>Center Stone(s) ACTUAL</th>
                <th>Cut Grade</th>
                <th>Polish / Symmetry</th>
            </tr>
            <tr>
                <td>Natural Minimum</td>

                <td><img src={props.cord1_1} width="15px" height="15px" /></td>
                <td><img src={props.cord1_1} width="15px" height="15px" /></td>
                <td><img src={props.cord1_1} width="15px" height="15px" /></td>
                <td><img src={props.cord1_1} width="15px" height="15px" /></td>
                <td><img src={props.cord1_1} width="15px" height="15px" /></td>
                <td><img src={props.cord1_1} width="15px" height="15px" /></td>
                <td><img src={props.cord1_1} width="15px" height="15px" /></td>
                <td><img src={props.cord1_1} width="15px" height="15px" /></td>
                <td><img src={props.cord1_1} width="15px" height="15px" /></td>
                <td><img src={props.cord1_1} width="15px" height="15px" /></td>
                <td><img src={props.cord1_1} width="15px" height="15px" /></td>
                <td><img src={props.cord1_1} width="15px" height="15px" /></td>
            </tr>
            <tr>
                <td>Natural Full Cert</td>

                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td>Natural Full Cert
                    w/ Center Stone
                </td>

                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td>Natural Full Cert
                    w/ 3 Stone
                </td>

                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td>LEO Cut Full Cert</td>

                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td>Canadian Origin or
                    Arctic Brilliance
                </td>

                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
        </table> */}
    </div>
  )
}

export default Details