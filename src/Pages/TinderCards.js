import React, { useState, useEffect } from "react";
import TinderCard from 'react-tinder-card';
import database from "../firebase";
import './TinderCards.css';
import { collection, query, where, onSnapshot, getDoc } from "firebase/firestore"; 

const TinderCards = () => {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    // with listener
    const peopleQuery = query(collection(database, "people"));
    const unsubscribe = onSnapshot(peopleQuery, (querySnapshot) => {
      setPeople(querySnapshot.docs.map(doc => doc.data()))
    });

    return () => {
      // clean up
      unsubscribe();
    }
   
    // no listener
    // let isSubscribed = true;

    // const fetchData = async () => {
    //     const querySnapshot = await getDocs(collection(database, "people"));
    //     setPeople(querySnapshot.docs.map(doc => doc.data()))
     
    // }
    // fetchData()
    //   .catch(console.error)
    
    // return () => isSubscribed = false;
  },[]);


  // setPeople([...people, 'sonny', 'qazi']) ... means preserve array

  return (
    <div>

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