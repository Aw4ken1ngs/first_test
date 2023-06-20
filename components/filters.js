import React, { Component, useState, useEffect } from 'react';


export function Filters(props) {
  const [filters, setFilters] = useState({ platform: [], category: [] })
  //filters.platform 
  //filters['platform']

  useEffect(() => {
    //props.getGames()
  }, [])
  //https://www.freetogame.com/api/games?category=shooter&category=pvp

  useEffect(() => {
    const filters = { platform: [], category: [] };
    const url = location.search.replace('?', '');
    const arr = url.split("&");
    arr.forEach((part) => {
      const [filterName, filterValue] = part.split("=");
      if (!filters[filterName]) {
        filters[filterName] = [];
      }
      filters[filterName].push(filterValue);
    });
    setFilters(filters)
    console.log('-----------------------', filters)
    props.getGames(location.search)
  }, [])

  const onSubmitFilter = () => {
    const filterCategory = filters.category;
    const filterPlatform = filters.platform
    const newFiltersCategory = [];
    let query = ''
    // const queryParams = new URLSearchParams();
    for (let i = 0; i < filterCategory.length; i++) {
      if (i !== 0) {
        query += '&' //''
      }
      query += 'category=' + filterCategory[i]
      //category=hooter
    }
    for (let i = 0; i < filterPlatform.length; i++) {
      if (i === 0 && query != '') {
        query += '&'
      }
      //category=hooter&
      if (i !== 0) {
        query += '&'
        //category=hooter
      }
      query += 'platform=' + filterPlatform[i]
      //category=hooterplatform=pc
    }
    if (query != '') {
      query = '?' + query
    }
    console.log(query)

    const url = location.origin + query
    history.pushState({}, '', url)


    props.getGames(query)

  }


  const onFilterChange = (event) => {
    const { name, value, checked } = event.target;

    if (checked) {
      filters[name].push(value);
      setFilters({ ...filters });
    } else {
      const newFilters = filters[name].filter(
        (filter) => filter !== value
      );

      setFilters({ ...filters, [name]: newFilters });
    }
  };
  console.log(filters)
  
  const isFilterChecked = (filterName, FilterValue) => {
    return Boolean(filters[filterName]?.find((Value) => FilterValue == Value))
    
    //const found = array1.find(element => element > 10);
    //['browser', 'pc'].find(filterName => FilterValue = )
  }

  return (
    <div className='filters'>
      <fieldset>
        <legend>Платформа:</legend>
        <ul className='filters-list'>
          <li className='filters-item'>
            <input type="checkbox" name="platform" value="pc" id="pc" onChange={onFilterChange} checked={isFilterChecked('platform', 'pc')}></input>
            <label for="pc">Кудахтер</label>
          </li>
          <li className='filters-item'>
            <input type="checkbox" name="platform" value="browser" id="browser" onChange={onFilterChange} checked={isFilterChecked('platform', 'browser')}></input>
            <label for="browser">Брузер</label>
          </li>
        </ul>
      </fieldset>
      <fieldset>
        <legend>Жанр:</legend>
        <ul className='filters-list'>
          <li className='filters-item'>
            <input type="checkbox" name="category" value="shooter" id="shooter" onChange={onFilterChange} checked={isFilterChecked('category', 'shooter')}></input>
            <label for="shooter">Пиу-Пиу</label>
          </li>
          <li className='filters-item'>
            <input type="checkbox" name="category" value="pvp" id="pvp" onChange={onFilterChange} checked={isFilterChecked('category', 'pvp')}></input>
            <label for="pvp">Пойдем выйдем</label>
          </li>
          <li className='filters-item'>
            <input type="checkbox" name="category" value="racing" id="racing" onChange={onFilterChange} checked={isFilterChecked('category', 'racing')}></input>
            <label for="racing">Гонялки</label>
          </li>
          <li className='filters-item'>
            <input type="checkbox" name="category" value="strategy" id="strategy" onChange={onFilterChange} checked={isFilterChecked('category', 'strategy')}></input>
            <label for="strategy">Стратежка</label>
          </li>
        </ul>
      </fieldset>
      <button type="button" onClick={onSubmitFilter}>Применить</button>
    </div>
  )
}