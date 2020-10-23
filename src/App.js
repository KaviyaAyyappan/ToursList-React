import React, { useState, useEffect } from 'react';
import Loading from './Loading';
import Tours from './Tours';
const url = 'https://course-api.netlify.app/api/react-tours-project';

function App() {
  const [loading,setLoading] = useState(true);
  const [tours,setTours] = useState([]);

  const removeTour = (id) => {
     const newTourList = tours.filter((tour) => tour.id !== id);
     setTours(newTourList);
  }

  const clearTour = () =>{
    setTours([]);
  }

//fetching the data and providing the condition
  const fetchTours= async () => {
    setLoading(true);
    try
    {
      const response = await fetch(url);
      const tours=await response.json();
      setLoading(false);
      setTours(tours);
    }
    catch (error){
      setLoading(false);
      console.log(error);
    }
  }
 
  useEffect (()=>{
    fetchTours();
  },[])


  if(loading)
  {
    return (
      <main>
        <Loading />
      </main>
    )
  }

  if(tours.length === 0)
  {
    return <main>
      <div className="title">
        <h2>No Tours Left</h2>
        <button className='btn' onClick={fetchTours}> Refresh</button>
      </div>
    </main>
  }
  return (
    <main>
      <Tours tours={tours} removeTour={removeTour} clearTour={clearTour}/>
      
    </main>
  );
}

export default App;