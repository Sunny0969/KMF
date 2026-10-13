"use client";

import { useActionState } from "react";
import { loginAdmin, type LoginState } from "@/app/admin/actions";

export default function AdminLogin() {
  const [state, formAction, pending] = useActionState<LoginState, FormData>(loginAdmin, null);

  return (
    <div className="min-h-screen bg-[#0b1c2d] flex items-center justify-center px-4 py-16">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-8 sm:p-10">
        <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#c59b27]">KMF Business Advisors</p>
        <h1 className="mt-3 text-3xl font-black text-[#0b1c2d]">Inquiry admin</h1>
        <p className="mt-2 text-sm text-slate-600">
          Private view of every form submitted on the website.
        </p>

        <form action={formAction} className="mt-8 space-y-4">
          <div>
            <label htmlFor="password" className="block text-sm font-semibold text-slate-800 mb-1.5">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              autoComplete="current-password"
              className="w-full px-4 py-3 rounded-lg border border-slate-300 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#c59b27]"
            />
          </div>
          {state?.error ? <p className="text-sm text-red-600">{state.error}</p> : null}
          <button
            type="submit"
            disabled={pending}
            className="w-full py-3 rounded-lg bg-[#c59b27] hover:bg-[#b0881f] text-white font-bold text-sm disabled:opacity-60"
          >
            {pending ? "Checking..." : "Sign in"}
          </button>
        </form>
      </div>
    </div>
  );
}
