import React from 'react'

const QuizMenu = () => {
  return (
    <div>
        <h1 className='text-center text-slate-50 text-xl mb-4'>Please select the category and the difficulty </h1>
    <div className='flex justify-between'>
    <select className='rounded-full w-40 h-15 p-2 text-blue-600 outline-0 cursor-pointer'>
        <option>Art</option>
        <option>Politics</option>
        <option> Celebrities</option>
        <option> Animals</option>
        <option> History</option>
        <option> Mythology</option>
        <option>Geography</option>

    </select>
<select className='rounded-full w-40 h-15 p-2 text-blue-600 outline-0 cursor-pointer'>
    <option>Easy</option>
    <option>Medium</option>
    <option>Hard</option>
</select>


    </div>
    </div>
  )
}

export default QuizMenu