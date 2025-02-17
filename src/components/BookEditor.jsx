import React, { useState } from 'react'
import DefaultPageLayout from '../pages/DefaultPage'
import MDX2 from '../cards/MDX2'

import wt from '../../public/assets/b.png'
import rt from '../../public/assets/rattail.png'
import bt from '../../public/assets/bluetag.png'
import brt from '../../public/assets/bluetail.png'

import top1 from '../../public/assets/top1.png'
import back1 from '../../public/assets/back1.png'

function BookEditor ({bookPages, setBookPages}) {

    const priceMenus = [
        {
          p1: "$ 8.55",
          p2: "$ 9.50",
          p3: "$ 9.50",
          p4: "$ 11.90",
          p5: "$ 12.11",
          p6: "$ 14.11",
          p7: "$ 20.19",
          p8: "$ 22.19",
          p9: "$ 25.84",
          p10: "$ 28.26",
          p11: "$ 32.49",
          p12: "$ 37.36",
          p13: "$ 42.96",
          p14: "$ 49.40",
          p15: "$ 56.81",
        }, 
        {
          p1: "$ 10.55",
          p2: "$ 11.69",
          p3: "$ 13.18",
          p4: "$ 15.30",
          p5: "$ 18.96",
          p6: "$ 21.00",
          p7: "$ 27.46",
          p8: "$ 29.50",
          p9: "$ 30.20",
          p10: "$ 33.22",
          p11: "$ 36.54",
          p12: "$ 40.19",
          p13: "$ 44.20",
        }
      ]
    
    const [savePage, setSavePage] = useState(null)
    const [lastCreated, setLastCreated] = useState(null)

    const [pageHeader, setPageHeader] = useState("Default Page")
    
    const [subtitle, setSubtitle] = useState("Subtitle")
    // 'false' for no arrows, 'true' or 'anythingelse' for arrows
    const [multiMDX, setMultiMDX] = useState('false')

    // priceMenus[0] Big, piceMenus[1] small
    const [priceMenu, setPriceMenu] = useState(priceMenus[0])
    // menuType == 'true': bigPrice, menuType == 'anythingelse': smolPrice
    const [menuType, setMenuType] = useState('false')
    // placePrice == 'false' && menuType == 'false' no Price Grid
    const [placePrice, setPlacePrice] = useState('true')

    // const [cardOne, setCardOne] = useState([top1, back1])
    const [frontImg, setFrontImg] = useState(top1)
    const [backImg, setBackImg] = useState(back1)
    const [cardTwo, setCardTwo] = useState([top1, back1])
    const [cardThree, setCardThree] = useState([top1, back1])

    
    const [pricetitle, setPricetitle] = useState("")
    const [label1, setLabel1] = useState("")
    const [label2, setLabel2] = useState("")
    const [label3, setLabel3] = useState("")
    const [label4, setLabel4] = useState("")
    const [label5, setLabel5] = useState("")

    const [tail, setTail] = useState(wt)

    const [pi1, setPi1] = useState(null)
    const [pi2, setPi2] = useState(null)
    const [pi3, setPi3] = useState(null)
    const [pi4, setPi4] = useState(null)
    const [pi5, setPi5] = useState(null)

    const [priceMenuOpen, setPriceMenuOpen] = useState(false)

    const handleMDX = (e) => {
        if (e.target.value == 1) setMultiMDX('false')
        else setMultiMDX('true')
    }

    const handleTail = (e) => {
        switch(e.target.value) {

            case 'white-tag':
                setTail(wt)
                break
            case 'blue-tag':
                setTail(bt)
                break
            case 'white-rattail':
                setTail(rt)
                break
            case 'blue-rattail':
                setTail(brt)
                break
        }
    }

    const handleBigPrice = () => {
        setPriceMenu(priceMenus[0])
        setPlacePrice('true')
        setMenuType('true')
    }

    const handleSmallPrice = () => {
        setPriceMenu(priceMenus[1])
        setPlacePrice('true')
        setMenuType('false')
    }

    const handlePriceOn = () => {
        setPlacePrice('true')
        setPriceMenuOpen(true)
    }
    
    const handlePriceOff = () => {
        // placePrice == 'false' && menuType == 'false' no Price Grid
        setPlacePrice('false')
        setMenuType('false')
        setPriceMenuOpen(false)
    }

    const handleAddPage = () => {
        setBookPages([...bookPages,
            <DefaultPageLayout header={pageHeader} footer="XX" 
            content={<MDX2 multiMDX={multiMDX} subtitle={subtitle}
                           frontImg={frontImg} backImg={backImg} frontImg2={cardTwo[0]} backImg2={cardTwo[1]} frontImg3={cardThree[0]} backImg3={cardThree[1]}
                           priceMenu={priceMenu} menuType={menuType} placePrice={placePrice}
                           pricetitle={pricetitle} label1={label1} label2={label2} label3={label3} label4={label4} label5={label5}
                           tail={tail}
                           pi1={pi1} pi2={pi2} pi3={pi3} pi4={pi4} pi5={pi5}
                           />}/>
        ])
        console.log("Test Page Added")
        alert("Page Added Successfully")
    }

  
    return (

    
    <div>
        <h2>Book Editor</h2>

        <button onClick={handleAddPage}>Test Add</button>

        <form style={{display: 'flex', flexDirection: 'column'}}>


        
        <label for="page-header">Page Header</label>
        <input type="text" id="page-header" name="page-header" onChange={(e) => setPageHeader(e.target.value)}/>
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
        <select name="mdx2-multi" id="mdx2-multi" onChange={handleMDX}>
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
        </select>

        {/* MDX Card Vendor Code */}
        <label for="mdx2-subtitle">Certification Code</label>
        <input type="text" id="mdx2-subtitle" name="mdx2-subtitle" onChange={(e) => setSubtitle(e.target.value)}/>

        {/* MDX Card Images */}
        <label for="mdx2-frontimg1">Front Image 1</label>
        <input type="file" id="mdx2-frontimg1" name="mdx2-frontimg1" onChange={(e) => setFrontImg(e.target.value)}/>
        <label for="mdx2-backimg1">Back Image 1</label>
        <input type="file" id="mdx2-backimg1" name="mdx2-backimg1" onChange={(e) => setBackImg(e.target.value)}/>

        <label for="mdx2-frontimg2">Front Image 2</label>
        <input type="file" id="mdx2-frontimg2" name="mdx2-frontimg2" onChange={(e) => setCardTwo[0](e.target.value)}/>
        <label for="mdx2-backimg2">Back Image 2</label>
        <input type="file" id="mdx2-backimg2" name="mdx2-backimg2" onChange={(e) => setCardTwo[1](e.target.value)}/>

        <label for="mdx2-frontimg3">Front Image 3</label>
        <input type="file" id="mdx2-frontimg3" name="mdx2-frontimg3" onChange={(e) => setCardThree[0](e.target.value)}/>
        <label for="mdx2-backimg3">Back Image 3</label>
        <input type="file" id="mdx2-backimg3" name="mdx2-backimg3" onChange={(e) => setCardThree[1](e.target.value)}/>

        {/* Price Grid (Left Column) */}

        <label><b>Price Menu?</b></label>
        <input type="radio" id="on" name="price-menu" value="On" onClick={handlePriceOn}/>
        <label for="on">On</label>
        <input type="radio" id="off" name="price-menu" value="Off" onClick={handlePriceOff}/>
        <label for="off">Off</label>

        { priceMenuOpen == true ? 
        (<>
        <label><b>Price Menu Type</b></label>
        <input type="radio" id="big" name="price-type" value="Stud | Multi" onClick={handleBigPrice}/>
        <label for="big">Stud | Multi</label>
        <input type="radio" id="small" name="price-type" value="Solitaire" onClick={handleSmallPrice}/>
        <label for="small">Solitaire</label>
        </>) 
        : 
        (<></>)}

        
        
        <label><b>Price Description</b></label>

        <label for="price-title">Price Title</label>
            <input type="text" id="price-title" name="price-title" onChange={(e) => setPricetitle(e.target.value)}/>
        <label for="label-one">Label One</label>
            <input type="text" id="label-one" name="label-one" onChange={(e) => setLabel1(e.target.value)}/>
        <label for="label-two">Label Two</label>
            <input type="text" id="label-two" name="label-two" onChange={(e) => setLabel2(e.target.value)}/>
        <label for="label-three">Label Three</label>
            <input type="text" id="label-three" name="label-three" onChange={(e) => setLabel3(e.target.value)}/>
        <label for="label-four">Label Four</label>
            <input type="text" id="label-four" name="label-four" onChange={(e) => setLabel4(e.target.value)}/>
        <label for="label-five">Label Five</label>
            <input type="text" id="label-five" name="label-five" onChange={(e) => setLabel5(e.target.value)}/>


        {/* Price Grid (Right Column) */}
        
        <label for="">Tag Type</label>
        <select name="tag-type" id="tag-type" onChange={handleTail}>
            <option value="white-tag">Default White Tag</option>
            <option value="blue-tag">Default Blue Tag</option>
            <option value="white-rattail">Default White Rattail</option>
            <option value="blue-rattail">Default Blue Rattail</option>

        </select>

        <label><b>Includes Description</b></label>

        <label for="include-one">Include One</label>
            <input type="text" id="include-one" name="include-one" onChange={(e) => setPi1(e.target.value)}/>
        <label for="include-two">Include Two</label>
            <input type="text" id="include-two" name="include-two" onChange={(e) => setPi2(e.target.value)}/>
        <label for="include-three">Include Three</label>
            <input type="text" id="include-three" name="include-three" onChange={(e) => setPi3(e.target.value)}/>
        <label for="include-four">Include Four</label>
            <input type="text" id="include-four" name="include-four" onChange={(e) => setPi4(e.target.value)}/>
        <label for="include-five">Include Five</label>
            <input type="text" id="include-five" name="include-five" onChange={(e) => setPi5(e.target.value)}/>
        
       


        


        <button type="button" onClick={handleAddPage}>Submit</button>
        </form>





    </div>
  )
}

export default BookEditor