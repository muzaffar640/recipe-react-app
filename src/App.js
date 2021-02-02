import React, { useEffect, useState} from 'react';
import Recipe from "./Recipe";
import './App.css';

const App = () => {
  const APP_ID = 'c34eff73'
  const APP_KEY = '4e571296e656ca394e068c8a2d96a64b'

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('chicken')

  useEffect(()=> {
    getRecipes()   
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    setRecipes(data.hits);
  };

  const updateSearch = e => {
    setSearch(e.target.value);
  }

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  };

  return (
    <div className="App">
      <h2>Welcome To Muzaffar's Kitchen</h2>
      <form onSubmit={getSearch} className="search-form">
        <input className="search-bar" placeholder="Enter Your Main Item..." type="text" value={search} onChange={updateSearch}/>
        <button className="search-button" type="submit">Search</button>
      </form>
      
      <div className="recipe">
        {recipes.map(recipe => (
          <Recipe   
            key={recipe.recipe.label}
            title={recipe.recipe.label} 
            images={recipe.recipe.image} 
            calories={Math.floor(recipe.recipe.calories)}
            ingredients={recipe.recipe.ingredients}
          />
        ))}
      </div>      
    </div>    
  );
};

export default App;




