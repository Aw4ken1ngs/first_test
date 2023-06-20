import React, { Component, useState, useEffect } from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import {Card} from '@/components/card';


export default function Wishlist(props) {
  const [games, setGames] = useState([]);

  useEffect(() => {
    const gamesList = JSON.parse(localStorage.getItem("myFavoritGame")) || [];
    setGames(Object.values(gamesList));
  }, []);

  

return (
  <div>
    <h1>Список избранных игр</h1>
    <ul className='list_items'>{games.map(game => <li className='item' key={game.id}>
  <Card data={game}/>
  {/*data - это пример, название может быть любым*/}
</li>)}</ul>
  </div>
)
}

