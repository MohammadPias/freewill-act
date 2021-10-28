import React, { useEffect, useState } from 'react';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('', {
            method: "POST",
            headers: { 'content-type': 'application/json' }
        })
            .then(res => res.json())
            .then(result => console.log(result))
    }, [])
    return (
        <div>

        </div>
    );
};

export default Services;