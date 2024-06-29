'use client'
import Link from 'next/link';
// onClick, fetch, useState : 'use client'

import './LoginBtn.css';
import {signIn, signOut, useSession} from 'next-auth/react';

export default function LoginBtn({login}){
    console.log('로그인성공? ',login);
    return(
        <>
            {
                !login ? (
                    <button onClick={()=>{signIn()}}>로그인</button>
                ) : (
                    <button onClick={()=>{signOut()}}>로그아웃</button>
                )
            }

            {
                !login ?(
                    <Link href='/register' className='user-signup'>회원가입</Link>
                ): (
                    <span>{login?.user?.name}</span>
                )
            }
        </>
    )
}