import React from 'react'

const Text = ({text,settext}) => {
  return (
    <div>
      <form onSubmit={(e)=> e.preventDefault()} >

              <input  type="text" 
                      id='text content'
                      className='input'
                      placeholder='enter board name ' 
                      value={text}
                      onChange={(e)=>{settext(e.target.value)}}
                    
            />
        <label htmlFor="text content" className='label-design'>board name</label>

        </form>


    </div>
  )
}

export default Text