
import React, { useState } from 'react'

export default function Picker(props) {
const [color,setcolor]=useState("");

const change=(event)=>{    
setcolor(event.target.value);
props.handel(color);
}

  return (
    <div><label htmlFor="Colorpicker" className='mx-5'>
    <strong><b>Enable</b></strong> <input type="color" name="colorpicker" id="Colorpicker" onChange={change} />
    </label>
    </div>
  )
}
