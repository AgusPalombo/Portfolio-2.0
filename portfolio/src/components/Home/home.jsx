import './home.scss'
import { Link } from 'react-router-dom'

const Home = () => {
    
    return(
        <div className='container home-page'>
            <div className='text-zone'>
                <h1>Hi, <br /> I'm
                Agustin Palombo
                <br />
                Web developer
                </h1>
                <h2>Fullstack Developer / Software Developer / React.js Developer</h2>
                <Link to="/contact" className="flat-button">CONTACT ME</Link>
            </div>
        </div>
    )
}

export default Home