import './Error.css'
import { Link } from 'react-router-dom'

const Error = () => (<div id="error-container">
    <div className="pageContent">
        <h1>404</h1>
        <p>Sorry, what you're looking for isn't here. Let's get you going in the right direction again.</p>
        <h1><Link to="/">Go Home</Link></h1>
    </div>
</div>)

export default Error