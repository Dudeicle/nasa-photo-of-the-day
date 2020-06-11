import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components'

const StyledImg = styled.div `
    box-sizing: border-box;
    height: 100%;
    width: 100%;
    border: 1px solid red;
`;

function Photo(props) {
    return (
        <StyledImg>
            <img src={props.photo.url} />
        </StyledImg>
    );

}
export default Photo;