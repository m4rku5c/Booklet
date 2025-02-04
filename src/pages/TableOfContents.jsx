import React, { useState } from "react"
import "../styles/page.css"

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
      }));

      
    }

    if (layer === "lcd") {
      setExpanded((prev) => ({
        ...prev,
        ["minedDiamond"]: false,
        ["gemstone"] : false,
      }));
    }

    if (layer === "gemstone") {
      setExpanded((prev) => ({
        ...prev,
        ["minedDiamond"]: false,
        ["lcd"] : false,
      }));
    }
    

  }

  const closeEverySubHeader = () => {
    setExpanded((prev) => ({
      ...prev,
      ["gemstone"]: false,
      ["minedDiamond"]: false,
      ["lcd"] : false,
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
                  KAY ................................................................... 4
                </li>
                <li style={{ cursor: "pointer" }} onClick={() => toggleTopLevel("kayoutlet")}>
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
                </li>
              </>
            )}

            {openCategory === "kay" && (
              <>
                <li style={{ cursor: "pointer" }} onClick={() => toggleTopLevel(null)}>KAY</li>
                <ul className="layer2">
                  <li onClick={() => toggleLayer("minedDiamond")}>Natural Diamond</li>
                  {expanded.minedDiamond && (
                   <ul>
                        
                   <li>21 - Bridal REG ................................. <button onClick={() => props.functionInput(4)} style={{all: 'unset'}}>5</button></li>
                   <li>22 - Bridal Solitaire ............................ <button onClick={() => props.functionInput(6)} style={{all: 'unset'}}>6</button></li>
                   <li>25 - Solitaire Studs | Pendants .............<button onClick={() => props.functionInput(7)} style={{all: 'unset'}}>7</button></li>
                   <li>34 - Anniversary | Fashion .................. <button onClick={() => props.functionInput(8)} style={{all: 'unset'}}>8</button></li>

                   
                  
               </ul>
                  )}
                  <li onClick={() => toggleLayer("lcd")}>Lab Created Diamond</li>
                  {expanded.lcd && (
                    <ul>
                    <li>21 - Bridal REG .................................. <button onClick={() => props.functionInput(10)} style={{all: 'unset'}}>10</button></li>
                    <li>23 - 3 Stone Styles .............................. <button onClick={() => props.functionInput(11)} style={{all: 'unset'}}>11</button></li>
                    <li>24 - 2 Stone Styles .............................. <button onClick={() => props.functionInput(12)} style={{all: 'unset'}}>12</button></li>
                    <li>25 - Solitaire Studs | Pendants ............. <button onClick={() => props.functionInput(13)} style={{all: 'unset'}}>13</button></li>
                    <li>31 - Bridal CTR-CTW ......................... <button onClick={() => props.functionInput(14)} style={{all: 'unset'}}>14</button></li>
                    <li>33 - Solitaire Studs | Pendants ............. <button onClick={() => props.functionInput(15)} style={{all: 'unset'}}>15</button></li>
                    <li>34 - Anniversary | Fashion ................... <button onClick={() => props.functionInput(16)} style={{all: 'unset'}}>16</button></li>
                   
                  </ul>
                  )}
                  

                  <li onClick={() => toggleLayer("gemstone")}>Ruby</li>
                  {expanded.gemstone && (
                    <ul>
                    <li>51 - Ruby Only ................................... <button onClick={() => props.functionInput(18)} style={{all: 'unset'}}>18</button></li>
                    <li>52 - Ruby & Natural Diamond ........... <button onClick={() => props.functionInput(19)} style={{all: 'unset'}}>19</button></li>
                  </ul>
                  )}


                </ul>
              </>
            )}

              {openCategory === "kayoutlet" && (
              <>
                <li style={{ cursor: "pointer" }} onClick={() => toggleTopLevel(null)}>KAY Outlet</li>
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
                <li style={{ cursor: "pointer" }} onClick={() => toggleTopLevel(null)}>Jared</li>
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
                <li style={{ cursor: "pointer" }} onClick={() => toggleTopLevel(null)}>Jared Vault</li>
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
                <li style={{ cursor: "pointer" }} onClick={() => toggleTopLevel(null)}>Peoples</li>
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
                <li style={{ cursor: "pointer" }} onClick={() => toggleTopLevel(null)}>Zales</li>
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
                <li style={{ cursor: "pointer" }} onClick={() => toggleTopLevel(null)}>Zales Outlet</li>
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
            )}


            

            

            
            
            

            {/* top-level category as a header */}
            {/* {["Jared", "jaredvault", "peoples", "zales"].includes(openCategory) && (
              <li style={{ cursor: "pointer" }} onClick={() => toggleTopLevel(null)}>
                {openCategory.charAt(0) + openCategory.slice(1)}
                ...................................................................
              </li>
            )} */}
          </ul>
        </div>
        <div className="page-footer">{props.footer}</div>
      </div>
    </div>
  )
})

export default TableOfContents
