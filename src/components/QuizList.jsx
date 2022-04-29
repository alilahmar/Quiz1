import React from 'react'

const QuizList = () => {
  return (
    <div className='pt-7'>
<h3 className='text-2xl pb-5 text-white'>What animal can fly</h3>
<div className=''>
<input type='radio' value='Bird' className='w-5 h-5'/>
<label className='ml-5 text-xl text-white'>Bird</label>
</div>
<div >
<input type='radio' value='Fiss' className='w-5 h-5'/>
<label className='ml-5 text-xl text-white'>Fish</label>
</div>
<div>
<input type='radio' value='Crocodile' className='w-5 h-5'/>
<label className='ml-5 text-xl text-white'>Crocodile</label>
</div>
<div>
<input type='radio' value='cat' className='w-5 h-5'/>
<label className='ml-5 text-xl text-white'>Cat</label>
</div>





    </div>
  )
}

export default QuizList