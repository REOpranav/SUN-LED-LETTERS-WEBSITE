import React from 'react'

const Textsize = ({textsize,settextsize}) => {
  return (
    <div>
      <form onSubmit={(e)=> e.preventDefault()}>
          <input  type="number" 
                  id='text size'
                  placeholder='enter text size' 
                  value={textsize}
                  onChange={(e)=>{settextsize(e.target.value)}}
                 
                    />

      </form>
    </div>
  )
}

export default Textsize