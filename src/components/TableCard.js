import React from 'react'
import '../quiz.css';
import Table from 'react-bootstrap/Table';

function TableCard({ user }) {

  const formatDate = (date) => {
    const dateObject = new Date(date);
    return dateObject.toDateString();
  }
  const emailname = user.author.slice(0, 6);
  return (
    user ?
    <>
       <div className='tablademierda'>
           <div className='tablamail'><h4>"{emailname}..."</h4></div> <div className='tablagames'><h4>{user.numberofgames}</h4> </div> 
           <div className='tablascore'><h4>{user.higherscore}</h4></div>
         
         
      </div>
    </> : null 
      
  )
}

export default TableCard