import React from 'react'
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth'
import {clearTheCart, getStoredCart} from '../../utilities/fakedb'
import './shipping.css'

const Shipping = () => {
    const { register, handleSubmit, reset,formState: { errors } } = useForm();
    const {user} = useAuth();
    const onSubmit = data => {
        const saveCart = getStoredCart();
        data.order = saveCart;

    fetch('http://localhost:5000/orders',{
        method: 'POST',
        headers:{
            'content-type':'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(res => res.json)
    .then(result =>{
        if(result.insertedId){
alert('Oredr processed Successfuly')
clearTheCart();
reset();
        }
    })
    };

    return (
        <div>
            <form  className="shipping-form" onSubmit={handleSubmit(onSubmit)}>
     
      <input placeholder="name" defaultValue={user.displayName} {...register("name")} />
      <input placeholder="name" defaultValue={user.email} {...register("email")} />
     
      {errors.email && <span className="error">This field is required</span>}
      <input placeholder="address" defaultValue="" {...register("address")} />
      <input placeholder="city" defaultValue="" {...register("city")} />
      <input placeholder="phone" defaultValue="" {...register("phone")} />
      
      <input type="submit" />
    </form>
        </div>
    )
}

export default Shipping
