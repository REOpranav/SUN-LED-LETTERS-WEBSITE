import React from 'react'

const Square = ({colorValue,height,width,text,textcolor,textsize,fontstyle,textWeight}) => {
  return (
    <section 
       className='square'
         style={
            { 
              backgroundColor : colorValue,
              height: height + "10px",
              width : width + "10px",
              fontWeight : textWeight,
              color : textcolor,
              fontSize : textsize+"3px",
              fontFamily : fontstyle,
              boxShadow : `1px 1px 20px ${colorValue}`,
              letterSpacing:`2px`
              
              
            }
        }
    > 
     
       <p>{text?text:'ENTER A NAME'}</p>
        
    </section>
  )
}

export default Square