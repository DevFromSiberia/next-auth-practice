"use client";

import { signIn } from "next-auth/react";
import {useState} from 'react'

export default function Login() {

  const [loginValue, setLoginValue] = useState('')
  const [passValue, setPassValue] = useState('')

  const formHandler = (e) => {
    e.preventDefault();
    signIn('credentials', {
      email: loginValue,
      password: passValue,
      redirect:false
    })
  };

  function LoginButton() {
    return (
      <button
        className="py-4 px-10 bg-slate-800 text-sky-50 rounded-2xl uppercase"
        onClick={(e) => formHandler(e)}
      >
        Login
      </button>
    );
  }

  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="px-10 py-10 flex w-1/4 min-h-70 bg-lime-300 flex-col justify-between rounded-2xl">
        <h1 className="w-fit mx-auto text-2xl">Auth Page</h1>
        <form className="flex flex-col py-5">
          <input
            className="mb-5"
            type="email"
            name="email"
            placeholder="Email"
            required
            value={loginValue}
            onChange={(e) => setLoginValue(e.target.value)}
          />
          <input
            className="mb-5"
            type="password"
            name="password"
            placeholder="Password"
            required
            value={passValue}
            onChange={(e) => setPassValue(e.target.value)}
          />
          <LoginButton />
        </form>
      </div>
    </main>
  );
}
