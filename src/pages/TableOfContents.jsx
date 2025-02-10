import React, { useState } from "react"
import "../styles/page.css"
import "../styles/toc.css"
import uparrow from '../../public/assets/uparrow.png'
import uparrow2 from '../../public/assets/up.png'

const TableOfContents = React.forwardRef((props, ref) => {
  const [openCategory, setOpenCategory] = useState(null)
  const [expanded, setExpanded] = useState({})
  

  const toggleTopLevel = (category) => {
    setOpenCategory((prev) => (prev === category ? null : category))
    closeEverySubHeader()
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
        ["gemstone"] : false,
        ["brands"] : false,
      }));

      
    }

    if (layer === "gemstone") {
      setExpanded((prev) => ({
        ...prev,
        ["lcd"]: false,
        ["minedDiamond"] : false,
        ["brands"] : false,
      }));

      
    }

    if (layer === "brands") {
      setExpanded((prev) => ({
        ...prev,
        ["lcd"]: false,
        ["gemstone"] : false,
        ["minedDiamond"] : false,
      }));

      
    }

    if (layer === "lcd") {
      setExpanded((prev) => ({
        ...prev,
        ["minedDiamond"]: false,
        ["gemstone"] : false,
        ["brands"] : false,
      }));
    }

    
    
    const turnOffLeoComponents = () => {
      return {
        leo: false,
        leofl: false,
        leoideal: false,
        leop: false,
        leoleg: false,
        neillane: false,
        monique: false,
        mmm: false, 
        naf: false,
        kaysig: false,
      };
    };
  
    // Check if the clicked layer is a Leo component, and if so, turn off all Leo components
    if (
      layer === "leo" ||
      layer === "leofl" ||
      layer === "leoideal" ||
      layer === "leop" ||
      layer === "leoleg" ||
      layer === "neillane" ||
      layer === "monique" ||
      layer === "mmm" ||
      layer === "naf" ||
      layer === "kaysig"
    ) {
      setExpanded((prev) => ({
        ...prev,
        ...turnOffLeoComponents(),
        [layer]: prev[layer],
      }));
    }
    

  }

  const closeEverySubHeader = () => {
    setExpanded((prev) => ({
      ...prev,
      ["gemstone"]: false,
      ["minedDiamond"]: false,
      ["lcd"] : false,
      ["brands"] : false,
    }));
  }

  
  
  

  return (
    <div className="page page-cover page-cover-top" ref={ref} data-density="hard">
      <div className="page-content">
        <h2 className="page-header">
          Welcome To Signet:
          <br /> GSI Catalog
        </h2>
        <div style={{ cursor: "pointer" }}>
          <ul className="layer1" style={{ fontSize: "25px" }}>

            {/* When no category is selected, show all */}
            {openCategory === null && (
              <>
             <li style={{ cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%" }} onClick={() => toggleTopLevel("kay")}>
              <span style={{ flex: 1}}>KAY</span>
              <span style={{ flexGrow: 8, borderBottom: "4px dotted gray", margin: "0 10px" }}></span>
              <button onClick={() => props.functionInput(4)} style={{ all: "unset", marginLeft: "10px", marginRight: "15px" }}>4</button>
            </li>

                {/* <li style={{ cursor: "pointer" }} onClick={() => toggleTopLevel("kayoutlet")}>
                  KAY Outlet ........................................................ 20
                </li>
                <li style={{ cursor: "pointer" }} onClick={() => toggleTopLevel("jared")}>
                  Jared.................................................................... 32
                </li>
                <li style={{ cursor: "pointer" }} onClick={() => toggleTopLevel("jaredvault")}>
                  Jared Vault .......................................................... 44
                </li>
                <li style={{ cursor: "pointer" }} onClick={() => toggleTopLevel("peoples")}>
                  Peoples ............................................................... 51
                </li>
                <li style={{ cursor: "pointer" }} onClick={() => toggleTopLevel("zales")}>
                  Zales ................................................................... 64
                </li>
                <li style={{ cursor: "pointer" }} onClick={() => toggleTopLevel("zalesoutlet")}>
                  Zales Outlet ........................................................ 83
                </li> */}
              </>
            )}

            {openCategory === "kay" && (
              <>
                <li style={{ cursor: "pointer" }} onClick={() => toggleTopLevel(null)}>KAY  <img src={uparrow2} width="15px" height="15px"/></li>
                <ul className="layer2">
                  <li onClick={() => toggleLayer("minedDiamond")}>Natural Diamond</li>
                  {expanded.minedDiamond && (
                   <ul>
{/*                         
                   <li>21 - Bridal Regular ................................. <button onClick={() => props.functionInput(6)} style={{all: 'unset'}}>6</button></li>
                   <li>22 - Bridal Solitaire ................................ <button onClick={() => props.functionInput(8)} style={{all: 'unset'}}>8</button></li>
                   <li>23 - 3 Stone Styles ............................... <button onClick={() => props.functionInput(10)} style={{all: 'unset'}}>10</button></li>
                   <li>25 - Solitaire Studs ............................... <button onClick={() => props.functionInput(12)} style={{all: 'unset'}}>12</button></li>
                   <li>26 - Solitaire Pendants ......................... <button onClick={() => props.functionInput(14)} style={{all: 'unset'}}>14</button></li>
                   <li>34 - Minimum Anniversary ................... <button onClick={() => props.functionInput(16)} style={{all: 'unset'}}>16</button></li>
                   <li>35 - Minimum Fashion ......................... <button onClick={() => props.functionInput(18)} style={{all: 'unset'}}>18</button></li>
                    */}

<li style={{ cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%", display: 'flex', alignItems: 'center', whiteSpace: 'nowrap'}}>
  <span style={{ flex: 1}}>21 - Bridal Regular</span>
  <span style={{ flexGrow: 20, borderBottom: "4px dotted gray", margin: "0 10px" }}></span>
  <button onClick={() => props.functionInput(6)} style={{ all: "unset", marginLeft: "10px", marginRight: "15px" }}>6</button>
</li>

<li style={{ cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%",display: 'flex', alignItems: 'center', whiteSpace: 'nowrap' }}>
  <span style={{ flex: 1}}>22 - Bridal Solitaire</span>
  <span style={{ flexGrow: 20, borderBottom: "4px dotted gray", margin: "0 10px" }}></span>
  <button onClick={() => props.functionInput(8)} style={{ all: "unset", marginLeft: "10px", marginRight: "15px" }}>8</button>
</li>

<li style={{ cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%",display: 'flex', alignItems: 'center', whiteSpace: 'nowrap' }}>
  <span style={{ flex: 1}}>23 - 3 Stone Styles</span>
  <span style={{ flexGrow: 20, borderBottom: "4px dotted gray", margin: "0 10px" }}></span>
  <button onClick={() => props.functionInput(10)} style={{ all: "unset", marginLeft: "10px", marginRight: "15px" }}>10</button>
</li>

{/* <li>
  <span style={{ flex: 1}}>24 - 2 Stone Styles</span>
  <span style={{ flexGrow: 20, borderBottom: "4px dotted gray", margin: "0 10px" }}></span>
  <button onClick={() => props.functionInput(12)} style={{ all: "unset", marginLeft: "10px", marginRight: "15px" }}></button>
</li> */}

<li style={{ cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%",display: 'flex', alignItems: 'center', whiteSpace: 'nowrap' }}>
  <span style={{ flex: 1}}>25 - Solitaire Studs</span>
  <span style={{ flexGrow: 20, borderBottom: "4px dotted gray", margin: "0 10px" }}></span>
  <button onClick={() => props.functionInput(12)} style={{ all: "unset", marginLeft: "10px", marginRight: "15px" }}>12</button>
</li>

<li style={{ cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%",display: 'flex', alignItems: 'center', whiteSpace: 'nowrap' }}>
  <span style={{ flex: 1}}>26 - Solitaire Pendants</span>
  <span style={{ flexGrow: 20, borderBottom: "4px dotted gray", margin: "0 10px" }}></span>
  <button onClick={() => props.functionInput(14)} style={{ all: "unset", marginLeft: "10px", marginRight: "15px" }}>14</button>
</li>

<li style={{ cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%",display: 'flex', alignItems: 'center', whiteSpace: 'nowrap' }}>
  <span style={{ flex: 1}}>34 - Minimum Anniversary</span>
  <span style={{ flexGrow: 20, borderBottom: "4px dotted gray", margin: "0 10px" }}></span>
  <button onClick={() => props.functionInput(16)} style={{ all: "unset", marginLeft: "10px", marginRight: "15px" }}>16</button>
</li>

<li style={{ cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%",display: 'flex', alignItems: 'center', whiteSpace: 'nowrap' }}>
  <span style={{ flex: 1}}>35 - Minimum Fashion</span>
  <span style={{ flexGrow: 20, borderBottom: "4px dotted gray", margin: "0 10px" }}></span>
  <button onClick={() => props.functionInput(18)} style={{ all: "unset", marginLeft: "10px", marginRight: "15px" }}>18</button>
</li>

                   
                  
               </ul>
                  )}
                  <li onClick={() => toggleLayer("lcd")}>Lab Created Diamond</li>
                  {expanded.lcd && (
                    <ul>
                    {/* <li>21 - Bridal Regular .................................. <button onClick={() => props.functionInput(10)} style={{all: 'unset'}}>10</button></li>
                    <li>23 - 3 Stone Styles .............................. <button onClick={() => props.functionInput(11)} style={{all: 'unset'}}>11</button></li>
                    <li>24 - 2 Stone Styles .............................. <button onClick={() => props.functionInput(12)} style={{all: 'unset'}}>12</button></li>
                    <li>25 - Solitaire Studs | Pendants ............. <button onClick={() => props.functionInput(13)} style={{all: 'unset'}}>13</button></li>
                    <li>31 - Bridal CTR-CTW ......................... <button onClick={() => props.functionInput(14)} style={{all: 'unset'}}>14</button></li>
                    <li>33 - Solitaire Studs | Pendants ............. <button onClick={() => props.functionInput(15)} style={{all: 'unset'}}>15</button></li>
                    <li>34 - Anniversary | Fashion ................... <button onClick={() => props.functionInput(16)} style={{all: 'unset'}}>16</button></li>
                    
                    */}
                   
                   {/* <li>21 - Bridal Regular ................................ <button onClick={() => props.functionInput(22)} style={{all: 'unset'}}>22</button></li>
                   <li>22 - Bridal Solitaire ............................... <button onClick={() => props.functionInput(24)} style={{all: 'unset'}}>24</button></li>
                   <li>23 - 3 Stone Styles ................................ <button onClick={() => props.functionInput(26)} style={{all: 'unset'}}>26</button></li>
                   <li>24 - 2 Stone Styles ................................ <button onClick={() => props.functionInput(28)} style={{all: 'unset'}}>28</button></li>
                   <li>25 - Solitaire Studs ................................ <button onClick={() => props.functionInput(30)} style={{all: 'unset'}}>30</button></li>
                   <li>26 - Solitaire Pendants .......................... <button onClick={() => props.functionInput(32)} style={{all: 'unset'}}>32</button></li>
                   <li>31 - Minimum Bridal .............................. <button onClick={() => props.functionInput(34)} style={{all: 'unset'}}>34</button></li>
                   <li>32 - Minimum Bridal Solitaire ............... <button onClick={() => props.functionInput(36)} style={{all: 'unset'}}>36</button></li>
                   <li>33 - Solitaire Studs ................................ <button onClick={() => props.functionInput(38)} style={{all: 'unset'}}>38</button></li>
                   <li>34 - Anniversary ..................................... <button onClick={() => props.functionInput(40)} style={{all: 'unset'}}>40</button></li>
                   <li>35 - Fahsion ............................................ <button onClick={() => props.functionInput(42)} style={{all: 'unset'}}>42</button></li> */}

                   {/* <li>27 - Anniversary .................. <button onClick={() => props.functionInput(8)} style={{all: 'unset'}}>8</button></li>
                   <li>28 - Fashion .................. <button onClick={() => props.functionInput(8)} style={{all: 'unset'}}>8</button></li>
                   <li>29 - Color Diamond .................. <button onClick={() => props.functionInput(8)} style={{all: 'unset'}}>8</button></li>
                   <li>31 - Minimum Bridal Stone .................. <button onClick={() => props.functionInput(8)} style={{all: 'unset'}}>8</button></li>
                   <li>32 - Minimum Bridal Solitaire .................. <button onClick={() => props.functionInput(8)} style={{all: 'unset'}}>8</button></li>
                   <li>33 - Minimum Studs | Solitaire Pendants ..... <button onClick={() => props.functionInput(8)} style={{all: 'unset'}}>8</button></li>
                   <li>34 - Minimum Anniversary .................. <button onClick={() => props.functionInput(8)} style={{all: 'unset'}}>8</button></li>
                   <li>35 - Minimum Fashion .................. <button onClick={() => props.functionInput(8)} style={{all: 'unset'}}>8</button></li>
                   <li>36 - Minimum Mens .................. <button onClick={() => props.functionInput(8)} style={{all: 'unset'}}>8</button></li> */}

<li style={{ cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%", display: 'flex', alignItems: 'center', whiteSpace: 'nowrap' }}>
  <span style={{ flex: 1 }}>35 - Minimum Fashion</span>
  <span style={{ flexGrow: 20, borderBottom: "4px dotted gray", margin: "0 10px" }}></span>
  <button onClick={() => props.functionInput(18)} style={{ all: "unset", marginLeft: "10px", marginRight: "15px" }}>18</button>
</li>

<li style={{ display: 'flex', alignItems: 'center', whiteSpace: 'nowrap' }}>
  <span style={{ flex: 1 }}>21 - Bridal Regular</span>
  <span style={{ flexGrow: 20, borderBottom: "4px dotted gray", margin: "0 10px" }}></span>
  <button onClick={() => props.functionInput(22)} style={{ all: 'unset', marginLeft: '10px', marginRight: '15px' }}>22</button>
</li>

<li style={{ display: 'flex', alignItems: 'center', whiteSpace: 'nowrap' }}>
  <span style={{ flex: 1 }}>22 - Bridal Solitaire</span>
  <span style={{ flexGrow: 20, borderBottom: "4px dotted gray", margin: "0 10px" }}></span>
  <button onClick={() => props.functionInput(24)} style={{ all: 'unset', marginLeft: '10px', marginRight: '15px' }}>24</button>
</li>

<li style={{ display: 'flex', alignItems: 'center', whiteSpace: 'nowrap' }}>
  <span style={{ flex: 1 }}>23 - 3 Stone Styles</span>
  <span style={{ flexGrow: 20, borderBottom: "4px dotted gray", margin: "0 10px" }}></span>
  <button onClick={() => props.functionInput(26)} style={{ all: 'unset', marginLeft: '10px', marginRight: '15px' }}>26</button>
</li>

<li style={{ display: 'flex', alignItems: 'center', whiteSpace: 'nowrap' }}>
  <span style={{ flex: 1 }}>24 - 2 Stone Styles</span>
  <span style={{ flexGrow: 20, borderBottom: "4px dotted gray", margin: "0 10px" }}></span>
  <button onClick={() => props.functionInput(28)} style={{ all: 'unset', marginLeft: '10px', marginRight: '15px' }}>28</button>
</li>

<li style={{ display: 'flex', alignItems: 'center', whiteSpace: 'nowrap' }}>
  <span style={{ flex: 1 }}>25 - Solitaire Studs</span>
  <span style={{ flexGrow: 20, borderBottom: "4px dotted gray", margin: "0 10px" }}></span>
  <button onClick={() => props.functionInput(30)} style={{ all: 'unset', marginLeft: '10px', marginRight: '15px' }}>30</button>
</li>

<li style={{ display: 'flex', alignItems: 'center', whiteSpace: 'nowrap' }}>
  <span style={{ flex: 1 }}>26 - Solitaire Pendants</span>
  <span style={{ flexGrow: 20, borderBottom: "4px dotted gray", margin: "0 10px" }}></span>
  <button onClick={() => props.functionInput(32)} style={{ all: 'unset', marginLeft: '10px', marginRight: '15px' }}>32</button>
</li>

<li style={{ display: 'flex', alignItems: 'center', whiteSpace: 'nowrap' }}>
  <span style={{ flex: 1 }}>31 - Minimum Bridal</span>
  <span style={{ flexGrow: 20, borderBottom: "4px dotted gray", margin: "0 10px" }}></span>
  <button onClick={() => props.functionInput(34)} style={{ all: 'unset', marginLeft: '10px', marginRight: '15px' }}>34</button>
</li>

<li style={{ display: 'flex', alignItems: 'center', whiteSpace: 'nowrap' }}>
  <span style={{ flex: 1 }}>32 - Minimum Bridal Solitaire</span>
  <span style={{ flexGrow: 20, borderBottom: "4px dotted gray", margin: "0 10px" }}></span>
  <button onClick={() => props.functionInput(36)} style={{ all: 'unset', marginLeft: '10px', marginRight: '15px' }}>36</button>
</li>

<li style={{ display: 'flex', alignItems: 'center', whiteSpace: 'nowrap' }}>
  <span style={{ flex: 1 }}>33 - Solitaire Studs</span>
  <span style={{ flexGrow: 20, borderBottom: "4px dotted gray", margin: "0 10px" }}></span>
  <button onClick={() => props.functionInput(38)} style={{ all: 'unset', marginLeft: '10px', marginRight: '15px' }}>38</button>
</li>

<li style={{ display: 'flex', alignItems: 'center', whiteSpace: 'nowrap' }}>
  <span style={{ flex: 1 }}>34 - Anniversary</span>
  <span style={{ flexGrow: 20, borderBottom: "4px dotted gray", margin: "0 10px" }}></span>
  <button onClick={() => props.functionInput(40)} style={{ all: 'unset', marginLeft: '10px', marginRight: '15px' }}>40</button>
</li>

<li style={{ display: 'flex', alignItems: 'center', whiteSpace: 'nowrap' }}>
  <span style={{ flex: 1 }}>35 - Fashion</span>
  <span style={{ flexGrow: 20, borderBottom: "4px dotted gray", margin: "0 10px" }}></span>
  <button onClick={() => props.functionInput(42)} style={{ all: 'unset', marginLeft: '10px', marginRight: '15px' }}>42</button>
</li>





                  </ul>
                  )}
                  

                  <li onClick={() => toggleLayer("gemstone")}>Ruby</li>
                  {expanded.gemstone && (
                    <ul>
                   

                      <li style={{ display: 'flex', alignItems: 'center', whiteSpace: 'nowrap' }}>
                        <span style={{ flex: 1 }}>51 - Ruby Only</span>
                        <span style={{ flexGrow: 20, borderBottom: "4px dotted gray", margin: "0 10px" }}></span>
                        <button onClick={() => props.functionInput(46)} style={{ all: 'unset', marginLeft: '10px', marginRight: '15px' }}>46</button>
                      </li>

                      <li style={{ display: 'flex', alignItems: 'center', whiteSpace: 'nowrap' }}>
                        <span style={{ flex: 1 }}>52 - Ruby & Natural Diamond</span>
                        <span style={{ flexGrow: 20, borderBottom: "4px dotted gray", margin: "0 10px" }}></span>
                        <button onClick={() => props.functionInput(47)} style={{ all: 'unset', marginLeft: '10px', marginRight: '15px' }}>47</button>
                      </li>

                  </ul>
                  )}

<li onClick={() => toggleLayer("brands")}>Brands / Collections</li>
                  {expanded.brands && (
                    <ul className="layer 3">

                                <li onClick={() => toggleLayer("leo")}>The Leo Diamond</li>
                                {expanded.leo && (
                                  <ul className="layer 4">
                                  <li onClick={() => toggleLayer("naturalleo")}>Natural</li>
                                    {expanded.naturalleo && (
                                      <ul className="layer 5">
                                      
                                    </ul>
                                    )}
                                </ul>
                                )}

                                <li onClick={() => toggleLayer("leofl")}>Leo First Light</li>
                                {expanded.leofl && (
                                  <ul className="layer 4">
                                  <li onClick={() => toggleLayer("naturalleofl")}>Natural</li>
                                    {expanded.naturalleofl && (
                                      <ul className="layer 5">
                                      
                                    </ul>
                                    )}
                                </ul>
                                )}

<li onClick={() => toggleLayer("leoideal")}>Leo Ideal</li>
                                {expanded.leoideal && (
                                  <ul className="layer 4">
                                      <li onClick={() => toggleLayer("naturalleoideal")}>Natural</li>
                                    {expanded.naturalleoideal && (
                                      <ul className="layer 5">
                                      
                                    </ul>
                                    )}
                                </ul>
                                )}

<li onClick={() => toggleLayer("leop")}>Leo Prisma</li>
                                {expanded.leop && (
                                  <ul className="layer 4">
                                  <li onClick={() => toggleLayer("naturalleoprisma")}>Natural</li>
                                    {expanded.naturalleoprisma && (
                                      <ul className="layer 5">
                                      
                                    </ul>
                                    )}
                                </ul>
                                )}

<li onClick={() => toggleLayer("leoleg")}>Leo Legacy</li>
                                {expanded.leoleg && (
                                  <ul className="layer 4">
                                  <li onClick={() => toggleLayer("naturalleolegacy")}>Lab Created Diamond</li>
                                    {expanded.naturalleolegacy && (
                                      <ul className="layer 5">
                                      
                                    </ul>
                                    )}

                                    
                                </ul>
                                )}

<li onClick={() => toggleLayer("neillane")}>Neil Lane</li>
                                {expanded.neillane && (
                                  <ul className="layer 4">
                                  <li onClick={() => toggleLayer("neillanenat")}>Natural</li>
                                    {expanded.neillanenat && (
                                      <ul className="layer 5">
                                      
                                    </ul>
                                    )}
                                    <li onClick={() => toggleLayer("neillanelcd")}>Lab Created Diamond</li>
                                    {expanded.neillanelcd && (
                                      <ul className="layer 5">
                                      
                                    </ul>
                                    )}
                                    <li onClick={() => toggleLayer("neillaneruby")}>Ruby</li>
                                    {expanded.neillaneruby && (
                                      <ul className="layer 5">
                                      
                                    </ul>
                                    )}
                                </ul>
                                )}

<li onClick={() => toggleLayer("monique")}>Monique Lhuillier Bliss</li>
                                {expanded.monique && (
                                  <ul className="monique">
                                  <li onClick={() => toggleLayer("mnat")}>Natural</li>
                                    {expanded.mnat && (
                                      <ul className="layer 5">
                                      
                                    </ul>
                                    )}
                                    <li onClick={() => toggleLayer("mlcd")}>Lab Created Diamond</li>
                                    {expanded.mlcd && (
                                      <ul className="layer 5">
                                      
                                    </ul>
                                    )}
                                </ul>
                                )}

<li onClick={() => toggleLayer("mmm")}>Memories Moments Magic</li>
                                {expanded.mmm && (
                                  <ul className="layer 4">
                                 
                                    <li onClick={() => toggleLayer("mmmlcd")}>Lab Created Diamond</li>
                                    {expanded.mmmlcd && (
                                      <ul className="layer 5">
                                      
                                    </ul>
                                    )}
                                </ul>
                                )}

<li onClick={() => toggleLayer("naf")}>Now and Forever</li>
                                {expanded.naf && (
                                  <ul className="layer 4">
                                  <li onClick={() => toggleLayer("nafnat")}>Natural</li>
                                    {expanded.nafnat && (
                                      <ul className="layer 5">
                                      
                                    </ul>
                                    )}
                                    <li onClick={() => toggleLayer("naflcd")}>Lab Created Diamond</li>
                                    {expanded.naflcd && (
                                      <ul className="layer 5">
                                      
                                    </ul>
                                    )}
                                </ul>
                                )}

<li onClick={() => toggleLayer("kaysig")}>Kay Signature</li>
                                {expanded.kaysig && (
                                  <ul className="layer 4">
                                  <li onClick={() => toggleLayer("kaysiglcd")}>Lab Created Diamond</li>
                                    {expanded.kaysiglcd && (
                                      <ul className="layer 5">
                                      
                                    </ul>
                                    )}
                                </ul>
                                )}
{/* 
<li onClick={() => toggleLayer("levian")}>Levian</li>
                                {expanded.levian && (
                                  <ul className="layer 4">
                                  
                                </ul>
                                )} */}

                                
                                

                    
                   
                    </ul>
                  )}


                </ul>
              </>
            )}
              {/* Kay outlet start here and others */}
              {/* {openCategory === "kayoutlet" && (
              <>
                <li style={{ cursor: "pointer" }} onClick={() => toggleTopLevel(null)}>KAY Outlet <img src={uparrow2} width="15px" height="15px"/></li>
                <ul className="layer2">
                  <li onClick={() => toggleLayer("minedDiamond")}>Natural Diamond</li>
                  {expanded.minedDiamond && (
                   <ul>
                        
                   <li>21 - Bridal REG .............................. <button onClick={() => props.functionInput(21)} style={{all: 'unset'}}>21</button></li>
                   <li>22 - Bridal Solitaire ......................... <button onClick={() => props.functionInput(22)} style={{all: 'unset'}}>22</button></li>
                   <li>25 - Solitaire Studs | Pendants ......... <button onClick={() => props.functionInput(23)} style={{all: 'unset'}}>23</button></li>
                   <li>34 - Anniversary | Fashion ............... <button onClick={() => props.functionInput(24)} style={{all: 'unset'}}>24</button></li>

                   
                  
               </ul>
                  )}
                  <li onClick={() => toggleLayer("lcd")}>Lab Created Diamond</li>
                  {expanded.lcd && (
                    <ul>
                    <li>21 - Bridal REG ............................... <button onClick={() => props.functionInput(26)} style={{all: 'unset'}}>26</button></li>
                    <li>25 - Solitaire Studs | Pendants .......... <button onClick={() => props.functionInput(8)} style={{all: 'unset'}}>27</button></li>
                    <li>34 - Anniversary | Fashion ................ <button onClick={() => props.functionInput(28)} style={{all: 'unset'}}>28</button></li>
                  </ul>
                  )}
                  

                  <li onClick={() => toggleLayer("gemstone")}>Ruby</li>
                  {expanded.gemstone && (
                    <ul>
                    <li>51 - Ruby Only ................................... <button onClick={() => props.functionInput(30)} style={{all: 'unset'}}>30</button></li>
                    <li>52 - Ruby & Natural Diamond ........... <button onClick={() => props.functionInput(31)} style={{all: 'unset'}}>32</button></li>
                  </ul>
                  )}


                </ul>
              </>
            )}

{openCategory === "jared" && (
              <>
                <li style={{ cursor: "pointer" }} onClick={() => toggleTopLevel(null)}>Jared <img src={uparrow2} width="15px" height="15px"/></li>
                <ul className="layer2">
                  <li onClick={() => toggleLayer("minedDiamond")}>Natural Diamond</li>
                  {expanded.minedDiamond && (
                   <ul>
                        
                   <li>21 - Bridal REG ................................... <button onClick={() => props.functionInput(33)} style={{all: 'unset'}}>33</button></li>
                   <li>22 - Bridal Solitaire .............................. <button onClick={() => props.functionInput(34)} style={{all: 'unset'}}>34</button></li>
                   <li>25 - Solitaire Studs | Pendants .............. <button onClick={() => props.functionInput(35)} style={{all: 'unset'}}>35</button></li>
                   <li>34 - Anniversary | Fashion .................... <button onClick={() => props.functionInput(36)} style={{all: 'unset'}}>36</button></li>

                   
                  
               </ul>
                  )}
                  <li onClick={() => toggleLayer("lcd")}>Lab Created Diamond</li>
                  {expanded.lcd && (
                    <ul>
                    <li>21 - Bridal REG .................................. <button onClick={() => props.functionInput(38)} style={{all: 'unset'}}>38</button></li>
                    <li>31 - Bridal CTR-CTW ........................ <button onClick={() => props.functionInput(39)} style={{all: 'unset'}}>39</button></li>
                    <li>34 - Anniversary | Fashion .................. <button onClick={() => props.functionInput(8)} style={{all: 'unset'}}>40</button></li>
                   
                  </ul>
                  )}
                  

                  <li onClick={() => toggleLayer("gemstone")}>Ruby</li>
                  {expanded.gemstone && (
                    <ul>
                    <li>51 - Ruby Only .................................... <button onClick={() => props.functionInput(42)} style={{all: 'unset'}}>42</button></li>
                    <li>52 - Ruby & Natural Diamond ............ <button onClick={() => props.functionInput(43)} style={{all: 'unset'}}>43</button></li>
                  </ul>
                  )}


                </ul>
              </>
            )}

              {openCategory === "jaredvault" && (
              <>
                <li style={{ cursor: "pointer" }} onClick={() => toggleTopLevel(null)}>Jared Vault <img src={uparrow2} width="15px" height="15px"/></li>
                <ul className="layer2">
                  <li onClick={() => toggleLayer("minedDiamond")}>Natural Diamond</li>
                  {expanded.minedDiamond && (
                   <ul>
                    <li>25 - Solitaire Studs | Pendants .............. <button onClick={() => props.functionInput(45)} style={{all: 'unset'}}>45</button></li>
                  </ul>
                  )}
                  <li onClick={() => toggleLayer("lcd")}>Lab Created Diamond</li>
                  {expanded.lcd && (
                    <ul>
                    <li>21 - Bridal REG .................................... <button onClick={() => props.functionInput(47)} style={{all: 'unset'}}>47</button></li>
                    </ul>
                  )}
                  

                  <li onClick={() => toggleLayer("gemstone")}>Ruby</li>
                  {expanded.gemstone && (
                    <ul>
                    <li>51 - Ruby Only ...................................... <button onClick={() => props.functionInput(49)} style={{all: 'unset'}}>49</button></li>
                    <li>52 - Ruby & Natural Diamond .............. <button onClick={() => props.functionInput(50)} style={{all: 'unset'}}>50</button></li>
                  </ul>
                  )}


                </ul>
              </>
            )}

{openCategory === "peoples" && (
              <>
                <li style={{ cursor: "pointer" }} onClick={() => toggleTopLevel(null)}>Peoples <img src={uparrow2} width="15px" height="15px"/></li>
                <ul className="layer2">
                  <li onClick={() => toggleLayer("minedDiamond")}>Natural Diamond</li>
                  {expanded.minedDiamond && (
                   <ul>
                        
                   <li>21 - Bridal REG ................................... <button onClick={() => props.functionInput(52)} style={{all: 'unset'}}>52</button></li>
                   <li>22 - Bridal Solitaire .............................. <button onClick={() => props.functionInput(53)} style={{all: 'unset'}}>53</button></li>
                   <li>23 - 3 Stone Styles ................................ <button onClick={() => props.functionInput(54)} style={{all: 'unset'}}>54</button></li>
                   <li>25 - Solitaire Studs | Pendants .............. <button onClick={() => props.functionInput(55)} style={{all: 'unset'}}>55</button></li>
                   <li>26 - Anniversary ................................... <button onClick={() => props.functionInput(56)} style={{all: 'unset'}}>56</button></li>
                   <li>27 - Fashion .......................................... <button onClick={() => props.functionInput(57)} style={{all: 'unset'}}>57</button></li>

                   
                  
               </ul>
                  )}
                  <li onClick={() => toggleLayer("lcd")}>Lab Created Diamond</li>
                  {expanded.lcd && (
                    <ul>
                    <li>31 - Bridal CTR-CTW ......................... <button onClick={() => props.functionInput(59)} style={{all: 'unset'}}>59</button></li>
                    <li>34 - Anniversary | Fashion ................... <button onClick={() => props.functionInput(60)} style={{all: 'unset'}}>60</button></li>
                  </ul>
                  )}
                  

                  <li onClick={() => toggleLayer("gemstone")}>Ruby</li>
                  {expanded.gemstone && (
                    <ul>
                    <li>51 - Ruby Only ...................................... <button onClick={() => props.functionInput(61)} style={{all: 'unset'}}>62</button></li>
                    <li>52 - Ruby & Natural Diamond .............. <button onClick={() => props.functionInput(62)} style={{all: 'unset'}}>63</button></li>
                  </ul>
                  )}


                </ul>
              </>
            )}

{openCategory === "zales" && (
              <>
                <li style={{ cursor: "pointer" }} onClick={() => toggleTopLevel(null)}>Zales <img src={uparrow2} width="15px" height="15px"/></li>
                <ul className="layer2">
                  <li onClick={() => toggleLayer("minedDiamond")}>Natural Diamond</li>
                  {expanded.minedDiamond && (
                   <ul>
                        
                   <li>21 - Bridal REG .................................. <button onClick={() => props.functionInput(65)} style={{all: 'unset'}}>65</button></li>
                   <li>22 - Bridal Solitaire ............................. <button onClick={() => props.functionInput(66)} style={{all: 'unset'}}>66</button></li>
                   <li>23 - 3 Stone Styles ............................... <button onClick={() => props.functionInput(67)} style={{all: 'unset'}}>67</button></li>
                   <li>25 - Solitaire Studs | Pendants ............. <button onClick={() => props.functionInput(68)} style={{all: 'unset'}}>68</button></li>
                   <li>26 - Anniversary .................................. <button onClick={() => props.functionInput(69)} style={{all: 'unset'}}>69</button></li>
                   <li>27 - Fashion ......................................... <button onClick={() => props.functionInput(70)} style={{all: 'unset'}}>70</button></li>
                   <li>28 - Color Diamond ............................. <button onClick={() => props.functionInput(71)} style={{all: 'unset'}}>71</button></li>

                   
                  
               </ul>
                  )}
                  <li onClick={() => toggleLayer("lcd")}>Lab Created Diamond</li>
                  {expanded.lcd && (
                    <ul>
                   <li>21 - Bridal REG ................................... <button onClick={() => props.functionInput(73)} style={{all: 'unset'}}>73</button></li>
                   <li>22 - Bridal Solitaire .............................. <button onClick={() => props.functionInput(74)} style={{all: 'unset'}}>74</button></li>
                   <li>23 - 3 Stone Styles ................................ <button onClick={() => props.functionInput(75)} style={{all: 'unset'}}>75</button></li>
                   <li>24 - 2 Stone Styles ................................ <button onClick={() => props.functionInput(76)} style={{all: 'unset'}}>76</button></li>
                   <li>25 - Solitaire Studs | Pendants .............. <button onClick={() => props.functionInput(77)} style={{all: 'unset'}}>77</button></li>
                   <li>31 - Bridal CTR-CTW .......................... <button onClick={() => props.functionInput(78)} style={{all: 'unset'}}>78</button></li>
                   <li>34 - Anniversary | Fashion .................... <button onClick={() => props.functionInput(79)} style={{all: 'unset'}}>79</button></li>

                  </ul>
                  )}

                  

                  
                  

                  <li onClick={() => toggleLayer("gemstone")}>Ruby</li>
                  {expanded.gemstone && (
                    <ul>
                    <li>51 - Ruby Only .................................... <button onClick={() => props.functionInput(81)} style={{all: 'unset'}}>81</button></li>
                    <li>52 - Ruby & Natural Diamond ............ <button onClick={() => props.functionInput(82)} style={{all: 'unset'}}>82</button></li>
                  </ul>
                  )}


                </ul>
              </>
            )}

{openCategory === "zalesoutlet" && (
              <>
                <li style={{ cursor: "pointer" }} onClick={() => toggleTopLevel(null)}>Zales Outlet <img src={uparrow2} width="15px" height="15px"/></li>
                <ul className="layer2">
                  <li onClick={() => toggleLayer("minedDiamond")}>Natural Diamond</li>
                  {expanded.minedDiamond && (
                   <ul>
                   <li>22 - Bridal Solitaire ............................... <button onClick={() => props.functionInput(84)} style={{all: 'unset'}}>84</button></li>
                   <li>25 - Solitaire Studs | Pendants ............... <button onClick={() => props.functionInput(84)} style={{all: 'unset'}}>85</button></li>
               </ul>
                  )}
                  <li onClick={() => toggleLayer("lcd")}>Lab Created Diamond</li>
                  {expanded.lcd && (
                    <ul>
                    <li>21 - Bridal REG .................................... <button onClick={() => props.functionInput(87)} style={{all: 'unset'}}>87</button></li>
                  </ul>
                  )}
                  

                  <li onClick={() => toggleLayer("gemstone")}>Ruby</li>
                  {expanded.gemstone && (
                    <ul>
                    <li>51 - Ruby Only ..................................... <button onClick={() => props.functionInput(89)} style={{all: 'unset'}}>89</button></li>
                    <li>52 - Ruby & Natural Diamond ............. <button onClick={() => props.functionInput(90)} style={{all: 'unset'}}>90</button></li>
                  </ul>
                  )}


                </ul>
              </>
            )} */}


            

            

            
            
            

            {/* top-level category as a header */}
            {/* {["Jared", "jaredvault", "peoples", "zales"].includes(openCategory) && (
              <li style={{ cursor: "pointer" }} onClick={() => toggleTopLevel(null)}>
                {openCategory.charAt(0) + openCategory.slice(1)}
                ...................................................................
              </li>
            )} */}
          </ul>
        </div>
        {/* <div className="page-footer">{props.footer}</div> */}
      </div>
    </div>
  )
})

export default TableOfContents
