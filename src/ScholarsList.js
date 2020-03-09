import React from "react";

const ScholarsList = props => {

    return (
    <div className="mt-4">
      <ul className="list-group">
      {props.scholars.length > 0 &&  props.scholars.map((scholar, index) => {
          return <li className='list-group-item' key={index}>{scholar}</li>;
        })}
      </ul>
    </div>
  );
};

export default ScholarsList;
