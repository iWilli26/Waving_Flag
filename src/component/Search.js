import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";

const ButtonWrap = styled.button`
  background: #ff4742;
  border: 1px solid #ff4742;
  border-radius: 6px;
  box-shadow: rgba(0, 0, 0, 0.1) 1px 2px 4px;
  box-sizing: border-box;
  color: #ffffff;
  cursor: pointer;
  display: inline-block;
  font-family: nunito, roboto, proxima-nova, "proxima nova", sans-serif;
  font-size: 16px;
  font-weight: 800;
  line-height: 16px;
  min-height: 40px;
  outline: 0;
  padding: 12px 14px;
  text-align: center;
  text-rendering: geometricprecision;
  text-transform: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: middle;

  &:hover,
  &:active {
    background-color: initial;
    background-position: 0 0;
    color: #ff4742;
  }

  &:active {
    opacity: 0.5;
  }
`;

const FormWrap = styled.form`
  text-align: center;
`;

const Input = styled.input`
  font-family: "Roboto", sans-serif;
  color: #333;
  font-size: 1.2rem;
  margin: 0 auto;
  padding: 1.5rem 2rem;
  border-radius: 0.2rem;
  background-color: rgb(255, 255, 255);
  border: none;
  width: 90%;
  display: block;
  border-bottom: 0.3rem solid transparent;
  transition: all 0.3s;
`;

export const Search = ({ setData }) => {
  const [search, setSearch] = useState("");
  const handleSearch = (e) => {
    e.preventDefault();
    axios
      .get(
        `https://restcountries.com/v2/name/${search}?fields=name,population,region,capital,flag`
      )
      .then((res) => {
        setData(res.data);
        console.log(res.data);
      });
  };
  return (
    <FormWrap onSubmit={handleSearch}>
      <Input
        onChange={(e) => {
          setSearch(e.target.value);
        }}
        className="search-bar"
        type="text"
        placeholder="Entrez un pays"
      />
      <ButtonWrap type="submit" className="search-button">
        Chercher
      </ButtonWrap>
    </FormWrap>
  );
};
