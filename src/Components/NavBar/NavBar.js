import React from 'react'
import './NavBar.css'

const navBarLibrary = [
    {
        name: "Portfolio",
        link: "/portfolio",
        alt: "Portfolio"
    },
    {
        name: "About",
        link: "/about",
        alt: "About"
    },
    {
        name: "Instagram",
        link: "https://instagram.com/chloelechelphotography",
        alt: "Chloe Lechel Photography on Instagram"
    }
]

class NavBar extends React.Component {
    constructor(props) {
        super()

        this.state = {
            menuListOpen: false,
            darkMode: false
        }
    }

    render() {

        const toggleNavList = () => {
            return this.state.menuListOpen ? this.setState({menuListOpen: false}) : this.setState({menuListOpen: true})
        }

        return (
            <div id="navBar-container">
                <div id="navBar-desktop" className="desktopOnly">
                    <a href="/" id="siteTitle">
                        <h1>Chloe Lechel</h1>
                    </a>
                    <ul id="navList-desktop">
                        {
                            navBarLibrary.map(x => {
                                return (
                                    <li key={x.name}>
                                        <a href={x.link} alt={x.alt} rel="noopener noreferrer">{x.name}</a>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>

                <div id="navBar-mobile" className="mobileOnly">
                    <picture>
                            <img
                                src="../resources/icons/menu-black.svg"
                                alt="Navigation list icon"
                                id="menuIcon"
                                onClick={toggleNavList} />
                    </picture>
                    <a href="/">
                        <h1>Chloe Lechel</h1>
                    </a>
                </div>
                <ul id="mobile-nav" className={this.state.menuListOpen === true ? 'visible' : 'invisible'}>
                    {
                        navBarLibrary.map(x => {
                            return (
                                <li key={x.name}>
                                    <a href={x.link} alt={x.alt}>{x.name}</a>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default NavBar