import React, { useState } from "react";
import SingleList from "./SingleList";
import "./Person.css";

const Person = (props) => {
  console.log(props.data);
  const [count, setCount] = useState(props.data.length);
  console.log(count);

  const handleClick = () => {
    setCount(0);
  };
  return (
    <div className='person'>
      <h2>{count} Birthdays Today</h2>

      {props.data.map((each) => {
        console.log("each", each);
        return <SingleList key={each.id} {...each} count={count} />;
      })}
      <button onClick={handleClick}>Clear All</button>
    </div>
  );
};

export default Person;
