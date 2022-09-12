import React, { useState } from "react";
import TinderCard from 'react-tinder-card';
import './TinderCards.css';

const TinderCards = () => {
  const [people, setPeople] = useState([
    {
      name: 'steve jobs',
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Steve_Jobs_Headshot_2010-CROP_%28cropped_2%29.jpg/800px-Steve_Jobs_Headshot_2010-CROP_%28cropped_2%29.jpg'
    },
    {
      name: 'mark zuckerberg',
      url: 'https://upload.wikimedia.org/wikipedia/commons/1/18/Mark_Zuckerberg_F8_2019_Keynote_%2832830578717%29_%28cropped%29.jpg'
    }
  ]);

  // setPeople([...people, 'sonny', 'qazi'])

  return (
    <div>
      <h1>Tinder Cards</h1>

      <div className="tinderCards__cardContainer ">
        {people.map((person) =>(
          <TinderCard className="swipe" key={person.name} preventSwipe={['up', 'down']}>
            <div
            style={{ backgroundImage: `url(${person.url})` }}
            className="card">
              <h3>{person.name}</h3>

            </div>
          </TinderCard>
        ))}
      </div> 
      
    </div>
  );
}

export default TinderCards