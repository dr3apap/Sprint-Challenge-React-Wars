import React from "react";
import styled from "styled-components";

const SwDiv = styled.div`
  background-color: #c2b280;
  width: 35%;
  padding: 2%;
  border: 1.5px black solid;
  border-radius: 5px;
  opacity: 0.8;
  margin 3% auto;
  display:flex;
  flex-direction:column;
`;

function StarWarsLink(props) {
    console.log(`Card props: ${props}`);
    return (
        <SwDiv>
            <h2>{props.character.name}</h2>
            <p>Height: {props.character.height}cm</p>
            <p>Mass: {props.character.mass}kg</p>
            <p>Films: {props.character.films.length}</p>
        </SwDiv>
    );
}

export default StarWarsLink;


