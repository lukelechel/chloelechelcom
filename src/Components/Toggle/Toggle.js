import React from 'react'
import './Toggle.css'

class Toggle extends React.Component {
    render() {
        return (
            <div className="button" id="dark-mode-switch" onClick={this.props.switch}>
                <input type="checkbox" className="checkbox" />
                <div className="knob"></div>
                <div className="toggle-background"></div>
            </div>
        )
    }
}

export default Toggle