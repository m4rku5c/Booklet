import React from 'react'

const BookEditor = () => {
    
    const handleAddPage = () => {
        
    }

  
    return (

    
    <div>
        <h2>Book Editor</h2>

        <form style={{display: 'flex', flexDirection: 'column'}}>

        <label for="content-format">Choose Content Format</label>
        <select name="content-format" id="content-format">
            <option value="MDX2">MDX2</option>
        </select>


        {/*  MDX2 Formatting */}
        <label for="mdx2-multi">How Many MDX2 Cards?</label>
        <select name="mdx2-multi" id="mdx2-multi">
            <option value="oneMDX">1</option>
            <option value="twoMDX">2</option>
            <option value="threeMDX">3</option>
        </select>

        {/* MDX Card Images */}
        <label for="mdx2-frontimg1">Front Image 1</label>
        <input type="file" id="mdx2-frontimg1" name="mdx2-frontimg1"/>
        <label for="mdx2-backimg1">Certification Code</label>
        <input type="file" id="mdx2-backimg1" name="mdx2-backimg1"/>

        <label for="mdx2-frontimg2">Front Image 2</label>
        <input type="file" id="mdx2-frontimg2" name="mdx2-frontimg2"/>
        <label for="mdx2-backimg2">Certification Code</label>
        <input type="file" id="mdx2-backimg2" name="mdx2-backimg2"/>

        <label for="mdx2-frontimg3">Front Image 3</label>
        <input type="file" id="mdx2-frontimg3" name="mdx2-frontimg3"/>
        <label for="mdx2-backimg3">Certification Code</label>
        <input type="file" id="mdx2-backimg3" name="mdx2-backimg3"/>

       


        {/* MDX Card Vendor Code */}
        <label for="mdx2-subtitle">Certification Code</label>
        <input type="text" id="mdx2-subtitle" name="mdx2-subtitle"/>


        <button type="submit" onClick={handleAddPage}>Submit</button>
        </form>





    </div>
  )
}

export default BookEditor