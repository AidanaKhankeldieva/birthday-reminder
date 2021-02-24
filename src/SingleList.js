import React from "react";
import "./SingleList.css";

const SingleList = ({ id, name, age, image, count }) => {
  console.log("count 2 ", count);
  return (
    <div>
      {count > 0 ? (
        <div className='singlelist'>
          <img src={image} alt={name} className='singlelist__img' />
          <div className='singlelist__content'>
            <h4>{name}</h4>
            <h5>{age}</h5>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default SingleList;
