import React, { useState } from 'react';
import './App.css';
import Search from '../Search/Search'
import { getNews } from '../../api/News/provider';

function App() {
  const [articles, setArticles] = useState([]);
  getNews().then(setArticles)

  return (
    <div className='App'>
      <ul>
      
        {
          articles.map((article) => (
            <li key={article.id}>;
              <h3>{article.title}</h3>;
              <a href={article.link}>Ссылка</a>;
              <img src={article.imageUrl} alt={article.title}></img>;
            </li>
          ))
        }
      </ul>
      <Search />
    </div>
  );
}

export default App;
