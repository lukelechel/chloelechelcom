import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Nav.css'

const baseResourceBucket = "https://chloelechelcom-resources.s3.us-east-2.amazonaws.com/"

const navLibrary = [
    {
        name: "Portfolio",
        link: "/portfolio"
    },
    {
        name: "About",
        link: "/about"
    },
    {
        name: "Instagram",
        link: "https://instagram.com/chloelechelphotography"
    }
    // {
    //     name: "Contact",
    //     link: "/contact"
    // }
]

export default function Nav() {
    const [menuListOpen, setMenuListOpen] = useState(false)

    function toggleNavList() { menuListOpen ? setMenuListOpen(false) : setMenuListOpen(true) }
    
    return (<div id="navBar-container">
        <div id="navBar-desktop" className="desktopOnly">
            <Link to="/" id="siteTitle">
                <h1>Chloe Lechel</h1>
            </Link>
            <ul id="navList-desktop">
                {
                    navLibrary.map(x => { return (
                        <li key={x.name}>
                            <Link to={x.link} rel="noopener noreferrer">{x.name}</Link>
                        </li>
                    )})
                }
            </ul>
        </div>

        <div id="navBar-mobile" className="mobileOnly">
            <img
                src={`${baseResourceBucket}menu-black.svg`}
                alt="Navigation list icon"
                id="menuIcon"
                onClick={toggleNavList} />
            <Link to="/">
                <h1>Chloe Lechel</h1>
            </Link>
        </div>
        <ul id="mobile-nav" className={menuListOpen === true ? 'visible' : 'invisible'}>
            {
                navLibrary.map(x => { return (
                    <li key={x.name}>
                        <Link to={x.link} rel="noopener noreferrer">{x.name}</Link>
                    </li>
                )})
            }
        </ul>
    </div>)
}