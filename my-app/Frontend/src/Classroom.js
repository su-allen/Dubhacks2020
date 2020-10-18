import React, { Component } from 'react';

class Classroom extends Component {
    constructor(props) {
        super(props);
        console.log(this.props.students);
    }

    getBadges = (student) => {
        let out = "";
        if (student.badges) {
            student.badges.forEach(badge => {
                out += badge + " ";
            });
            out.trim();
        }
        return out;
    }

    render() {
        return (
            <div className="Classroom">
                {this.props.students.sort((o1, o2) => {
                    return o2.ranking || 0 - o1.ranking || 0;
                }).map((student) =>
                    <div className="StudentListView" key={student.name}>
                        <span className="ranking">{`${student.ranking}. `}</span>
                        <span className="username">{student.name}</span>
                        <span className="score">{" " + student.total_points}</span>
                        <span className="badges">{" " + this.getBadges(student)}</span>
                    </div>
                )}
            </div>
        );
    }
}

export default Classroom;