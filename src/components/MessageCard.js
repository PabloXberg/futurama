import React from 'react'

function MessageCard({ message }) {
  const formatDate = (date) => {
    const dateObject = new Date(date);
    return dateObject.toDateString();
  }
  const emailname = message.author.slice(0, 5);
  return (
    <div className='tablamail' style={{border: 'solid 1px white', width: '35%'}}>
 
          <p><i>Posted by: <strong>"{emailname}..."</strong> on {formatDate(message.date)}</i></p>
      <p><strong>{message.message}</strong></p>
   
    </div>
  )
}

export default MessageCard