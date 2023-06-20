import { IconHeart } from "./icons/icon-heart";
import { useState, useEffect } from 'react'
import React, { Component } from 'react';

export const Card = (props) => {
 //const {data} = props
  // const heandelClick = () => {
  //   let gamesList = JSON.parse(localStorage.getItem("myFavoritGame")) || {};
  //   gamesList[props.data.id] = props.data;
  //   localStorage.setItem("myFavoritGame", JSON.stringify(gamesList));
  //   removeGame(gprops.data.id);
  // }

  // const removeGame = () => {
  //   let gamesList = JSON.parse(localStorage.getItem("myFavoritGame")); 
  // gamesList[props.data.id] = undefined;
  //   localStorage.setItem("myFavoritGame", JSON.stringify(gamesList)); 
  // }

  const heandelClick = () => {
    let gamesList = JSON.parse(localStorage.getItem("myFavoritGame")) || {}; 
    
    if(gamesList[props.data.id] !== undefined){
      gamesList[props.data.id] = undefined;

    }else{
      gamesList[props.data.id] = props.data;
    }
    
    localStorage.setItem("myFavoritGame", JSON.stringify(gamesList)); 
  }

  const [active, setActive] = useState(false);
  const colorClick = () => {
    setActive(!active);
  };

  

  return (
    <div className='item'>
      <h1 className='item_title'>{props.data.title}</h1>
      <img className='item_image' src={props.data.thumbnail} alt="Картинка"></img>
      <p className='item_text'>Разработчик: {props.data.developer}</p>
      <p className='item_text'>Жанр игры: {props.data.genre}</p>
      <p className='item_text'>Платформа: {props.data.platform}</p>
      <p className='item_text'>Дата выхода: {props.data.release_date}</p>
      <button className='wishList_button' onClick={() => {heandelClick(); colorClick()}}><IconHeart color={[active ? "red" : "green" ]}/></button>
    </div>
  )

}