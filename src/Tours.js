import React from 'react';
import Tour from './Tour';

const Tours = ({tours}) => {
  return (
      <section>
          <div class="title">
              <h2> our Tours</h2>
              <div className="underline"></div>
          </div>
          <div>
        {tours.map((tour) => {
          return <Tour key={tour.id} {...tour} />;
        })}
      </div>
      </section>
  );
};

export default Tours;