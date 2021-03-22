import React, { useState } from 'react';
import './App.css';
import Search from '../Search/Search'
import { getNews } from '../../api/News/provider';

function App() {
  const [results, setResults] = useState([]);
  getNews().then(setResults)

  // console.log(getNews)
  return (
    <div className='App'>
      <ul>
        {
          results.map((result) => (
            <li key={result.id}>;
              <h3>{result.webTitle}</h3>;
              <a href={result.webUrl}>Ссылка</a>;
              {/* <img src={result.imageUrl} alt={result.title}></img>; */}
              <time>{result.webPublicationDate}</time>
            </li>
          ))
        }
      </ul>
      <Search />
    </div>
  );
}

export default App;
