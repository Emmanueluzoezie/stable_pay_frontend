"use client"
import { useState } from 'react'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { toast } from "react-hot-toast"

const RegisterForm = () => { 
    const router = useRouter()
    const [errorrMessage, setErrorMessage] = useState(true)

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<Merchant>()

    

    const onSubmit = async (data: Merchant) => {
        const notification = toast.loading('Starting');
        try {
            const requestBody = {
                recipient: { publicKey: data.merchantPublicKey },
                devnet: true
            };

            
            const response = await axios.post("https://stable-pay-production.up.railway.app/tx/createSplit", requestBody);
            
            await localStorage.setItem('payAccount', response.data.split.payingAccount);
            console.log(response.data.split.payingAccount)
            toast.success('Account is successfully created', { id: notification });
            router.push("/")
        } catch (error) {
            console.error('Error:', error);
            toast.error('Error', { id: notification });
            setErrorMessage(true)
        }
    };

    useEffect(() => {
        const payingAcct = localStorage.getItem('payAccount');
        console.log("payingAcctpayingAcct",payingAcct)
    }, [])


  return (
      <div className='h-full flex-1 py-2 flex items-center justify-center'>
        <div className='h-full'>
            <h2 className='text-center '>Enter reciever public address</h2>
              <form onSubmit={handleSubmit(onSubmit)} className="min-w-[400px] px-4">
                  <input {...register("merchantPublicKey", { required: true })} type="text" className={` w-full border-2 rounded-lg p-2 outline-none ${errorrMessage ? " border-red-400" : " border-gray-400"}`}/>
                  {errors.merchantPublicKey && <span className='text-red-500'>This field is required</span>}
                  {errorrMessage && <p className='text-[11px] text-red-600'>Wallet address is not valid</p>}

                  <div className='flex justify-center pt-6'>
                      <input type="submit" className={`p-2 bg-blue-400 px-10 rounded-md font-semibold font-serif`} />
                  </div>
              </form>
        </div>
    </div>
  )
}

export default RegisterForm