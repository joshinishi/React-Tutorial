import React from 'react'

export default function Form() {
    function handleSubmit(e) {
        e.preventDefault();    
        console.log('You clicked submit.');
    }
  return (
    <div className='container my-5'>
       <form onSubmit={handleSubmit}>
            <button type="submit">Submit</button>
        </form>
    </div>
  )
}
