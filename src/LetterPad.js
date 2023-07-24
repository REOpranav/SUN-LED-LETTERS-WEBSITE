import React from 'react'

const LetterPad = ({inputone,inputtwo}) => {

  return (
      <div className='letterpad'>
          <p>height : {inputone}</p>
          <p>length : {inputtwo}</p>
      </div>
  )
}

export default LetterPad