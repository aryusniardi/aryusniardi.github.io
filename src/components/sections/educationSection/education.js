import React, {Component} from 'react'

export default class Contact extends Component {
    constructor(props) {
        super(props)

        this.state = {
            educations: [
                {id: 1, year: '2017', education: 'Paket C'},
                {id: 2, year: '2017 - Now', education: 'Politeknik TEDC Bandung', degree: 'Diploma - IV', description: 'Informatics Engineer'}
            ]
        }
    }

    render() {
        return (
          <div className="education">
              {
                  this.state.educations.map((education) => (
                    <div className={education.id % 2 === 0 ? 'container left' : 'container right' }>
                        <div className="education-content">
                            <h2>{education.year} (<b>{education.education}</b>)</h2>
                            {/* <h3>{education.education}</h3> */}
                            <p>{education.degree}</p>
                            <p><b>{education.description}</b></p>
                        </div>
                    </div>
                  ))
              }
          </div>
        );
    }
}