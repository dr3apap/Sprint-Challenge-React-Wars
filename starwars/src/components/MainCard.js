import React from "react";
import styled from "styled-components"
const MainCard = (props) => {
    console.log(props)

    const sWCard = styled.div`
    
    
    
    
    
    
    `

    return (
        <div>
            <h2>Name: {props.name}</h2>
            <h3>Height: {props.height}</h3>
            <h3>Mass: {props.mass}kg</h3>
            <h3>Hair-Color: {props.hair_color}</h3>
            <h3>Skin-Color: {props.skin_color}</h3>
            <h3>Eye-Color: {props.eye_color}</h3>
            <h3>Birth-Year:{props.birth_year}</h3>
            <h3>Gender: {props.gender}</h3>
            <footer>
                <p><small>Created: {props.created}</small></p>
                <p><small>Edited: {props.edited}</small></p>
            </footer>
        </div>
    );
}
export default MainCard