import React, {Component} from 'react'
import { Link } from 'react-router-dom'
// import FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuestionCircle, faLaptopCode } from '@fortawesome/free-solid-svg-icons'
import {
    faGithub
} from '@fortawesome/free-brands-svg-icons'

export default class Contact extends Component {
    constructor(props) {
        super(props)

        this.state = {
            projects: [
                {
                    image: '2.png',
                    title: 'Revelry',
                    skill: ['HTML', 'CSS', 'Bootstrap', 'PHP'],
                    story: `Last Project from Web Programing lecture on campus, creating e-commerce system using PHP framework CodeIgniter`,
                    url: 'https://github.com/aryusniardi/UAS---Web_Programing'
                },
                {
                    image: '1.png',
                    title: 'Netflix interface clone using React.JS',
                    skill: ['HTML', 'SASS', 'React.JS'],
                    story: `I learn to use react and trying to cloning Netflix interface using React.JS`,
                    url: 'https://github.com/aryusniardi/movie-app-react'
                },
                {
                    image: '3.png',
                    title: 'Kedai Fesyen',
                    skill: ['Laravel', 'SASS', 'Vue.JS'],
                    story: `Last Project from Web Technology 2.0 lecture on campus, creating e-commerce system using PHP framework Laravel and Vue.JS`,
                    url: 'https://github.com/aryusniardi/kedai_fesyen_app'
                },
            ]
        }
    }

    render() {
        return (
            <div className="project">
                <h1>What i've build 
                    <FontAwesomeIcon icon={faQuestionCircle}/>
                </h1>

                {
                    this.state.projects.map((project) => (
                    <div className="project-content">
                        <div className="content-image">
                            <img src={process.env.PUBLIC_URL + '/assets/img/' + project.image} alt={project.image} />
                        </div>
                        <div className="content">
                            <h2>{project.title}</h2>
                            <p>{project.story}</p>
                            {project.skill.map((skill) => (
                                <h3>{skill}</h3>
                            ))}
                            <div className="content-url">
                                <Link className="content-button" to={project.url}>
                                    <FontAwesomeIcon icon={faGithub}/>
                                    Source Code
                                </Link>
                            </div>
                        </div>
                    </div>
                    ))
                }
            </div>
        )
    }
}