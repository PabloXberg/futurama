import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../contexts/AuthContext';
import { collection, addDoc, setDoc, doc, getDocs, query, onSnapshot, orderBy, startAt } from "firebase/firestore"; 
import { db } from '../fbConfig';
import MessageCard from '../components/MessageCard';
import TableCard from '../components/TableCard';
import './../quiz.css';
import Table from 'react-bootstrap/Table';

function TablaPuntos() {
  const {user} = useContext(AuthContext);
  const [inputValue, setInputValue] = useState('')
  const [users, setUsers] = useState([]);

  // const getAllMessages = async() => {
  //   try {
  //     const querySnapshot = await getDocs(collection(db, "users"));
  //     const usersArray = [];
  //     // console.log("querySnapshot: ", querySnapshot);
  //      querySnapshot.forEach((doc) => {
  //       // doc.data() is never undefined for query doc snapshots
  //       console.log(doc.id, " => ", doc.data());
  //       const user = {
  //         id: doc.id,
  //         ...doc.data()
  //       }
  //       usersArray.push(user);
  //       setUsers(usersArray);
  //       // console.log(message)
  //     });
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

  const listenAllMessages = async() => {
    const q = query(collection(db, "users"), orderBy("higherscore", "desc"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const usersArray = [];
      querySnapshot.forEach((doc) => {
        console.log(doc.data());
          const user = {
            id: doc.id,
            ...doc.data()
          }
          usersArray.push(user);
      });
      setUsers(usersArray)
    });
  }

  useEffect(() => {
    // getAllMessages();
    listenAllMessages();
  }, [])

  // const handleOnChange = (e) => setInputValue(e.target.value)

  return (
    <div className='backgroundimagen'>
      <div>
      <div className='tablademierda'>

      <div className='tablamail'><h3>Users</h3></div> <div className='tablagames'><h3>Games</h3> </div> 
           <div className='tablascore'><h3>Higher Score</h3></div>  
      </div>
      
        <div>
        {/* {console.log('users :>> ', users)} */}"test@t..."
        
        { users.map((user) => {
          return (
            <div>
               <TableCard key={user.id} user={user} />
            </div>
           
          )
        }) }
      </div>
      {/* <form style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "1em" }}>
        <textarea value={inputValue} onChange={handleOnChange}/>
        <button type='submit'>Send</button>
      </form> */}
    </div>
    </div>
  )
}

export default TablaPuntos