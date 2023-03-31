import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { AuthContext } from './contexts/AuthContext';
import useFetch from './hooks/useFetch';
import theQuiz from './components/theQuiz'
import '../src/quiz.css';

function HomepageQuiz() {
  const { user } = useContext(AuthContext);
  const { result: characters, error, loading } = useFetch('https://api.sampleapis.com/futurama/questions/', 'sc');
  const [preguntaActual, setPreguntaActual] = useState(0);
  const [puntuacion, setPuntuacion] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [vidas, setVidas] = useState(3);
  const [tiemporestante, setTiempoRestante] = useState(10);
  const [aredisabled, setAreDisabled] = useState(false);
  const [buttonStyle, setButtonStyle] = useState("");
  
  const preguntas = characters;
  
  function handleAnswerSubmit(e, correctAnswer, respuesta) { 
  //Puntaje
    if (correctAnswer === respuesta) {
      setPuntuacion(puntuacion + 1);
      setTiempoRestante(10);
    }
    if (correctAnswer !== respuesta) {
      setVidas(vidas - 1);
      setTiempoRestante(10);}
  // style
    console.log('e :>> ', e);
    console.log('puntuacion :>> ', puntuacion);
    console.log('vidas :>> ', vidas);
     correctAnswer === respuesta ? setButtonStyle("correct") : setButtonStyle("incorrect");   // NEED TO ADD TO THE CLASSLIST!!!!!!!!
  //next
    setTimeout(() => {
    if (preguntaActual === preguntas.length - 1 || vidas <= 0 || vidas === 0) {setIsFinished(true);}
    else {setPreguntaActual(preguntaActual + 1);}
    },1000)
   
  }

  useEffect(() => {
    const intervalo = setInterval(() => {
    if (tiemporestante > 0) setTiempoRestante((prev) => prev - 1);
    if (tiemporestante === 0) setAreDisabled(true); }, 1000);
   
    return () => clearInterval(intervalo);
  }, [tiemporestante]);
  
  if (isFinished) return (
    <main className='quizBody'>
      <div className="quizApp">
      <div className="juego-terminado">
        <span>You scored {puntuacion} points out of {preguntas.length}!</span>
        <button onClick={() => window.location.href="/"}>Play Again!</button>

        </div>
      </div>
    </main>
  )
 
  
  return (
    <div className='quizBody'>
      <div className="quizApp">
        <div className="lado-izquierdo">

        <div className="numero-pregunta">
            <span>Question {preguntaActual ? preguntaActual + 1 : 1} of </span> 35  {/*preguntas ? preguntas.lenght : 28 */}       {/*characters.length*/} 
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
                  setTiempoRestante(10);
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
                  className={buttonStyle}
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

export default HomepageQuiz