import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import male from '../images/malemidle.png' 
import female  from '../images/femalesmall.png' 

function CharDetails() {
  const params = useParams();
  console.log("params:", params)

  const { id } = useParams();
  // console.log("only id", id);

  const { result: character, error, loading } = useFetch(`https://api.sampleapis.com/futurama/characters/${id}`, 'sc');

  // const [character, setCharacter] = useState(null);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);

  // useEffect(() => {
  //   async function fetchCharacter() {
  //     try {
  //       const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
  //       const result = await response.json();
  //       console.log("result", result);
  //       if (result.error) {
  //         setError(result.error)
  //         setLoading(false);
  //       } else {
  //         setCharacter(result);
  //         setLoading(false);
  //       }
  //     } catch (error) {
  //       console.log(error)
  //       setError(error)
  //     }
  //   }

  //   fetchCharacter();
  // }, [])



  // let name = "Emily";
  // const handleChange = (event) => {
  //   name = event.target.value
  //   This variable HAS been updated, if you console logged it - React just doesn't care unless you update state
  // }
  
  return (
    <div className="detailscontainer">
      <h1>{character ? `${character.name.first} ${character.name.middle} ${character.name.last}` : 'loading...'}</h1>

      { loading && <p>Loading...</p> }

      {error && <p>{error}</p>}
      
      <div className="modalcontent">

            {character && <img src={character.images.main} alt={`Picture of ${character.name.first}`} />}
            {/* {character.gender ? console.log('character.gender :>> ', character.gender) : null} */}
          
              
            
            {character && <p><b>Age: </b><i> {character.age}</i></p>}

            
            {/* {(() => {                     //    TRYING TO PUT AN IMAGE DEPENDING ON DE GENDER
              if (character.gender && character.gender === "Female") { return <div className={`gender position-absolute`} ><img className={`genderStyle img-fluid`} src={female} alt="" /> </div>; }
              else if (character.gender && character.gender === "Male") { return <div className={`gender position-absolute`} > <img className={`genderStyle img-fluid`} alt="Male" src={male} /> </div>; }
              else {return null }
            })()} */}
            

            {character && <p><b>Gender: </b><i> {character.gender}</i></p>}
            {character && <p><b>Species: </b><i>{character.species}</i></p>}
            { character && <p><b>Occupation:</b><i> {character.occupation}</i></p>}
            { character && <p><b>Home Planet: </b><i>{character.homePlanet}</i></p>}


       </div>

    </div>
  )
}

export default CharDetails