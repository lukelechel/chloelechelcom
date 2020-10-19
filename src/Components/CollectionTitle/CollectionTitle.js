import React from 'react'
import './CollectionTitle.css'

class CollectionTitle extends React.Component {
    render() {
        return (
            <h1 id="collectionTitle">
                {this.props.title}
            </h1>
        )
    }
}

export default CollectionTitle