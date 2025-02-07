import React from 'react'
import '../styles/pricing.css'

const Pricing = (props) => {
  return (
    <div>
        { props.priceOn == 'false' ? <></> :
        <table style={{fontSize: '12px'}}>
            <tr>
                <th>Weight</th>
                <th>GSI Cert Price</th>
            </tr>
            <tr>
                <td>Up to 0.28ct</td>
                <td>{props.price1}</td>
            </tr>
            <tr>
                <td>0.29 - 0.44ct</td>
                <td>{props.price2}</td>
            </tr>
            <tr>
                <td>0.45 - 0.87ct</td>
                <td>{props.price3}</td>
            </tr>
            <tr>
                <td>0.88 - 0.94ct</td>
                <td>{props.price4}</td>
            </tr>
            <tr>
                <td>0.95 - 1.28ct</td>
                <td>{props.price5}</td>
            </tr>
            <tr>
                <td>1.29 - 1.44ct</td>
                <td>{props.price6}</td>
            </tr>
            <tr>
                <td>1.45 - 1.94ct</td>
                <td>{props.price7}</td>
            </tr>
            <tr>
                <td>1.95 - 2.44ct</td>
                <td>{props.price8}</td>
            </tr>
            <tr>
                <td>2.45 - 3.94ct</td>
                <td>{props.price9}</td>
            </tr>
            <tr>
                <td>3.95 - 4.44ct</td>
                <td>{props.price10}</td>
            </tr>
            <tr>
                <td>4.45 - 4.94ct</td>
                <td>{props.price11}</td>
            </tr>
            <tr>
                <td>4.95 - 5.44ct</td>
                <td>{props.price12}</td>
            </tr>
            <tr>
                <td>5.45 - 5.94ct</td>
                <td>{props.price13}</td>
            </tr>
        </table>
        }

        <section style={{marginTop: '10px', display:'flex', flexDirection: 'column', fontSize: '12px'}}>
            {/* <a>Laser Inscription Price:</a>
            <a >$5.00 Per Stone</a>
            <a >$9.00 Studs / 2 Stone</a>
            <a style={{marginLeft:'px'}}>$13.00 3 Stone</a> */}
            <a>{props.pricetitle}</a>
            <a >{props.label1}</a>
            <a >{props.label2}</a>
            <a style={{marginLeft:'px'}}>{props.label3}</a>
            <a >{props.label4}</a>
            <a >{props.label5}</a>
            <a >{props.label6}</a>
            <a >{props.label7}</a>
            <a >{props.label8}</a>
            {/* <a style={{marginLeft:'10px'}}>$9.00 studs</a>
            <a style={{marginLeft:'10px'}}>$13.00 three stone</a> */}
            
        </section>
    </div>
  )
}

export default Pricing