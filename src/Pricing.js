import React from 'react'

const Pricing = ({handlesubmit,inputone,setInputone, inputtwo ,setInputtwo ,handlebutton}) => {

    const totalsqFeet = inputone * inputtwo 

    const totalRate = totalsqFeet * 650

  return (  
   
  <div id='prize1'>
    <main className='main_total'>
   <fieldset title='prize' className='fieldset-prize' > 
         
      <h3 className='head-head-prize'>LED sign board price list</h3>
    
    <br />    
         <h4 className='squarefeet-rate'>square feet rate per feet :<b className='bold'> RS : 650 /-</b> </h4> 
    <br />   
          <form onSubmit={handlesubmit} className='prize'>
            <label htmlFor="length" style={{color:'white'}}>board length : </label> 
               <input type="number"
                      name="length"
                      id="length" 
                      className='prizing'
                      placeholder='length (in feet)'
                      value={inputone}
                      onChange={(e)=>setInputone(e.target.value)}
                /> 
<br />

         <label htmlFor="height" style={{color:'white'}}>board height : </label>
         
         <input  type="number"
                 name="height"
                 id="height"
                 className='prizing' 
                 placeholder='Height (in feet)'
                 value={inputtwo}
                 onChange={(e)=>setInputtwo(e.target.value)}
           /> 
  <br />     
      </form>
       
            <p className='totalfeet'> total Sq.feet :  </p>
              <p className='bottom_feet_one'> {totalsqFeet} Sq.feet</p>

             <p className='totalRate'> total rate of sign board</p>
             <p className='bottom_feet_two'> {totalRate} Rs</p>

    </fieldset>
    </main>
</div>

  )
}

export default Pricing