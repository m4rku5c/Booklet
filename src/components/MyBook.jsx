import React, {useRef, useState} from 'react'
import HTMLFlipBook from "react-pageflip"

import '../styles/book.css'
import '../styles/main-container.css'

import DefaultPageLayout from '../pages/DefaultPage'
import BookControls from './BookControls'
import TableOfContents from '../pages/TableOfContents'

import MDX from '../cards/MDX'
import top1 from '../assets/top1.png'
import back1 from '../assets/back1.png'

import bluewood from '../assets/bluewood.png'
import backgroundImage from '../assets/landing.png'

function MyBook(props) {
   const bookRef = useRef()

   const [pageCover, setPageCover] = useState(bluewood)

   const handleGoTo = () => {
    if (bookRef.current) {
      bookRef.current.pageFlip().flip(4, "top")
    }
   }
   
   const [bookPages, setBookPages] = useState([
        <TableOfContents functionInput={handleGoTo} />,
        <DefaultPageLayout header="header" headertwo="subheader" footer="2" content={<MDX frontImg={top1} backImg={back1}/>}/>,
        <DefaultPageLayout footer="3"/>,
        <DefaultPageLayout footer="4"/>,
        <DefaultPageLayout footer="5"/>,
        <DefaultPageLayout footer="6"/>
   ])
   
   


    return ( 
      <div>
        <button style={{position: 'absolute', left: 0, top: '50%'}}>Go</button>
        <div className="background-container" style={{ backgroundImage: `url(${backgroundImage})` }}>
          <div className='view-point'>
            <div className='flip-book' style={{ backgroundImage: `url\(${pageCover})` }}>
            
              <HTMLFlipBook width={600} height={800} ref={bookRef}
                          showCover={true}
                          mobileScrollSupport={true}
                          useMouseEvents={false}>
      
              {bookPages.map((page, index) => React.cloneElement(page, { key: index }))}

              </HTMLFlipBook>
            </div>
            <BookControls bookRef={bookRef} />
          </div>
        </div>
      </div>
      
    )
  }
export default MyBook