import React, {useRef} from 'react'
import '../styles/page.css'


const DefaultPageLayout = React.forwardRef((props, ref) => {

      return (      
        <div className="page page-cover page-cover-top" ref={ref} data-density="soft">
          <div className="page-content">
            <div>
            <h2 className="page-subheader" style={{fontSize: '18px'}}>{props.header}</h2>
            <h2 className="page-subheader">{props.headertwo}</h2>
            </div>
            {props.content}
          <div className="page-footer">{props.footer}</div>
          </div>
        </div>
      )
})

export default DefaultPageLayout