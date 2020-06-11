import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { API_KEY, BASE_URL } from '../secrets'


function Photo() {
    const [photo, setPhoto] = useState()

    useEffect(() => {
        const fetchPhoto = () => {

            axios.get(`${BASE_URL}${API_KEY}`)
            .then(res =>{
                console.log(res);
            })
            .catch(err => {
                console.log('This is error', err)
            })
        };
        fetchPhoto();
    }, []);

    return (
        <div>
            Hi
        </div>
    );

}

export default Photo;