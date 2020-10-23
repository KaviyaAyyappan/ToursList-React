import React from 'react';
import Tour from './Tour';

const Tours = ({tours,removeTour,clearTour}) => {
  return (
      <section>
          <div class="title">
              <h2> our Tours</h2>
              <div className="underline"></div>
          </div>
          <div>
        {tours.map((tour) => {
          return <Tour key={tour.id} {...tour} removeTour={removeTour} />;
        })}
      </div>
      <button className='btn' onClick={clearTour}>Clear all list</button>
      </section>
  );
};

export default Tours;