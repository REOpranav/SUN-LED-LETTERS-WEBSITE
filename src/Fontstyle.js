import React from 'react'

const Fontstyle = ({fontstyle,setfontstyle}) => {
  return (
    <select
        className='optionTag'
        value={fontstyle}
        onChange={(e)=>{setfontstyle(e.target.value)}}
    >      
          <option> select font style </option>
          <option value="Arial">Arial</option>
          <option value="Arial Black">Arial Black</option>
          <option value="Bahnschrift">Bahnschrift</option>
          <option value="Calibri">Calibri</option>
          <option value="Cambria">Cambria</option>
          <option value="Candara">Candara</option>
          <option value="Comic Sans MS">Comic Sans MS</option>
          <option value="Consolas">Consolas</option>
          <option value="Courier New">Courier New</option>
          <option value="Georgia">Georgia</option>
          <option value="Impact">Impact</option>
          <option value="Lucida Console">Lucida Console</option>
          <option value="Lucida Sans Unicode">Lucida Sans Unicode</option>
          <option value="Microsoft Sans Serif">Microsoft Sans Serif</option>
          <option value="Segoe UI">Segoe UI</option>
          <option value="Tahoma">Tahoma</option>
          <option value="Times New Roman">Times New Roman</option>
          <option value="Trebuchet MS">Trebuchet MS</option>
          <option value="Verdana">Verdana</option>
          <option value="Webdings">Webdings</option>
          <option value="Wingdings">Wingdings</option>
  </select> 

        

  )
}

export default Fontstyle