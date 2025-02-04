import React, {useState} from 'react'

function Sidebar({sharedState, setSharedState}) {

  const [bookTitle, setBookTitle] = useState("")
  const [coverImg, setCoverImg] = useState({})
  const [pageHeader, setPageHeader] = useState("")
  const [pageSubheader, setPageSubheader] = useState("")
  const [pageType, setPageType] = useState([])

 const closeSidebar = () => {
    setSharedState(!sharedState)
 }
  

  return (
    <div className='sidebar-main-container'>
        <div className='sidebar-sub-container'>
            <h3>Editor (WIP)</h3>
            <button onClick={closeSidebar}>Close</button>
        </div>
    </div>
  )
}

export default Sidebar