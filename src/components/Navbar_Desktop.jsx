import React from "react"

export default function Navbar() {
    return (
        <header className="hidden w-full py-4 bg-nicegray border-b border-red-700 lg:flex">
            <nav className="flex max-w-screen-lg h-auto pb-2 mx-auto flex-row items-center xl:max-w-screen-xl" style={{transition: "margin-left .45s ease-in-out"}}>
                <div className="w-3/4">
                    <a className="text-2xl font-bold text-red-800 truncate" href="/">Red Circuit</a>
                </div>
            </nav>
        </header>
    )
}