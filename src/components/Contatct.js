import React from 'react'
import { useState } from 'react'
import { set } from 'react-hook-form';

function Contatct(){

    const [details, setDetails] = useState({
        name: "",
        email: "",
        mes: ""
    })

    const naChange = (e) =>{
        setDetails({
            name: e.target.value,
        });
    }
    const emChange = (e) =>{
        setDetails({
            email: e.target.value,
        });
    }
    const mesChange = (e) =>{
        setDetails({
            mes: e.target.value,
        });
    }

    const handleSubmit = async(e) =>{
        console.log(details);
        setDetails({
            name: "",
            email: "",
            mes: "",
        });
    }

    return (
        
        <div className='h-full flex justify-center flex-col my-36'>
            <div className='lg:w-2/5 md:w-1/2 sm:w-full m-auto p-8 shadow-lg'>
                <h1 className='font-black lg:text-7xl md:text-5xl 
                sm:text-5xl text-3xl flex items-center'>
                    <span>
                        Contact Us
                    </span>
                </h1>
                <label className=' w-full'>Name</label>
                <input placeholder='Name' className=' w-full'  
                value={details.name} onChange={naChange}/>

                <label className=' w-full'>Email</label>
                <input placeholder='Email' className=' w-full' 
                value={details.email} onChange={emChange}/>

                <label className=' w-full'>Message</label>
                <textarea className=' w-full' 
                value={details.mes} onChange={mesChange}></textarea>
                <button className='bg-orange-400 text-teal-700 w-full p-3'
                onClick={handleSubmit}>
                        Submit
                </button>
            </div>
        </div>
    )
}

export default Contatct
