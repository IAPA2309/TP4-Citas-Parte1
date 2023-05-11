import React from 'react';
import Card from '../Cards/Card.js';
import './ListaCitas.css'

function ListaCitas(props) {
  return (
    <>
    <h2>{props.title}</h2>
    <Card
      pet={"Nina"}
      owner={"Martin"}
      date={"2021-08-05"}
      time={"08:20"}
      symptoms={"Le duele la pierna"}
    />
    <Card
      pet={"Sifon"}
      owner={"Flecha"}
      date={"2023-08-05"}
      time={"09:24"}
      symptoms={"Duerme mucho"}
    />
    <Card
      pet={"Floki"}
      owner={"Ari"}
      date={"2023-08-05"}
      time={"16:15"}
      symptoms={"No está comiendo"}
    />
    </>
  )
}

export default ListaCitas