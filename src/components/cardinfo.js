import React from 'react';

const CardInfo = (props) => {
  return (
    <div>
      <div>{props.image}</div>
      <p>Genero: {props.gender}</p>
      <p>Dirección: {props.direction}</p>
      <p>Duración: {props.duration}</p>
      <p>Locación: {props.location}</p>
    </div>
  );
};

export default CardInfo;
