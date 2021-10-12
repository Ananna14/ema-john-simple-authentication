import React from 'react'
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth'
import './shipping.css'

const Shipping = () => {
    const { register, handleSubmit,formState: { errors } } = useForm();
    const {user} = useAuth();
    const onSubmit = data => {
        console.log(data)
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
