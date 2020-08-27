import React, {Component} from 'react'

export default class About extends Component {
    constructor(props) {
        super(props)

        this.state = {
            nama: 'Arief Rahman Yusniardi',
            umur: '24 years old',
            hobi: [
                {hobby: 'Programing'},
                {hobby: 'Listen Music'},
                {hobby: 'Design'},
                {hobby: 'Playing Video Games'},
            ]
        }
    }

    render() {
        return (
            <div className="about">
                <div className="about-content">
                    <div className="about-description">
                        <p>
                            <i><b className="color-primary">"</b></i>Hello, my name is <b>{this.state.nama}</b>. I was {this.state.umur}.
                            i have a diverse skill, ranging from <i>
                                <b>Design</b>, <b>HTML</b>, <b>CSS</b>, <b>JavaScript (ReactJS, VueJS)</b>
                                </i>
                                , all the way to <i><b>PHP</b></i>.
                            <i><b className="color-primary">"</b></i>
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}