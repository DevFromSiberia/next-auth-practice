'use client'

import { authenticate } from "@/app/lib/actions";
import { useFormState, useFormStatus } from "react-dom";

export default function Auth() {
  const [errorMessage, dispatch] = useFormState(authenticate, undefined);
  function LoginButton() {
    const { pending } = useFormStatus();
    return (
      <button
        className="py-4 px-10 bg-slate-800 text-sky-50 rounded-2xl uppercase"
        aria-disabled={pending}
        type="submit"
      >
        Login
      </button>
    );
  }

  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="px-10 py-10 flex w-1/4 min-h-70 bg-lime-300 flex-col justify-between rounded-2xl">
        <h1 className="w-fit mx-auto text-2xl">Auth Page</h1>

        <form action={dispatch} className="flex flex-col py-5">
          <input
            className="mb-5"
            type="email"
            name="email"
            placeholder="Email"
            required
          />
          <input
            className="mb-5"
            type="password"
            name="password"
            placeholder="Password"
            required
          />
          <div>{errorMessage && <p>{errorMessage}</p>}</div>
          <LoginButton />
        </form>
      </div>
    </main>
  );
}
