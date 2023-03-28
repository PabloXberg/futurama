import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const CardDetails   = () => {
  const { id } = useParams();
  const [fetchedData, updateFetchedData] = useState([]);
  const { name, location, homeplanet, gender, images, age, species, Occupation} = fetchedData;
  const api = `https://api.sampleapis.com/futurama/characters/${id}`;

  useEffect(() => {                                       // Fetching wanted Character Data 
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      updateFetchedData(data);
    })();
  }, [api]);

  return (
    <div className="container d-flex justify-content-center mb-5">
      <div className="d-flex flex-column gap-3">
        <h1 className="text-center">{name.first}</h1>

        <img className={`imgDetails img-fluid`} src={images.main} alt="" />

        <div className="content mb-5">
          
          <div className="">
            <span className="fw-bold">Age: </span>
            {age}
          </div>
          <div className="">
            <span className="fw-bold">Home Planet: </span>
            {homeplanet}
          </div>
          <div className="">
            <span className="fw-bold">Species: </span>
            {species}
          </div>
            <div className="">
            <span className="fw-bold">Occupation: </span>
            {Occupation}
          </div>
            <div className="">
            <span className="fw-bold">Gender: </span>
            {gender}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;
