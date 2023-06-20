import Head from 'next/head'
import Image from 'next/image'
import { Gemunu_Libre, Inter } from 'next/font/google'
import ReactDOM from "react-dom";
import axios from 'axios'
import '../styles/item.module.css'
import { headers } from '@/next.config'
import { Card } from '@/components/card'
import React, { Component, useState, useEffect } from 'react';
import { WishList } from './wishlist';
import Link from 'next/link';
import { Filters } from '@/components/filters'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const [form, setForm] = useState({ email: '', password: '' });
  const [user, setUser] = useState(null);
  const [games, setGames] = useState([]);


  // const url = fetch('https://free-to-play-games-database.p.rapidapi.com/api/games', {
  //   method: "GET",
  //   headers: {
  //     "X-RapidAPI-Key": "qTbJOYEsEBmshPPec5JVzI5biShxp1wcFwhjsnEbaREiLf1tkk",
  //     "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com"
  //   }.
  // })

  const onChange = (event) => {
    event.target.name // email
    event.target.value // ahsdkjasdhj
    setForm({
      ...form,
      [event.target.name]: event.target.value //password
    })
  }

  const onSubmit = (event) => {
    event.preventDefault()
    fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify(form)
    }).then(b => b.json()).then(a => {
      setUser(a)
    })
    console.log(form)
  }


  useEffect(() => {
    // fetchGames()
  }, [])


  const fetchGames = (req = '') => {
  fetch('https://free-to-play-games-database.p.rapidapi.com/api/games' + req, {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "qTbJOYEsEBmshPPec5JVzI5biShxp1wcFwhjsnEbaREiLf1tkk",
        "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com"
      }
    }).then(res => res.json()).then(data => {
      setGames(data)
    })
  }

  const listItems = games.map(game => <li className='item' key={game.id}>
    <Card data={game} />
    {/*data - это пример, название может быть любым*/}
  </li>);
  return (
    <div className='main_container'>
      <Filters getGames={fetchGames}/>
      <div className='container'>
        <Link href="/wishlist">Изранные игры</Link>
        {/* <button onClick={onClick} type='button'>Получить</button> */}
        <h2>Список игр:</h2>
        <ul className='list_items'>{listItems}</ul>
      </div>

    </div>
  )
}



