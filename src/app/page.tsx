"use client"
import Link from "next/link";

export default function Page() {
    return (
        <main className="flex items-center justify-center h-dvh overflow-hidden px-[min(5rem,5%)]">

			<form id="login-form">
				<div className="mb-5">
					<h1 className="text-4xl font-roboto-bold">Welcome back</h1>
					<p className="text-dark-theme-100">Welcome back! Please enter your credentials.</p>
				</div>

				<div className="input-area">
					<label htmlFor="id">Roll Number / Staff Id</label>
					<input type="text" id="id" />
				</div>

				<div className="input-area">
					<label htmlFor="password">Password</label>
					<input type="password" id="password" />
				</div>

				<p>Forgot your password? <Link className="font-medium text-info-400 underline underline-offset-6" href="/reset" >Reset here</Link></p>

                <button type="submit" className="bg-dark-theme-300 text-white p-4 cursor-pointer rounded-[.7rem]">Sign In</button>
			</form>

		</main>
    )
}
