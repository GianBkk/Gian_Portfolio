import React from 'react'
import IntroImg from './components/IntroImg'
import IdCard from './components/IdCard'

import './css/home.css'

const Home = () => {

   

    return (
        <div className="home">
            <h1 className="intro">Hi, My Name is <br/><span>Gian Bakker</span></h1>
            <div className="rotateimg"><IntroImg /></div>
            <div className='idcardcontainer'><IdCard /></div>
            
        </div>
    )
}

export default Home
