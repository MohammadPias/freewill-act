import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import './AddToDb.css'

const AddToDb = () => {

    const { register, handleSubmit, reset, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        axios.post('http://localhost:5000/services', data)
            .then(result => {
                console.log(result);
                if (result.data.insertedId) {
                    alert('Service added successfully');
                    reset();
                }
            })
    };
    return (
        <div className="d-flex justify-content-center align-items-center mt-5">
            <form onSubmit={handleSubmit(onSubmit)} className="form w-50">
                <input placeholder="Name" {...register("Name")} />
                <br />
                <textarea placeholder="Description" {...register("description", { required: true })} />
                <br />
                <input placeholder="Image url" {...register("url", { required: true })} />
                {errors.exampleRequired && <span>This field is required</span>}
                <br />
                <input type="submit" />
            </form>
        </div>
    );
};

export default AddToDb;