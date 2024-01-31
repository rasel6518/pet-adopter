'use client'
import Image from 'next/image';
import React from 'react';
import googleIcon from '../../../../public/images/google.svg'

import { signIn } from "next-auth/react"
const Google = () => {

   
    return (
        <button onClick={async()=>{
            await signIn('google')
        }} type="submit" className="btn hover:bg-black hover:text-white gap-5"><Image src={googleIcon} alt='google icon' width={30} /> Login With Google</button>
    );
};

export default Google;