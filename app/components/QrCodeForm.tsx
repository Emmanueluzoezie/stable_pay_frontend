"use client"
import axios from 'axios'
import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { toast } from "react-hot-toast"

const QrCodeForm = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<QrCode>()

    const onSubmit = async (data: QrCode) => {
        const notification = toast.loading('Starting');
        try {
            const requestBody = {
                recipient: data.recipient,
                reference: data.reference,
                amount: data.amount,
                label: data.label,
                splToken: data.splToken,
                message: data.message,
                memo: data.memo,
            }

            const response = await axios.post("https://stable-pay-production.up.railway.app/tx/createSplit", requestBody);
            console.log(response.data);

            toast.success('Success', { id: notification });
        } catch (error) {
            console.error('Error:', error);
            toast.error('Error', { id: notification });
        }
    }


    return (
        <div className='h-full flex-1 py-2 flex items-center justify-center'>
            <div className='h-full'>
                <h2 className='text-center py-4'>Please fill the form</h2>
                <form onSubmit={handleSubmit(onSubmit)} className="min-w-[400px]">
                    <div className='py-2'>
                        <label className='font-mono pl-4 text-sm'>Recipient</label>
                        <input {...register("recipient", { required: true })} type="text" className='border-2 w-full rounded-lg p-2 outline-none border-gray-400' />
                        {errors.recipient && <span>Recipient field is required</span>}
                    </div>
                    <div className='py-2'>
                        <label className='font-mono pl-4 text-sm'>Reference</label>
                        <input {...register("reference", { required: true })} type="text" className='border-2 w-full rounded-lg p-2 outline-none border-gray-400' />
                        {errors.reference && <span> Reference field is required</span>}
                    </div>
                    <div className='py-2'>
                        <label className='font-mono pl-4 text-sm'>Amount</label>
                        <input {...register("amount", { required: true })} type="text" className='border-2 w-full rounded-lg p-2 outline-none border-gray-400' />
                        {errors.amount && <span>Amount field is required</span>}
                    </div>
                    <div className='py-2'>
                        <label className='font-mono pl-4 text-sm'>Label</label>
                        <input {...register("label", { required: true })} type="text" className='border-2 w-full rounded-lg p-2 outline-none border-gray-400' />
                        {errors.label && <span>Memo field is required</span>}
                    </div>

                    <div className='py-2'>
                        <label className='font-mono pl-4 text-sm'>Message</label>
                        <input {...register("message", { required: true })} type="text" className='border-2 w-full rounded-lg p-2 outline-none border-gray-400' />
                        {errors.memo && <span>Message field is required</span>}
                    </div>
                    <div className='py-2'>
                        <label className='font-mono pl-4 text-sm'>Token</label>
                        <input {...register("splToken", { required: true })} type="text" className='border-2 w-full rounded-lg p-2 outline-none border-gray-400' />
                        {errors.splToken && <span>This field is required</span>}
                    </div>
                    <div className='py-2'>
                        <label className='font-mono pl-4 text-sm'>Memo</label>
                        <input {...register("memo", { required: true })} type="text" className='border-2 w-full rounded-lg p-2 outline-none border-gray-400' />
                        {errors.memo && <span>This field is required</span>}
                    </div>

                    <div className='flex justify-center pt-2'>
                        <input type="submit" className='p-2 bg-blue-400 px-10 rounded-md font-semibold font-serif' />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default QrCodeForm