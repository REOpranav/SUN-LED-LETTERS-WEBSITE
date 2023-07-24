import { useState } from 'react';
import './App.css';
import Company from './Company';
import Featuers from './Featuers';
import Header from './Header';
import Pricing from './Pricing';
import Quotes from './Quotes';
import TopList from './TopList';
import LetterPad from './LetterPad';

import Content from './Content';
import Footer from './Footer';
import Square from './Square';
import Heightbox from './Heightbox';
import Width from './Width';
import Text from './Text';
import Textcolor from './Textcolor';
import Textsize from './Textsize';
import Fontstyle from './Fontstyle';
import Headerone from './Headerone';

function App() {

   const [inputone,setInputone] =  useState ('')

   const [inputtwo,setInputtwo] = useState('')
  
   const [colorValue,setcolorValue] = useState ('')
  
   const [height ,setheight] = useState('')

   const [width ,setwidth] =useState('')

   const [text,settext] = useState('')

   const [textcolor,settextcolor] = useState('')

   const [textsize,settextsize] = useState('')

   const [fontstyle ,setfontstyle] = useState('')

   const [textWeight,settextWeight]=useState('')


   const handlesubmit = (e)=>{
    e.preventDefault()
    setInputone('')
    setInputtwo('')
  }
    
  const handleSubmit = (e)=>{
    e.preventDefault()
   }

 
  return (
   <div>
      <Header />
     
      <TopList/>
    
      <Quotes />

      <Pricing 
        inputone = {inputone}
         setInputone= {setInputone}
        inputtwo={inputtwo}
         setInputtwo={setInputtwo}
        handlesubmit={handlesubmit}

      />         
    <fieldset className='total-sign' id='design'>
        <Headerone />
           
            <Square
                colorValue = {colorValue}
                height = {height}
                width={width}
                text={text}
                textcolor = {textcolor}
                textsize={textsize}
                fontstyle = {fontstyle}
                textweight={textWeight}
               
            />

            <Heightbox
                height = {height}
                setheight = {setheight}
                
          />
            
            <Width 
                width= {width}
                setwidth ={setwidth}
            />
            
            <Textsize 
                 textsize = {textsize}
                 settextsize = {settextsize}
            /> 

            <Text
                text ={text}
                settext = {settext}
            />
         
           <Content
                colorValue = {colorValue}
                setcolorValue={setcolorValue}
              
            />  
            
            <Textcolor 
                 textcolor = {textcolor}
                 settextcolor = {settextcolor}
                
              />

            <Fontstyle 
                 fontstyle = {fontstyle}
                 setfontstyle = {setfontstyle}
              />
         
         <Footer/>
     </fieldset>
     
   </div>
  )

}

export default App;
