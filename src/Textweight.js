import React from 'react'

const Textweight = ({textweight,settextweight}) => {
  return (
    <div>
        <select
                className='optionTag'
                id='text weight'   
                value={textweight}
                onChange={(e)=>settextweight(e.target.value)}
         >
             <option>Select Font Weight</option>
             <option value="bold">Bold</option>
             <option value="bolder">Bolder</option>
             <option value="lighter">Lighter</option>
             <option value="100">100</option>
             <option value="200">200</option>
             <option value="300">300</option>
             <option value="400">400</option>
             <option value="500">500</option>
             <option value="600">600</option>
             
        </select>

      <label htmlFor="text weight" className='label-design'>letter weight</label>

    </div>
  )
}

export default Textweight