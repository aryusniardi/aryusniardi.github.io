import React, { Component} from 'react'
import { Link } from 'react-router-dom'
// import FontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

export default class Intro extends Component {
    constructor(props) {
        super(props)

        this.state = {
            nama: 'Arief Rahman Y',
        }
    }

    render() {
        return (
            <div className="intro">
                <div className="intro-background"> 
                    <img src={process.env.PUBLIC_URL + '/assets/img/Arief.png'} />
                </div>
                <div className="intro-content">
                    <h1 className="content-name">{this.state.nama}</h1>
                    <Link className="content-button" to="/main">
                        <span>More about me
                            <FontAwesomeIcon icon={faChevronRight}/>
                        </span>
                    </Link>
                </div>
            </div>
        )
    }
}