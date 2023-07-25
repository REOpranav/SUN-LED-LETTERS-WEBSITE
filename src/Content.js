import React from 'react'

const Content = ({colorValue,setcolorValue}) => {

  
  return (
    
     <div>

             <select 
                  className='optionTag'
                  id='board color'
                  value={colorValue}
                  onChange={(e)=>{setcolorValue(e.target.value)}}>    
                    
            <option>select box color</option>
                    <option value="white">white</option>
                    <option value="darkRed">darkRed</option>
                    <option value="Green">Green</option>
                    <option value="Red">Red</option>
                    <option value="Orange">Orange</option>
                    <option value="Yellow">Yellow</option>
                    <option value="Lime">Lime</option>
                    <option value="Blue">Blue</option>
                    <option value="Magenta">Magenta</option>
                    <option value="Cyan">Cyan</option>
                    <option value="Pink">Pink</option>
                    <option value="black">black</option>
                    <option value="Purple">Purple</option>
                    <option value="Teal">Teal</option>
                    <option value="Orangered">Orange-Red</option>
                    <option value="Green">Green</option>

             </select>
           <label htmlFor="board color" className='label-design' >Board color</label>
    
     </div>
   
  )
}

export default Content