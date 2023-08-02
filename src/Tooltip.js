import React from 'react'

function Tooltip({visible, position}) {

  return (
    <div>
        <div className='tooltip-container'>
          {visible && <div className={position}>This is tool tips</div>}  
        </div>
    </div>
  )
}

export default Tooltip;