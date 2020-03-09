import React from "react";

const ScholarsList = props => {
    console.log(props.scholarsList)
  return (
    <div>
      <ul>
        {props.scholarsList.map((scholar, index) => {
          return <li key={index}>{scholar}</li>;
        })}
      </ul>
    </div>
  );
};

export default ScholarsList;
