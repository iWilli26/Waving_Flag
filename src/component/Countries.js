import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Card";

import styled from "styled-components";

const CountriesWrap = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
`;
export const Countries = ({ data, setData }) => {
  useEffect(() => {
    axios
      .get(
        "https://restcountries.com/v2/all?fields=name,population,flag,region,capital"
      )
      .then((res) => {
        setData(res.data);
      });
  }, []);

  return (
    <div>
      <CountriesWrap className="countryList">
        {data.map((country) => (
          <Card country={country} key={country.name} />
        ))}
      </CountriesWrap>
    </div>
  );
};
