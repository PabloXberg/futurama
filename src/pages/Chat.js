import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../contexts/AuthContext';
import { collection, addDoc, setDoc, doc, getDocs, query, onSnapshot, orderBy } from "firebase/firestore"; 
import { db } from '../fbConfig';
import MessageCard from '../components/MessageCard';


function Chat() {
  const {user} = useContext(AuthContext);
  const [inputValue, setInputValue] = useState('')
  const [messages, setMessages] = useState([]);

  const handleSubmitSetDoc = async(e) => {
    e.preventDefault();
    const newMessage = {
      author: user.email,
      message: inputValue,
      date: new Date().toDateString()
    }
    // console.log(newMessage);
    try {
      const docRef = await setDoc(doc(db, "chat", "document1"), newMessage);
      // console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }

  const handleSubmitAddDoc = async(e) => {
    e.preventDefault();
    const newMessage = {
      author: user.email,
      message: inputValue,
      date: Date.now()
    }
    // console.log(newMessage);
    try {
      const docRef = await addDoc(collection(db, "chat"), newMessage);
      const messagesCopy = messages;
      const message = {
        id: docRef.id,
        ...newMessage
      }
      messagesCopy.push(message);
      setMessages(messagesCopy);
      setInputValue('')
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }

  const getAllMessages = async() => {
    try {
      const querySnapshot = await getDocs(collection(db, "chat"));
      const messagesArray = [];
      // console.log("querySnapshot: ", querySnapshot);
       querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
        const message = {
          id: doc.id,
          ...doc.data()
        }
        messagesArray.push(message);
        setMessages(messagesArray);
        // console.log(message)
      });
    } catch (error) {
      console.log(error)
    }
  }

  const listenAllMessages = async() => {
    const q = query(collection(db, "chat"), orderBy("date"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const messagesArray = [];
      querySnapshot.forEach((doc) => {
        console.log(doc.data());
          const newMessage = {
            id: doc.id,
            ...doc.data()
          }
          messagesArray.push(newMessage);
      });
      setMessages(messagesArray)
    });
  }

  useEffect(() => {
    // getAllMessages();
    listenAllMessages();
  }, [])

  const handleOnChange = (e) => setInputValue(e.target.value)
  return (
    <div>

      <div>
        { messages.map((message) => {
          return (
            <MessageCard key={message.id} message={message} />
          )
        }) }
      </div>
      <form style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "1em" }} onSubmit={handleSubmitAddDoc}>
        <textarea style={{width: "100%", height:"5rem", }} placeholder="Write a new message..." value={inputValue} onChange={handleOnChange}/>
        <button type='submit'>Send</button>
      </form>
    </div>
  )
}

export default Chat