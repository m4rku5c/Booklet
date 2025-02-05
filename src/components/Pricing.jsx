import React from 'react'
import '../styles/pricing.css'

const Pricing = (props) => {
  return (
    <div>
        <table>
            <tr>
                <th>Weight</th>
                <th>MDX | SDX | FDX</th>
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
    </div>
  )
}

export default Pricing