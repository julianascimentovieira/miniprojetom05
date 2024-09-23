import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {SeriesCards} from './components/SeriesCards.jsx'
import './App.css'
import axios from 'axios';


export default function App() {
const [series, setSeries] = useState ([]);

useEffect(() => {
  const buscarSeries = async () => {
    try {
      const response = await axios.get('http://localhost:3000/allseries'); 
      setSeries(response.data); 
    } catch (error) {
      console.error('Erro ao buscar séries ', error);
    }
  };

  buscarSeries();
}, []);


return (
  <div className='App'>
    <h1>Lista de Series</h1>
    <div className=''>
      {series.length > 0 ? (
        series.map((series) => (
          <SeriesCards
          key={series.id}
          titulo={series.name}
          genero={series.genero}
          temporadas={series.temporadas}
           />
        )) 
      ):(
      <p>Procurando Series.......</p>
      )}
    </div>
  </div>
  
)
};