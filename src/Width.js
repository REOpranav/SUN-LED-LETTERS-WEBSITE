import React from 'react'

const Width = ({width,setwidth}) => {
  return (
    <div>
      <form onSubmit={(e)=> e.preventDefault()}>
         
           <input type="number" 
                  id='box width'
                  placeholder='enter box width' 
                  value={width}
                  onChange={(e)=>{setwidth(e.target.value)}}
                 
             />
        <label htmlFor="box widht" className='label-design'>Board width      </label>

      </form>
    </div>
  )
}

export default Width