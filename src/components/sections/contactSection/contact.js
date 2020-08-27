import React, {Component} from 'react'
// import FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faTwitter, faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'

export default class Contact extends Component {
    constructor(props) {
        super(props)

        this.state = {
            socialMedia: [
                {
                    url: 'https://www.facebook.com/profile.php?id=100010638164254',
                    icon: faFacebookF
                }, {
                    url: 'https://twitter.com/endorse_pc/',
                    icon: faTwitter
                }, {
                    url: 'https://www.instagram.com/aryusniardi/',
                    icon: faInstagram
                }, {
                    url: 'https://www.linkedin.com/in/arief-rahman-y-7950b3151/',
                    icon: faLinkedin
                }, {
                    url: 'https://github.com/aryusniardi/',
                    icon: faGithub
                },
            ]
        }
    }

    render() {
        return (
             <div className="contact">
                 <div className="contact-card">
                    <div className="contact-image">
                        <img src={process.env.PUBLIC_URL + '/assets/img/Arief.png'} alt="contact" />
                    </div>

                    <ul className="social-icons">
                        {
                            this.state.socialMedia.map((social_media) => (
                                <li>
                                    <a href={social_media.url}>
                                        <FontAwesomeIcon icon={social_media.icon} />
                                    </a>
                                </li>
                            ))
                        }
                    </ul>

                    <div className="contact-details">
                        <h2>
                            Arief Rahman Y
                            <br/>
                            <span className="job-title">Student</span>
                        </h2>
                    </div>
                </div>
            </div>
        )
    }
}