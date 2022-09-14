import React from "react";
import './Chats.css';
import Chat from './Chat'

const Chats = () => {
  return (
   <div className="chats">
    <Chat name="Mark Cuban" message="Hi" timestamp="40 seconds ago" profilePic="https://assets.entrepreneur.com/content/3x2/2000/1603305679-GettyImages-1192972032.jpg"/>
    <Chat name="Sara Blakely" message="Hi" timestamp="35 minutes ago" profilePic="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Sara_Blakely.jpg/640px-Sara_Blakely.jpg"/>
    <Chat name="Kevin O'Leary" message="Hi" timestamp="3 days ago" profilePic="https://upload.wikimedia.org/wikipedia/commons/8/82/Kevin_O%27Leary_2012.jpg"/>
    <Chat name="Barbara Corcoran" message="Hi" timestamp="1 week ago" profilePic="https://static01.nyt.com/images/2017/06/04/business/04corner/04corner-articleLarge-v3.jpg?quality=75&auto=webp&disable=upscale"/>
    <Chat name="Billy Bob" message="Hi" timestamp="1 week ago" profilePic="..."/>
   </div>
  );
}

export default Chats;