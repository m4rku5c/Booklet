import React, { useState } from "react"
import "../styles/page.css"

const TableOfContents = React.forwardRef((props, ref) => {
  const [openCategory, setOpenCategory] = useState(null)
  const [expanded, setExpanded] = useState({})

  const toggleTopLevel = (category) => {
    setOpenCategory((prev) => (prev === category ? null : category))
  }



  const toggleLayer = (layer) => {
    setExpanded((prev) => ({
      ...prev,
      [layer]: !prev[layer],
    }));

    if (layer === "minedDiamond") {
      setExpanded((prev) => ({
        ...prev,
        ["lcd"]: false,
      }));

      
    }

    if (layer === "lcd") {
      setExpanded((prev) => ({
        ...prev,
        ["minedDiamond"]: false,
      }));

      
    }
    

  }

  
  
  

  return (
    <div className="page page-cover page-cover-top" ref={ref} data-density="hard">
      <div className="page-content">
        <h2 className="page-header">
          Welcome To Signet:
          <br /> GSI Catalogue
        </h2>
        <div style={{ position: "absolute", top: 0, left: 0, marginTop: "140px", cursor: "pointer" }}>
          <ul className="layer1" style={{ fontSize: "25px" }}>

            {/* When no category is selected, show all */}
            {openCategory === null && (
              <>
                <li style={{ cursor: "pointer" }} onClick={() => toggleTopLevel("kay")}>
                  KAY ................................................................... 1
                </li>
                <li style={{ cursor: "pointer" }} onClick={() => toggleTopLevel("kayoutlet")}>
                  KAY Outlet ........................................................ 13
                </li>
                <li style={{ cursor: "pointer" }} onClick={() => toggleTopLevel("Jared")}>
                  Jared.................................................................... 18
                </li>
                <li style={{ cursor: "pointer" }} onClick={() => toggleTopLevel("jaredvault")}>
                  Jared Vault .......................................................... 25
                </li>
                <li style={{ cursor: "pointer" }} onClick={() => toggleTopLevel("peoples")}>
                  Peoples ............................................................... 33
                </li>
                <li style={{ cursor: "pointer" }} onClick={() => toggleTopLevel("zales")}>
                  Zales ................................................................... 45
                </li>
                <li style={{ cursor: "pointer" }} onClick={() => toggleTopLevel("zalesoutlet")}>
                  Zales Outlet ......................................................... 85
                </li>
              </>
            )}

            {openCategory === "kay" && (
              <>
                <li style={{ cursor: "pointer" }} onClick={() => toggleTopLevel(null)}>KAY ................................................................... 1</li>
                <ul className="layer2">
                  <li onClick={() => toggleLayer("minedDiamond")}>Natural Diamond ......................................... 2</li>
                  {expanded.minedDiamond && (
                   <ul>
                        
                   <li>21 - Bridal REG .............................. <button onClick={props.functionInput} style={{all: 'unset'}}>6</button></li>
                   <li>22 - Bridal Solitaire ........................ 7</li>
                   <li>23 - 3 Stone Styles .......................... 8</li>
                   <li>24 - 2 Stone Styles .......................... 9</li>
                   <li>25 - Solitaire Studs | Pendants ........ 10</li>
                   <li>26 - Anniversary ............................. 11</li>
                   <li>27 - Fashion .................................... 12</li>
                   <li>28 - Color Diamond ........................ 13</li>
                   <li>34 - Anniversary | Fashion .............. 14</li>

                   
                  
               </ul>
                  )}
                  <li onClick={() => toggleLayer("lcd")}>Lab Created Diamond ................................. 11</li>
                  {expanded.lcd && (
                    <ul>
                    <li>21 - Bridal REG .............................. 6</li>
                    <li>22 - Bridal Solitaire ........................ 7</li>
                    <li>23 - 3 Stone Styles .......................... 8</li>
                    <li>24 - 2 Stone Styles .......................... 9</li>
                    <li>25 - Solitaire Studs | Pendants ........ 10</li>
                    <li>28 - Color Diamond ........................ 13</li>
                    <li>31 - Bridal CTR-CTW .................... 14</li>
                    <li>32 - Bridal Solitaire ........................ 15</li>
                    <li>33 - Solitaire Studs | Pendants ........ 16</li>
                    <li>34 - Anniversary | Fashion .............. 17</li>
                    <li>41 - All Mini Min ............................ 18</li>
                  </ul>
                  )}
                  <li onClick={() => toggleLayer("gemstone")}>Natural Gemstone ....................................... 12</li>
                  {expanded.gemstone && (
                    <ul className="layer3">
                      <li onClick={() => toggleLayer("fullCertification2")}>Full Certification ................................... 3</li>
                      {expanded.fullCertification2 && (
                        <ul>
                          <li>Bridal REG ...................................... 6</li>
                          <li>Bridal Solitaire ................................ 7</li>
                        </ul>
                      )}
                      <li>Minimum Certification ......................... 10</li>
                    </ul>
                  )}
                </ul>
              </>
            )}

            {openCategory === "kayoutlet" && (
              <>
                <li className='hoverChange' style={{ cursor: "pointer" }} onClick={() => toggleTopLevel(null)}>KAY Outlet ........................................................ 13</li>
                <ul className="layer2">
                  <li onClick={() => toggleLayer("minedDiamondoutlet")}>Natural Diamond ......................................... 2</li>
                  {expanded.minedDiamondoutlet && (
                    <ul className="layer3">
                      <li onClick={() => toggleLayer("fullCertificationoutlet")}>Full Certification ................................... 3</li>
                      {expanded.fullCertificationoutlet && (
                        <ul>
                          <li>Bridal REG ...................................... 6</li>
                          <li>Bridal Solitaire ................................ 7</li>
                        </ul>
                      )}
                      <li>Minimum Certification ......................... 10</li>
                    </ul>
                  )}
                </ul>
              </>
            )}

          {openCategory === "zalesoutlet" && (
              <>
                <li style={{ cursor: "pointer",  }} onClick={() => toggleTopLevel(null)}>Zales Outlet ......................................................... 85</li>
                <ul className="layer2">
                  <li onClick={() => toggleLayer("minedDiamondoutlet")}>Natural Diamond ........................................ 86</li>
                  {expanded.minedDiamondoutlet && (
                    <ul className="layer3">
                      <li onClick={() => toggleLayer("fullCertificationoutlet")}>Full Certification .................................. 87</li>
                      {expanded.fullCertificationoutlet && (
                        <ul>
                          <li>Bridal REG ...................................... 6</li>
                          <li>Bridal Solitaire ................................ 7</li>
                        </ul>
                      )}
                      <li>Minimum Certification ......................... 10</li>
                    </ul>
                  )}
                </ul>
              </>
            )}

            
            

            {/* top-level category as a header */}
            {["Jared", "jaredvault", "peoples", "zales"].includes(openCategory) && (
              <li style={{ cursor: "pointer" }} onClick={() => toggleTopLevel(null)}>
                {openCategory.charAt(0) + openCategory.slice(1)}
                ...................................................................
              </li>
            )}
          </ul>
        </div>
        <div className="page-footer">{props.footer}</div>
      </div>
    </div>
  )
})

export default TableOfContents
