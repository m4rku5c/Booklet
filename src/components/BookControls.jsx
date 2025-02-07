import React, {useRef, useState} from 'react'
import '../styles/book-controls.css'

import leftArrow from '../../public/assets/arrow-left.png'
import rightArrow from '../../public/assets/arrow-right.png'


const BookControls = ({props, bookRef, currentPage, setCurrentPage}) => {

      
      const [pageCount, setPageCount] = useState(48)
      const [pageInput, setPageInput] = useState("")


      const handleNextPage = () => {
        if (bookRef.current) {
            bookRef.current.pageFlip().flipNext()
        }
      }
     
      const handlePrevPage = () => {
        if (bookRef.current) {
          bookRef.current.pageFlip().flipPrev()
        }
      }
    
      const handlePageInput = (e) => { setPageInput(e.target.value) }
    
      const handleGoToPage = () => {
        const pageNumber = parseInt(pageInput, 10) - 1 // Convert input to zero-based index
        if (bookRef.current && pageNumber >= 0 && pageNumber < pageCount) { // sCheck valid range
          bookRef.current.pageFlip().flip(pageNumber, "top")
          setPageInput("")
        } else {
          alert("Invalid page number. Please enter a number between 1 and " + pageCount)
        }
      }

      return (      
        <div className="controls">
        <button src={leftArrow} width='20px' height='20px' onClick={handlePrevPage} disabled={currentPage === 0}>
          <img src={leftArrow} alt="Left Arrow" width="20px" height="20px" margin-top="10px"/>
        </button>
        <span>  [{currentPage} out of {pageCount}]  </span>
        <button onClick={handleNextPage} disabled={currentPage === pageCount}>
          <img src={rightArrow} alt="Left Arrow" width="20px" height="20px" margin-top="10px"/>
        </button>
        <div className="page-input">
          <input type="number"
            value={pageInput}
            onChange={handlePageInput}
            placeholder="Page#"
            min="1"
            max="100"
          />
          <button onClick={handleGoToPage}>Go</button>
        </div>
    </div>
      )
}

export default BookControls