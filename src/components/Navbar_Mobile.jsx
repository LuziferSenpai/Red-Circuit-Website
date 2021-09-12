import React, {useEffect, useRef, useState} from "react"
import data from "../data.json"

export default function Navbar() {
    const [leftOpen, setleftOpen] = useState(true)
    const [teamOpen, setTeamOpen] = useState(true)
    const [associatedOpen, setassociatedOpen] = useState(true)
    const drawer_shade = useRef()
    const drawer_left = useRef()
    const team_div = useRef()
    const associated_div = useRef()

    useEffect(() => {
        if (leftOpen) {
            drawer_shade.current.classList.remove("w-0")
            drawer_shade.current.classList.add("w-full")
            drawer_left.current.classList.remove("-ml-256")
        }
        if (!leftOpen) {
            drawer_shade.current.classList.remove("w-full")
            drawer_shade.current.classList.add("w-0")
            drawer_left.current.classList.add("-ml-256")
        }
    }, [leftOpen])

    useEffect(() => {
        if (teamOpen) {

        }
    }, [teamOpen])

    return (
        <header className="w-full lg:hidden">
            <div className="fixed h-full left-0 top-0 opacity-75 z-40" style={{backgroundColor: "#212121", transition: "width .40s ease-in-out"}} ref={drawer_shade} onClick={() => setleftOpen(false)}></div>
            <nav className="flex fixed w-256px h-full left-0 top-0 z-50 flex-col bg-nicegray border-r border-red-700" style={{transition: "margin-left .45s ease-in-out"}} ref={drawer_left}>
                <div className="flex p-2 flex-row justify-around items-center">
                    <a className="text-2xl font-bold text-red-800 truncate" href="/">Red Circuit</a>
                    <button className="flex w-36px h-36px justify-center items-center cursor-pointer" onClick={() => setleftOpen(false)}>
                        <span className="w-24px h-24px">
                            <img src="/images/close_button.svg" alt="" />
                        </span>
                    </button>
                </div>
                <div className="flex px-4 pb-4 flex-col">
                    <div className="flex flex-col">
                        <div className="flex w-auto h-36px flex-row items-center">
                            <img className="w-24px h-24px mr-2" src="/images/users-solid.svg" alt="" />
                            <a className="text-xl font-semibold" href="/team">Team</a>
                        </div>
                        <div className="flex w-auto h-auto pl-4 pb-2 mb-2 flex-col text-lg border-b border-red-700">
                            {data.team.map(doc => (
                                <a key={doc.name} href={`/team/${doc.name}`}>{doc.name}</a>
                            ))}
                        </div>
                        <div className="flex w-auto h-36px flex-row items-center">
                            <img className="w-24px h-24px mr-2" src="/images/users-solid.svg" alt="" />
                            <a className="text-xl font-semibold" href="/associated">Associated</a>
                        </div>
                        {/* <div className="flex w-auto h-36px flex-row items-center">
                            <img className="w-24px h-24px mr-2" src="/images/calendar-alt-regular.svg" alt="" />
                            <a className="text-xl font-semibold" href="/events">Events</a>
                        </div> */}
                    </div>
                </div>
            </nav>
            <div className="grid p-2 grid-cols-5 border-b border-red-700">
                <button className="flex w-36px h-36px justify-center items-center cursor-pointer" onClick={() => setleftOpen(true)}>
                    <span className="w-24px h-24px">
                        <img src="/images/menu_left.svg" alt="" />
                    </span>
                </button>
                <a className="justify-self-center col-span-3 text-2xl font-bold text-red-800" href="/">Red Circuit</a>
            </div>
        </header>
    )
}