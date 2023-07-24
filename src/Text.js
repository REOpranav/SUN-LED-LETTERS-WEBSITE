import React from 'react'

const Text = ({text,settext}) => {
  return (
    <div>
      <form onSubmit={(e)=> e.preventDefault()} >

              <input  type="text" 
                      id='text content'
                      placeholder='enter board name ' 
                      value={text}
                      onChange={(e)=>{settext(e.target.value)}}
                    
            />

        </form>
    </div>
  )
}

export default Text