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
                <li style={{ cursor: "pointer" }} onClick={() => toggleTopLevel("jared")}>
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
                    <ul className="layer3">
                      <li onClick={() => toggleLayer("fullCertification")}>Full Certification ................................... 3</li>
                      {expanded.fullCertification && (
                        <ul>
                          <li>Bridal REG ...................................... 6</li>
                          <li>Bridal Solitaire ................................ 7</li>
                        </ul>
                      )}
                      <li>Minimum Certification ......................... 10</li>
                    </ul>
                  )}
                  <li onClick={() => toggleLayer("lcd")}>Lab Created Diamond ................................. 11</li>
                  {expanded.lcd && (
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
                <li style={{ cursor: "pointer" }} onClick={() => toggleTopLevel(null)}>KAY Outlet ........................................................ 13</li>
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

            {/* top-level category as a header */}
            {["jared", "jaredvault", "peoples", "zales", "zalesoutlet"].includes(openCategory) && (
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
