import React from 'react'

const Textsize = ({textsize,settextsize}) => {
  return (
    <div>
      <form onSubmit={(e)=> e.preventDefault()}>
          
          <input  type="number" 
                  id='text size'
                  className='input'
                  placeholder='enter text size' 
                  value={textsize}
                  onChange={(e)=>{settextsize(e.target.value)}}
                 
                    />
      <label htmlFor="text size" className='label-design'>letter size</label>

      </form>


    </div>
  )
}

export default Textsize