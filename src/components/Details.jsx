import React from 'react'
import '../styles/details.css'
import checkm from '../../public/assets/check.png'

const Details = (props) => {
  return (
    <div>
        <table style={{fontSize: '10px'}}>
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
        </table>
    </div>
  )
}

export default Details