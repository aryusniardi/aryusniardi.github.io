import React, {Component} from 'react'
// import FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons'

export default class Contact extends Component {
    constructor(props) {
        super(props)

        this.state = {
            projects: [
                {
                    image: '2.png',
                    title: 'Revelry',
                    skill: ['HTML', 'CSS', 'Bootstrap', 'PHP'],
                    story: `Last Project from Web Programing lecture on campus, creating e-commerce system using PHP framework CodeIgniter`
                },
                {
                    image: '1.png',
                    title: 'Netflix interface clone using React.JS',
                    skill: ['HTML', 'SASS', 'React.JS'],
                    story: `I learn to use react and trying to cloning Netflix interface using React.JS`
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
                        </div>
                    </div>
                    ))
                }
            </div>
        )
    }
}