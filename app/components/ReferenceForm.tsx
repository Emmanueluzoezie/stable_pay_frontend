"use client"
import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { toast } from "react-hot-toast"

const ReferenceForm = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<Reference>()

    const onSubmit: SubmitHandler<Reference> = (data) => {
        const notification = toast.loading("staring")
        try {

            toast.success("success", { id: notification })

        } catch (error) {
            toast.error("error", { id: notification })
        }
    }


    return (
        <div className='h-full flex-1 py-2 flex items-center justify-center'>
            <div className='h-full'>
                <h2 className='text-center py-4'>Please fill the form</h2>
                <form onSubmit={handleSubmit(onSubmit)} className="min-w-[400px]">
                    <input {...register("reference", { required: true })} type="text" className='border-2 w-full rounded-lg p-2 outline-none border-gray-400' />
                    {errors.reference && <span>This field is required</span>}

                    <div className='flex justify-center pt-2'>
                        <input type="submit" className='p-2 bg-blue-400 px-10 rounded-md font-semibold font-serif' />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ReferenceForm