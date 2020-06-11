import React, { useState, useEffect } from 'react';
import axios from 'axios';


function Photo(props) {
 

    return (
        <div>
            <img src={props.photo.url} />
        </div>
    );

}

export default Photo;