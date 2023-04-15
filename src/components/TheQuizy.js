import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';
import useFetch from '../hooks/useFetch';
import { collection, addDoc, setDoc, doc, getDoc, query, onSnapshot, orderBy } from "firebase/firestore"; 
import { db } from '../fbConfig';
import '../quiz.css';

function TheQuiz() {
  const { user } = useContext(AuthContext);
  const { result: characters, error, loading } = useFetch('https://api.sampleapis.com/futurama/questions/', 'sc');
  const [preguntaActual, setPreguntaActual] = useState(0);
  const [puntuacion, setPuntuacion] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [vidas, setVidas] = useState(2);
  const [tiemporestante, setTiempoRestante] = useState(20);
  const [aredisabled, setAreDisabled] = useState(false);
  const [buttonStyle, setButtonStyle] = useState("");
  const [userData, setUserData] = useState("");
  const [newHighScore, setNewHighScore] = useState(0);
  
  const preguntas = characters;
  
  const navigate = useNavigate();


  function handleAnswerSubmit(e, correctAnswer, respuesta) {
    //Puntaje
    //  console.log('buttonStyle :>> ', buttonStyle)
   
    if (correctAnswer === respuesta) {
      setButtonStyle("correct")
      setPuntuacion(puntuacion + 1);
      setTiempoRestante(20);
    }
    if (correctAnswer !== respuesta) {
      setButtonStyle("incorrect")
      setVidas(vidas - 1);
      setTiempoRestante(20);
    }
    // style
    // console.log('e :>> ', e);
    // console.log('puntuacion :>> ', puntuacion);
    // console.log('vidas :>> ', vidas);
    // NEED TO ADD TO THE CLASSLIST!!!!!!!!
    //next
    setTimeout(() => {
      if (preguntaActual === preguntas.length - 1 || vidas <= 0) { setIsFinished(true); }
      else { setPreguntaActual(preguntaActual + 1); }
    }, 1000)
   
  }
  const readData = async () => {
    const docRef = doc(db, "users", `user_${user.uid}`);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
      setUserData(docSnap.data());

    } else {
      // docSnap.data() will be undefined in this case
      console.log("No such document!");
      SaveData();
       
    }
  }

  const SaveData = async () => {
    
    const newDocument = {
      author: user.email,
      higherscore: newHighScore,
      numberofgames: userData.numberofgames + 1 
    }
    console.log('newDocument :>> ', newDocument);
    // Add a new document in collection "users"
    await setDoc(doc(db, "users", `user_${user.uid}`), newDocument);
  //  setPuntuacion(0);
  }

  useEffect(() => {
    readData();
    console.log('userData.higherscore :>> ', userData.higherscore);
    if (userData.higherscore>puntuacion) {
      setNewHighScore(userData.higherscore);
    } else {
      setNewHighScore(puntuacion);
    }
    console.log('puntuacion :>> ', puntuacion);
    console.log('newHighScore :>> ', newHighScore);
    console.log('userData.higherscore :>> ', userData.higherscore);
    const intervalo = setInterval(() => {
      if (tiemporestante > 0) setTiempoRestante((prev) => prev - 1);
      if (tiemporestante === 0) setAreDisabled(true);
    }, 1000);
    return () => clearInterval(intervalo);
  }, [tiemporestante]);
  

 
  if (isFinished) return (
    //  readData(); 
    <main className='quizBody'>
      <div className="quizApp">
      <div className="juego-terminado">
          <span>You scored {puntuacion} points out of {preguntas.length}!</span>
             
          <button onClick={() => {
            setIsFinished(false)
            setPreguntaActual(0)
            setTiempoRestante(20)
            setVidas(3)
            setAreDisabled(false)          
            SaveData();
             
          }}>Play Again!</button>

        </div>
      </div>
    </main>
  )
 
 
  return (
    <div className='quizBody'>
      <div className="quizApp">
        <div className="lado-izquierdo">

        <div className="numero-pregunta">
            <span>Question {preguntaActual ? preguntaActual + 1 : 1} of </span> 35  ///  Score: {puntuacion} puntos{/*preguntas ? preguntas.lenght : 28 */}       {/*characters.length*/} 
        </div>
        <div className="titulo-pregunta">
         { preguntas && preguntas[preguntaActual].question}
          </div>
          <div>
            {!aredisabled ? ( <div className="tiempo-restante">
            <span>Remaining Time: {tiemporestante} </span> <br/>
            <span>Remaining Lifes/Trys: {vidas>=0 ? vidas : 0}  </span> 
            </div>) : (
                <button onClick={() => {
                 
                  setTiempoRestante(20);
                  setVidas(vidas - 1);
                  setAreDisabled(false);
                  setPreguntaActual(preguntaActual + 1);
                }}>Continue</button>
          )}
         
        </div>  
        </div>

          <div className="lado-derecho">
          
              {preguntas && preguntas[preguntaActual].possibleAnswers.map((respuesta) => (
                <button
                  disabled={aredisabled}
                  className={"correct"}
                  key={respuesta}
                  onClick={(e) => handleAnswerSubmit(e, preguntas[preguntaActual].correctAnswer, respuesta)}>{respuesta}</button>
                                
                )
                )
          }
        </div>
      </div>
    </div>
  )
}

export default TheQuiz