import React, {Component} from 'react';


class Home extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="Home">
            <h1><u>Home</u></h1>
            
            <body>
                <h4 align="left"><b>Announcements</b></h4>
                <p align="left">
                    Welcome students of DubHacks Elementary! We are looking
                    forward to a fun filled school year with lots of learning. 
                    We team teach, and share your wonderful kids. 
                    Ms. Potato-Head teaches Language Arts and Social Studies. 
                    Mrs. Doubtfire teaches Math, Science and Health. Many 
                    other activities are a combined effort to help students 
                    apply new skills. Art and writing is integrated into 
                    the subjects throughout. 
                </p>
                <p align="left">
                    The students will participate in several activities 
                    in the virtual classroom over the next few weeks to learn classroom 
                    routines. We will ease into homework responsibility next week.
                    We start out with reading homework. Next week we will add 
                    spelling, then slowly integrate math homework. We  would like to share with 
                    you a curriculum map and what we hope to accomplish in our 
                    classrooms this year. Our curriculum has been designed to align
                    with the MSBSD grade level expectations that can be found in the 
                    MSBSD Web site, as well as, state standards. 
                </p>
                <h4 align="left"><b>Curriculum Map</b></h4>
                <img src=".\CurriculumMap.png"></img>
                <h3 align="left"><u><b>Rules</b></u></h3>
                <p>
                    <ol align="left">
                        <li>Be on time to class sessions</li>
                        <li>Come prepared to study</li>
                        <li>Be kind, polite, and respectful to others</li>
                        <li>Do not distract others</li>
                        <li>Work hard, and always do your best</li>
                        <li>Listen to the teacher and classmates</li>
                    </ol>
                </p>
            </body>
        </div>
        );
    }
}

export default Home;
