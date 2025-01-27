import React, { useState } from "react"
import "../styles/page.css"

const handleTest = () => {
  console.log("clickable");
};

const TableOfContents = React.forwardRef((props, ref) => {
  const [expanded, setExpanded] = useState({
    kay: false,
    minedDiamond: false,
    fullCertification: false,
  })

  // Toggle visibility for a specific layer
  const toggleLayer = (layer) => {
    setExpanded((prev) => ({
      ...prev,
      [layer]: !prev[layer], // Toggle the specific layer
    }))
  };

  return (
    <div className="page page-cover page-cover-top" ref={ref} data-density="hard">
      <div className="page-content">
        <h2 className="page-header">
          Welcome To Signet:
          <br /> GSI Catalogue
        </h2>
        <div style={{ position: "absolute", top: 0, left: 0, marginTop: "140px" }}>
          <ul className="layer1" style={{ fontSize: "25px" }}>
            <li onClick={() => toggleLayer("kay")}>
              KAY ................................................................... 1
            </li>
            {expanded.kay && (
              <ul className="layer2">
                <li onClick={() => toggleLayer("minedDiamond")}>
                  Mined Diamond ........................................... 50
                </li>
                {expanded.minedDiamond && (
                  <ul className="layer3">
                    <li onClick={() => toggleLayer("fullCertification")}>
                      Full Certification ................................... 55
                    </li>
                    {expanded.fullCertification && (
                      <ul>
                        <li>
                          Bridal w CTR ..................................
                          <button onClick={props.functionInput} style={{ all: "unset" }}>
                            56
                          </button>
                        </li>
                        <li>Solitaire Ring .................................. 57</li>
                        <li>3 Stone ............................................ 58</li>
                        <li>2 Stone ............................................ 59</li>
                      </ul>
                    )}
                    <li>Minimum Certification ......................... 60</li>
                  </ul>
                )}
                <li>Lab Created Diamond ................................. 61</li>
                <li>Natural Ruby ............................................... 73</li>
              </ul>
            )}
            <li>KAY Outlet ........................................................ 9</li>
            <li>Jared.................................................................... 18</li>
            <li>Jared Vault .......................................................... 25</li>
            <li>Peoples ............................................................... 33</li>
            <li>Zales ................................................................... 45</li>
            <li>ZalesOutlet ........................................................ 85</li>
          </ul>
        </div>
        <div className="page-footer">{props.footer}</div>
      </div>
    </div>
  )
})

export default TableOfContents
