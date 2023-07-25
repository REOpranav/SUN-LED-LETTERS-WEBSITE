import React from 'react'

const Heightbox = ({height,setheight}) => {
  return (
   <div >
    <form onSubmit={(e)=> e.preventDefault()}>
        <input  type="number" 
                id='box height'
                placeholder='enter box height' 
                value={height}
                onChange={(e)=>{setheight(e.target.value)}}
            
                />
    <label htmlFor="box height" className='label-design'>Board height</label>

    </form>

    
  </div>

  )
}

export default Heightbox