import React, { useState, useEffect } from "react";
import TinderCard from 'react-tinder-card';
import database from "../firebase";
import './TinderCards.css';
import { collection, getDocs } from "firebase/firestore"; 

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

  useEffect(() => {
    let isSubscribed = true;

    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(database, "people"));
      // querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        setPeople(querySnapshot.docs.map(doc => doc.data()))
        // console.log(doc.id, " => ", doc.data());
      // });
    }
    fetchData()
      .catch(console.error)
    // querySnapshot.forEach((doc) => {
    //   // doc.data() is never undefined for query doc snapshots
    //   console.log(doc.name, " => ", doc.data());
    // });
    // this is where the code runs
    // querySnapshot.forEach('people').onSnapshot(snapshot => (
    //   setPeople(snapshot.docs.map(doc => doc.data()))
    // ))
    // this will run ONCE when the component loads, and never run again
    return () => isSubscribed = false;
  },[]);


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