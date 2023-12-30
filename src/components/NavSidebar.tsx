"use client"
import Link from "next/link";
import { useRef, useState } from "react";
import { BsArrowLeftShort, BsSearch } from "react-icons/bs"
import { FaHome } from "react-icons/fa"
import { MdLocalMovies } from "react-icons/md"
import { PiDevToLogo } from "react-icons/pi"

export default function NavSidebar() {
	const searchRef = useRef<HTMLInputElement>(null)
	const [open, setOpen] = useState(true)

	function handleSearchClick() {
		setOpen(true)
		searchRef.current?.focus()
	}

	return (
		<nav className={`bg-gradient-to-b from-blue-900 to-fuchsia-950 h-screen p-5 pt-8 relative transform ease-in-out origin-left ${open ? "w-72" : "w-20"} duration-1000`}>

			<BsArrowLeftShort
				className={`bg-white text-blue-900 text-3xl border border-indigo-800 rounded-full absolute -right-4 top-9 transform ease-in-out origin-center ${!open && "rotate-180"} duration-1000 hover:cursor-pointer`}
				onClick={() => setOpen(!open)}
			/>

			<Link href="/">
				<div className="inline-flex">
					<PiDevToLogo className="bg-amber-300 text-4xl rounded block float-left mr-2 hover:cursor-pointer" />
					<span className={`text-white font-medium text-2xl transform ease-in-out origin-left ${!open && "scale-0"} duration-1000`}>
						Logo
					</span>
				</div>
			</Link>

			<div className={`flex items-center rounded-md bg-white/[.18] mt-6 py-2 ${open ? "px-4" : "px-2"} duration-1000`}>
				<span className={`text-white text-lg block float-left transform ease-in-out origin-right ${open ? "mr-2" : "pl-0.5"} duration-1000`}>
					<BsSearch className="hover:cursor-pointer" onClick={handleSearchClick} />
				</span>
				<input
					type="search"
					ref={searchRef}
					placeholder="Search"
					className={`text-base bg-transparent text-white full transform ease-in-out origin-left ${!open && "scale-0"} duration-1000 focus:outline-none`}
				/>
			</div>

			<div className="pt-2">
				<Link
					href="/"
					className="text-gray-300 text-sm flex items-center gap-x-4 mt-2 p-2 rounded-md hover:bg-white/[.18]"
				>
					<span className="text-2xl block float-left">
						<FaHome />
					</span>
					<span className={`text-base font-medium transform ease-in-out origin-left ${!open && "scale-0"} duration-1000`}>
						Home
					</span>
				</Link>
				<Link
					href="/movies"
					className="text-gray-300 text-sm flex items-center gap-x-4 mt-2 p-2 rounded-md hover:bg-white/[.18]"
				>
					<span className="text-2xl block float-left">
						<MdLocalMovies />
					</span>
					<span className={`text-base font-medium transform ease-in-out origin-left ${!open && "scale-0"} duration-1000`}>
						Movies
					</span>
				</Link>
			</div>
		</nav>
	)
}