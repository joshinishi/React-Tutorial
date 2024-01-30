import React from 'react'

export default function TodoItem({todo}) {
  return (
    <div className='container'>
        <h4>{todo.title}</h4>
        <p>{todo.desc}</p>
    </div>
  )
}
