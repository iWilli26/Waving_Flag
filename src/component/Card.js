import React, { useState } from "react";
import styled from "styled-components";

const Data = styled.div`
  width: 150%;
  height: 150%;
  position: absolute;
  top: -22.5px;
  left: -37.5px;
  color: black;
  background-color: lightgrey;
  opacity: 0.9;
  z-index: 2;
`;

const Flag = styled.img`
  height: 90px;
  width: 150px;
  border: solid 1px;
`;
const CardWrap = styled.li`
  position: relative;
  margin: 5px;
  width: min-content;
`;
const Card = (props) => {
  const { country } = props;
  const [display, setDisplay] = useState(false);
  return (
    <CardWrap
      className="card"
      onMouseEnter={() => setDisplay(true)}
      onMouseLeave={() => setDisplay(false)}
    >
      <Flag src={country.flag} alt="flag" />
      {display && (
        <Data>
          <ul>{country.name}</ul>
          <ul>{country.region}</ul>
          <ul>{country.capital}</ul>
          <ul>Pop : {country.population}</ul>
        </Data>
      )}
    </CardWrap>
  );
};
export default Card;
