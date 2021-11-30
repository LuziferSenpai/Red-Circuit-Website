import React, {useRef, useState} from "react"
import data from "../data.json"

export default function Navbar() {
    const [teamOpen, setTeamOpen] = useState(false)
    const [associatedOpen, setAssociatedOpen] = useState(false)
    const drawer_shade = useRef()
    const drawer_left = useRef()
    const team_div = useRef()
    const associated_div = useRef()

    function updateSidebar(boolean) {
        if (boolean) {
            drawer_shade.current.classList.remove("w-0")
            drawer_shade.current.classList.add("w-full")
            drawer_left.current.classList.remove("-ml-256")
        } else {
            drawer_shade.current.classList.remove("w-full")
            drawer_shade.current.classList.add("w-0")
            drawer_left.current.classList.add("-ml-256")
        }
    }

    function subupdate(e, div, boolean) {
        if (boolean) {
            e.src = "/images/chevron-down-solid.svg"

            div.remove("flex")
            div.add("hidden")
        } else {
            e.src = "/images/chevron-up-solid.svg"

            div.remove("hidden")
            div.add("flex")
        }
    }

    function updateList(e, type) {
        if (type === "team") {
            subupdate(e.target, team_div.current.classList, teamOpen)

            setTeamOpen(boolean => !boolean)
        } else {
            subupdate(e.target, associated_div.current.classList, associatedOpen)

            setAssociatedOpen(boolean => !boolean)
        }
    }

    return (
        <header className="w-full lg:hidden">
            <div className="fixed w-0 h-full left-0 top-0 opacity-75 z-40" style={{backgroundColor: "#212121", transition: "width .40s ease-in-out"}} ref={drawer_shade} onClick={() => updateSidebar(false)}></div>
            <nav className="flex fixed w-256px h-full -ml-256 left-0 top-0 z-50 flex-col bg-nicegray border-r border-red-700 overflow-y-auto noscrollbar" style={{transition: "margin-left .45s ease-in-out"}} ref={drawer_left}>
                <div className="flex p-2 flex-row justify-around items-center">
                    <a className="text-2xl font-bold title_font text-red-800" href="/">Red Circuit</a>
                    <button className="flex w-36px h-36px justify-center items-center cursor-pointer" onClick={() => updateSidebar(false)}>
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
                            <button className="flex w-24px h-24px ml-auto justify-center items-center cursor-pointer" onClick={e => updateList(e, "team")}>
                                <span className="w-16px h-16px">
                                    <img src="/images/chevron-down-solid.svg" alt="" />
                                </span>
                            </button>
                        </div>
                        <div className="hidden w-auto h-auto pl-4 py-2 mb-2 flex-col text-lg border-b border-red-700" ref={team_div}>
                            {data.team.map(doc => (
                                <a key={doc.name} className="" href={`/team/${doc.name}`}>{doc.name}</a>
                            ))}
                        </div>
                        <div className="flex w-auto h-36px flex-row items-center">
                            <img className="w-24px h-24px mr-2" src="/images/users-solid.svg" alt="" />
                            <a className="text-xl font-semibold" href="/associated">Associated</a>
                            <button className="flex w-24px h-24px ml-auto justify-center items-center cursor-pointer" onClick={e => updateList(e, "associated")}>
                                <span className="w-16px h-16px">
                                    <img src="/images/chevron-down-solid.svg" alt="" />
                                </span>
                            </button>
                        </div>
                        <div className="hidden w-auto h-auto pl-4 py-2 mb-2 flex-col text-lg border-b border-red-700" ref={associated_div}>
                            {data.associated.map(doc => (
                                <a key={doc.name} className="" href={`/associated#${doc.name}`}>{doc.name}</a>
                            ))}
                        </div>
                        {/* <div className="flex w-auto h-36px flex-row items-center">
                            <img className="w-24px h-24px mr-2" src="/images/calendar-alt-regular.svg" alt="" />
                            <a className="text-xl font-semibold" href="/events">Events</a>
                        </div> */}
                        <div className="flex w-auto h-36px flex-row items-center">
                            <img className="w-24px h-24px mr-2" src="/images/info-circle-solid.svg" alt="" />
                            <a className="text-xl font-semibold" href="/about">About</a>
                        </div>
                    </div>
                </div>
            </nav>
            <div className="grid p-2 grid-cols-5 border-b border-red-700">
                <button className="flex w-36px h-36px justify-center items-center cursor-pointer" onClick={() => updateSidebar(true)}>
                    <span className="w-24px h-24px">
                        <img src="/images/menu_left.svg" alt="" />
                    </span>
                </button>
                <a className="justify-self-center col-span-3 text-3xl font-bold title_font text-red-800" href="/">Red Circuit</a>
            </div>
        </header>
    )
}