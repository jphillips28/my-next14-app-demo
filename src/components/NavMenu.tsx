"use client"
import Link from "next/link";
import { useState } from "react";
import { BsArrowLeftShort, BsSearch } from "react-icons/bs"
import { FaHome } from "react-icons/fa"
import { MdLocalMovies } from "react-icons/md"
import { PiDevToLogo } from "react-icons/pi"

export default function NavMenu() {
	const [open, setOpen] = useState(true)

	return (
		<nav className={`bg-gradient-to-b from-blue-900 to-fuchsia-950 h-screen p-5 pt-8 ${open ? "w-72" : "w-20"} duration-500 relative`}>
			<BsArrowLeftShort
				className={`bg-white text-blue-900 text-3xl border border-indigo-800 rounded-full ${!open && "rotate-180"} duration-500 absolute -right-4 top-9 hover:cursor-pointer`}
				onClick={() => setOpen(!open)}
			/>
			<div className="inline-flex">
				<PiDevToLogo className="bg-amber-300 text-4xl rounded block float-left mr-2" />
				<Link
					href="/"
					className={`text-white origin-left font-medium text-2xl ${!open && "scale-0"} duration-500`}
				>
					Logo
				</Link>
			</div>
			<div className={`flex items-center rounded-md bg-white/[.18] mt-6 py-2 ${open ? "px-4" : "px-2.5"} duration-500`}>
				<BsSearch className={`text-white text-lg block float-left ${open && "mr-2"} duration-500`} />
				<input
					type="search"
					placeholder="Search"
					className={`text-base bg-transparent w-full text-white ${!open && "w-0"} duration-500 focus:outline-none`}
				/>
			</div>
			<div className="flex flex-col mt-2">
				<div className="flex items-center mt-2 p-2 rounded-md hover:bg-white/[.18]">
					<FaHome className={`text-white text-2xl block float-left ${open && "mr-2"}`} />
					<Link
						href="/"
						className={`text-white font-medium ${!open && "hidden"}`}
					>
						Home
					</Link>
				</div>
				<div className="flex items-center mt-2 p-2 rounded-md hover:bg-white/[.18]">
					<MdLocalMovies className={`text-white text-2xl block float-left ${open && "mr-2"}`} />
					<Link
						href="/movies"
						className={`text-white origin-left font-medium ${!open && "hidden"}`}
					>
						Movies
					</Link>
				</div>
			</div>
		</nav>
	)
}