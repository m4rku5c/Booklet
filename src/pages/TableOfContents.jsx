import React, { useState } from "react"
import "../styles/page.css"

const handleTest = () => {
  console.log("clickable");
};

const TableOfContents = React.forwardRef((props, ref) => {
  const [expanded, setExpanded] = useState({
    kay: false,
    minedDiamond: false,
    lcd: false,
    fullCertification: false,
    fullCertification2: false,

    kayoutlet: false,
    minedDiamondoutlet: false,
    lcdoutlet: false,
    fullCertificationoutlet: false,
    fullCertification2outlet: false,
  })

  const [isKayOpen, setIsKayOpen] = useState(false)
  const [isKayOutletOpen, setIsKayOutletOpen] = useState(false)

  // Toggle visibility for a specific layer
  const toggleLayer = (layer) => {
    setExpanded((prev) => ({
      ...prev,
      [layer]: !prev[layer], // Toggle the specific layer
    }))

    if (layer == "minedDiamond") {
      setExpanded((prev) => ({
        ...prev,
        ["lcd"]: false, //un toggle LCD if mined diamonds is displaying
      }))
  
    }

    if (layer == "lcd") { 
      setExpanded((prev) => ({
        ...prev,
        ["minedDiamond"]: false, // Toggle the specific layer
      }))
    }

    if (layer == "kay") {
    setIsKayOpen(!isKayOpen) }

    if (layer == "kayoutlet") {
      setIsKayOutletOpen(!isKayOutletOpen) }

  };



  return (
    <div className="page page-cover page-cover-top" ref={ref} data-density="hard">
      <div className="page-content">
        <h2 className="page-header">
          Welcome To Signet:
          <br /> GSI Catalogue
        </h2>
        <div style={{ position: "absolute", top: 0, left: 0, marginTop: "140px", cursor: 'pointer',}}>
          <ul className="layer1" style={{ fontSize: "25px" }}>
            <li style={{cursor: 'pointer',}} onClick={() => toggleLayer("kay")}>
              KAY ................................................................... 1
            </li>
            {expanded.kay && (
              <ul className="layer2">
                <li onClick={() => toggleLayer("minedDiamond")}>
                  Natural Diamond ......................................... 2
                </li>
                {expanded.minedDiamond && (
                  <ul className="layer3">
                    <li onClick={() => toggleLayer("fullCertification")}>Full Certification ................................... 3</li>
                    {expanded.fullCertification && (
                      <ul>
                        <li>
                          Bridal REG ......................................
                          <button onClick={props.functionInput} style={{ all: "unset" }}>
                            6
                          </button>
                        </li>
                        <li>Bridal Solitaire ................................ 7</li>
                        <li>3 Stone ............................................ 8</li>
                        <li>2 Stone ............................................ 9</li>
                        <li>Sol Stud & Sol Pend ....................... 9</li>
                        <li>Anniversary .................................... 9</li>
                        <li>Fashion ........................................... 9</li>
                        <li>Color Diamond ............................... 9</li>
                        <li>Anniversary Fashion ....................... 9</li>
                      </ul>
                    )}
                    <li>Minimum Certification ......................... 10</li>
                  </ul>
                )}
                
                <li onClick={() => toggleLayer("lcd")}>Lab Created Diamond ................................. 11</li>
                {expanded.lcd && (
                  <ul className="layer3">
                    <li onClick={() => toggleLayer("fullCertification2")}>
                      Full Certification ................................... 3
                    </li>
                    {expanded.fullCertification2 && (
                      <ul>
                        <li>
                          Bridal REG ......................................
                          <button onClick={props.functionInput} style={{ all: "unset" }}>
                            6
                          </button>
                        </li>
                        <li>Bridal Solitaire ................................ 7</li>
                        <li>3 Stone ............................................ 8</li>
                        <li>2 Stone ............................................ 9</li>
                        <li>Sol Stud & Sol Pend ....................... 9</li>
                        <li>Anniversary .................................... 9</li>
                        <li>Fashion ........................................... 9</li>
                        <li>Color Diamond ............................... 9</li>
                        <li>Anniversary Fashion ....................... 9</li>
                      </ul>
                    )}
                    <li>Minimum Certification ......................... 10</li>
                  </ul>
                )}
                <li>Natural Gemstone ....................................... 12</li>
              </ul>
            )}
              {/* /////////////////////////////////////////////////////////////////////////////////////// */}
              <li style={{cursor: 'pointer',}} onClick={() => toggleLayer("kayoutlet")}>KAY Outlet ........................................................ 13</li>
              {expanded.kayoutlet && (
              <ul className="layer2">
                <li onClick={() => toggleLayer("minedDiamondoutlet")}>
                  Natural Diamond ......................................... 2
                </li>
                {expanded.minedDiamondoutlet && (
                  <ul className="layer3">
                    <li onClick={() => toggleLayer("fullCertificationoutlet")}>Full Certification ................................... 3</li>
                    {expanded.fullCertificationoutlet && (
                      <ul>
                        <li>
                          Bridal REG ......................................
                          <button onClick={props.functionInput} style={{ all: "unset" }}>
                            6
                          </button>
                        </li>
                        <li>Bridal Solitaire ................................ 7</li>
                        <li>3 Stone ............................................ 8</li>
                        <li>2 Stone ............................................ 9</li>
                        <li>Sol Stud & Sol Pend ....................... 9</li>
                        <li>Anniversary .................................... 9</li>
                        <li>Fashion ........................................... 9</li>
                        <li>Color Diamond ............................... 9</li>
                        <li>Anniversary Fashion ....................... 9</li>
                      </ul>
                    )}
                    <li>Minimum Certification ......................... 10</li>
                  </ul>
                )}
                
                <li onClick={() => toggleLayer("lcdoutlet")}>Lab Created Diamond ................................. 11</li>
                {expanded.lcdoutlet && (
                  <ul className="layer3">
                    <li onClick={() => toggleLayer("fullCertification2outlet")}>
                      Full Certification ................................... 3
                    </li>
                    {expanded.fullCertification2outlet && (
                      <ul>
                        <li>
                          Bridal REG ......................................
                          <button onClick={props.functionInput} style={{ all: "unset" }}>
                            6
                          </button>
                        </li>
                        <li>Bridal Solitaire ................................ 7</li>
                        <li>3 Stone ............................................ 8</li>
                        <li>2 Stone ............................................ 9</li>
                        <li>Sol Stud & Sol Pend ....................... 9</li>
                        <li>Anniversary .................................... 9</li>
                        <li>Fashion ........................................... 9</li>
                        <li>Color Diamond ............................... 9</li>
                        <li>Anniversary Fashion ....................... 9</li>
                      </ul>
                    )}
                    <li>Minimum Certification ......................... 10</li>
                  </ul>
                )}
                <li>Natural Gemstone ....................................... 12</li>
              </ul>
            )}

              {/* /////////////////////////////////////////////////////////////////////////////////////// */}

              <div className={` ${isKayOpen || isKayOutletOpen ? 'closeOther' : 'openOther'} `}>
              <li>Jared.................................................................... 18</li>
              <li>Jared Vault .......................................................... 25</li>
              <li>Peoples ............................................................... 33</li>
              <li>Zales ................................................................... 45</li>
              <li>ZalesOutlet ......................................................... 85</li>

            </div>
           
            
          </ul>
        </div>
        <div className="page-footer">{props.footer}</div>
      </div>
    </div>
  )
})

export default TableOfContents
