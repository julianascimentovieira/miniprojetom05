import { useState, useEffect } from 'react';
import {SeriesCards} from './components/SeriesCards.jsx';
import './App.css';
import apiSeries from './components/seriesConfigs.jsx';




export default function App() {
const [series, setSeries] = useState ([]);

useEffect(() => {
apiSeries.post('/series').then(({ data }) => {
  console.log(data)
  setSeries(data); 
});
  apiSeries.get('/series/:name').then(({ data }) => {
  console.log(data)
  setSeries(data); 
});
 apiSeries.get('/series/:id').then(({ data }) => {
  console.log(data)
  setSeries(data); 
});
  apiSeries.get('/allseries').then(({ data }) => {
  console.log(data)
  setSeries(data); 
});
},[]);

return(
  <>
   <div className="books-code">
      {series.map((item) => (
       <SeriesCards
           key={item.id}
           name={item.name}
           genero={item.genero}
           temporadas={item.temporadas}
           
       />

      ))}
</div>

   </>
)
};