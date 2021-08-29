import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12 my-5 text-center">
                    <Link to="/adicionar" className="btn btn-outline-dark">
                        Adicionar Contato!
                    </Link>
                </div>
                <div className="col-md-6 mx-auto">
                    <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel sunt quibusdam eveniet? Dolorem saepe sed deleniti, tempora dolor excepturi aliquam. Quidem eaque iure dolor placeat nisi deserunt porro iste necessitatibus!</h1>
                </div>
            </div>
        </div>
    )
}

export default Home
