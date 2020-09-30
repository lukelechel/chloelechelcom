import React from 'react'
import './NavBar.css'

class NavBar extends React.Component {render() {
        return (
            <div id="navBar-container">
                {
                    window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ?
                            <img
                                src="../resources/icons/menu-black.svg"
                                alt=""
                                id="menuIcon" />
                        :
                            <img
                                src="../resources/icons/menu-white.svg"
                                alt=""
                                id="menuIcon" />
                }
                <h1 id="siteTitle">Chloe Lechel</h1>
            </div>
        )
    }
}

export default NavBar