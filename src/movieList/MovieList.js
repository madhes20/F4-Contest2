import React from 'react'
import './style.css';

function MovieList(movArr) {
  var arr = movArr.movArr;
  return (
    <div className='list'>
      <table className='table'>
        <tbody>
          <tr>
            <th>Title</th>
            <th>Genre</th>
            <th>Year</th>
          </tr>
          {
            arr.map((data, i)=>{
              return (
                <tr key={i}>
                  <td>{data.title}</td>
                  <td>{data.genre}</td>
                  <td>{data.year}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  )
}

export default MovieList
