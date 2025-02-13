import React, {useState} from 'react'
import BookEditor from './BookEditor'

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
            <BookEditor />
            <button onClick={closeSidebar}>Close</button>
        </div>
    </div>
  )
}

export default Sidebar