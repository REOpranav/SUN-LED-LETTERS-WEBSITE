import React from 'react'

const Pricing = ({handlesubmit,inputone,setInputone, inputtwo ,setInputtwo ,handlebutton}) => {

    const totalsqFeet = inputone * inputtwo 

    const totalRate = totalsqFeet * 650

  return (
   
  <div >
   <fieldset title='prize' className='fieldset-prize'id='prize' > 
      <legend id='prize'>PRIZE</legend>
         
        <h3 className='head-head-prize'>LED BOARD விலை பட்டியல்  </h3>
        
         <h4 className='squarefeet-rate'>ஒரு Sq.feet விலை :<b className='bold'> ரூ  650 /-</b> </h4> 
          
          <form onSubmit={handlesubmit} className='prize'>
            <label htmlFor="length">board length : </label> 
               <input type="number"
                      name="length"
                      id="length" 
                      className='prizing'
                      placeholder='நீளம்  ( அடி ) '
                      required
                      value={inputone}
                      onChange={(e)=>setInputone(e.target.value)}
                /> 
<br />

         <label htmlFor="height">board height : </label>
         
         <input  type="number"
                 name="height"
                 id="height"
                 className='prizing' 
                 required
                 placeholder='உயரம் ( அடி )'
                 value={inputtwo}
                 onChange={(e)=>setInputtwo(e.target.value)}
           /> <br />

       
      </form>

            <p className='totalfeet'> மொத்த Sq.feet : <b className='bold'>{totalsqFeet} Sq.feet</b> </p>

            <p className='totalRate'> மொத்த borad விலை : <b className='bold'> {totalRate} </b>/-</p>
    </fieldset>

</div>

  )
}

export default Pricing