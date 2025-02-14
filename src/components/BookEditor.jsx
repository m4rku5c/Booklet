import React, { useState } from 'react'
import DefaultPageLayout from '../pages/DefaultPage'
import MDX2 from '../cards/MDX2'

function BookEditor ({bookPages, setBookPages}) {
    
    const [pageHeader, setPageHeader] = useState("Default Page")
    const [multiMDX, setMultiMDX] = useState(false)
    const [priceMenu, setPriceMenu] = useState(false)
    const [subtitle, setSubtitle] = useState("")

    const [tail, setTail] = useState(null)

    const [pricetitle, setPricetitle] = useState("")
    const [label1, setLabel1] = useState("")
    const [label2, setLabel2] = useState("")
    const [label3, setLabel3] = useState("")
    const [label4, setLabel4] = useState("")
    const [label5, setLabel5] = useState("")

    const handleAddPage = () => {
        // setBookPages([...bookPages, 
        // <DefaultPageLayout header={pageHeader} footer="#XX" 
        // content={
        //         <MDX2 
        //          multiMDX={},
        //          subtitle={},

        //          frontImg={},
        //          backImg={},
        //          frontImg2={},
        //          backImg2={},
        //          frontImg3={},
        //          backImg3={},




        //          placePrice={},
        //          menuType={},
        //          priceMenu={},

        //          pricetitle={},
        //          label1={},
        //          label2={},
        //          label3={},
        //          label4={},
        //          label5={},

        //          tail={},

        //          pi1={},
        //          pi2={},
        //          pi3={},
        //          pi4={},
        //          pi5={},


        //         />} 
        // />])

        console.log("Test Page Added")
    }

  
    return (

    
    <div>
        <h2>Book Editor</h2>

        <button onClick={handleAddPage}>Test Add</button>

        <form style={{display: 'flex', flexDirection: 'column'}}>


        
        <label for="page-header">Page Header</label>
        <input type="text" id="page-header" name="page-header"/>
        <label for="content-format">Choose Content Format</label>
        <select name="content-format" id="content-format">
            <option value="MDX2">MDX2</option>
        </select>


        {/* Default Page x MDX2
        //////////////////////////
        / header                 /
        /        subtitle        /
        /       [card img]       /
        /                        /
        / Price Grid |  [tag]    /
        /            |           /
        / Price Desc.|  Includes /
        / ______________________ /
        /                 footer /       
        ////////////////////////// 
        */}


        {/*  MDX2 Formatting */}
        <label for="mdx2-multi">How Many MDX2 Cards?</label>
        <select name="mdx2-multi" id="mdx2-multi">
            <option value="oneMDX">1</option>
            <option value="twoMDX">2</option>
            <option value="threeMDX">3</option>
        </select>

        {/* MDX Card Vendor Code */}
        <label for="mdx2-subtitle">Certification Code</label>
        <input type="text" id="mdx2-subtitle" name="mdx2-subtitle"/>

        {/* MDX Card Images */}
        <label for="mdx2-frontimg1">Front Image 1</label>
        <input type="file" id="mdx2-frontimg1" name="mdx2-frontimg1"/>
        <label for="mdx2-backimg1">Certification Code</label>
        <input type="file" id="mdx2-backimg1" name="mdx2-backimg1"/>

        <label for="mdx2-frontimg2">Front Image 2</label>
        <input type="file" id="mdx2-frontimg2" name="mdx2-frontimg2"/>
        <label for="mdx2-backimg2">Certification Code</label>
        <input type="file" id="mdx2-backimg2" name="mdx2-backimg2"/>

        <label for="mdx2-frontimg3">Front Image 3</label>
        <input type="file" id="mdx2-frontimg3" name="mdx2-frontimg3"/>
        <label for="mdx2-backimg3">Certification Code</label>
        <input type="file" id="mdx2-backimg3" name="mdx2-backimg3"/>

        {/* Price Grid (Left Column) */}

        <label><b>Price Menu?</b></label>
        <input type="radio" id="on" name="price-menu" value="On" onClick={() => {setPriceMenu(true)}}/>
        <label for="on">On</label>
        <input type="radio" id="off" name="price-menu" value="Off" onClick={() => {setPriceMenu(false)}}/>
        <label for="off">Off</label>

        { priceMenu == true ? 
        (<>
        <label><b>Price Menu Type</b></label>
        <input type="radio" id="big" name="price-type" value="Stud | Multi"/>
        <label for="big">Stud | Multi</label>
        <input type="radio" id="small" name="price-type" value="Solitaire"/>
        <label for="small">Solitaire</label>
        </>) 
        : 
        (<></>)}

        
        
        <label><b>Price Description</b></label>

        <label for="price-title">Price Title</label>
            <input type="text" id="price-title" name="price-title"/>
        <label for="label-one">Label One</label>
            <input type="text" id="label-one" name="label-one"/>
        <label for="label-two">Label Two</label>
            <input type="text" id="label-two" name="label-two"/>
        <label for="label-three">Label Three</label>
            <input type="text" id="label-three" name="label-three"/>
        <label for="label-four">Label Four</label>
            <input type="text" id="label-four" name="label-four"/>
        <label for="label-five">Label Five</label>
            <input type="text" id="label-five" name="label-five"/>


        {/* Price Grid (Right Column) */}
        
        <label for="">Tag Type</label>
        <select name="tag-type" id="tag-type">
            <option value="white-tag">Default White Tag</option>
            <option value="blue-tag">Default Blue Tag</option>
            <option value="white-rattail">Default White Rattail</option>
            <option value="white-rattail">Default Blue Rattail</option>

        </select>

        <label><b>Includes Description</b></label>

        <label for="include-one">Include One</label>
            <input type="text" id="include-one" name="include-one"/>
        <label for="include-two">Include Two</label>
            <input type="text" id="include-two" name="include-two"/>
        <label for="include-three">Include Three</label>
            <input type="text" id="include-three" name="include-three"/>
        <label for="include-four">Include Four</label>
            <input type="text" id="include-four" name="include-four"/>
        <label for="include-five">Include Five</label>
            <input type="text" id="include-five" name="include-five"/>
        
       


        


        <button type="submit" onClick={handleAddPage}>Submit</button>
        </form>





    </div>
  )
}

export default BookEditor