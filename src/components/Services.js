import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faDesktop, faFileCode } from '@fortawesome/free-solid-svg-icons';

const Services = () => {
    return (
        <div className="services">
            <div className="py-5">
                <h1 className="py-5">my services</h1>
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 col-sm-6">
                            <div className="box">
                                <div className="circle"><FontAwesomeIcon className="icon" icon={faDesktop} size="2x" /></div>
                                <h3>Web Design</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum error, corporis natus nam ratione possimus vitae ut inventore facere, minima numquam corrupti voluptates sapiente ab incidunt eum aspernatur optio ad!</p>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <div className="box">
                                <div className="circle"><FontAwesomeIcon className="icon" icon={faFacebook} size="2x" /></div>
                                <h3>Web Development</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum error, corporis natus nam ratione possimus vitae ut inventore facere, minima numquam corrupti voluptates sapiente ab incidunt eum aspernatur optio ad!</p>

                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <div className="box">
                                <div className="circle"><FontAwesomeIcon className="icon" icon={faFileCode} size="2x" /></div>
                                <h3>React Development</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum error, corporis natus nam ratione possimus vitae ut inventore facere, minima numquam corrupti voluptates sapiente ab incidunt eum aspernatur optio ad!</p>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <div className="box">
                                <div className="circle"><FontAwesomeIcon className="icon" icon={faGoogle} size="2x" /></div>
                                <h3>JS Development</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum error, corporis natus nam ratione possimus vitae ut inventore facere, minima numquam corrupti voluptates sapiente ab incidunt eum aspernatur optio ad!</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default Services
