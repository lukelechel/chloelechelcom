import React from 'react'
import './NavBar.css'

// import Toggle from '../Toggle/Toggle'

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

        // this.toggleDarkMode = this.toggleDarkMode.bind(this)
    }

    render() {

        const toggleNavList = () => {
            return this.state.menuListOpen ? this.setState({menuListOpen: false}) : this.setState({menuListOpen: true})
        }

        // function toggleDarkMode() {
        //     return this.state.darkMode ? this.setState({darkMode: false}) : this.setState({darkMode: true})
        // }

        return (
            <div id="navBar-container">
                <div id="navBar-desktop" className="desktopOnly">
                    <a href="/">
                        <img
                            src="https://chloelechelcom-resources.s3.us-east-2.amazonaws.com/mainProfile.jpg"
                            alt="Chloe Lechel profile"
                            id="desktop-profile-nav" />
                    </a>
                    <div id="navBar-desktop-text">
                        <a href="/">
                            <h1>Chloe Lechel</h1>
                        </a>
                        <ul id="desktop-nav">
                            {
                                navBarLibrary.map(x => {
                                    return (
                                        <li key={x.name}>
                                            <a href={x.link} alt={x.alt}>{x.name}</a>
                                        </li>
                                    )
                                })
                            }
                            {/* <li>
                                <Toggle switch={toggleDarkMode} />
                            </li> */}
                        </ul>
                    </div>
                </div>
                <div id="navBar-mobile" className="mobileOnly">
                    <picture>
                        {/* <source
                            srcSet="../resources/icons/menu-white.svg"
                            media="(prefers-color-scheme: dark)"
                            alt="Navigation list icon"
                            id="menuIcon"
                            onClick={toggleNavList} /> */}
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
                    {/* <li>
                        <Toggle switch={toggleDarkMode} />
                    </li> */}
                </ul>
            </div>
        )
    }
}

export default NavBar