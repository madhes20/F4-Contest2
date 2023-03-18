import './style.css';
import React from 'react'

function GenreFilter({arr}) {

  return (
    <div className='filter'>
      <h2>Filter by Genre</h2>
      <div className='btn'>
        {arr.map((data, i)=>{
          return (
            <button key={i} onClick={(e) => console.log(e.target.innerText)}>{data}</button>
          )
        })}
      </div>
    </div>
  )
}

export default GenreFilter
