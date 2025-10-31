import React from 'react'
import { memo } from 'react'

function Child({name}) {
    console.log("child rendered");
    
  return (
    <div>Hello {name}!</div>
  )
}

export default memo(Child)
// export default Child