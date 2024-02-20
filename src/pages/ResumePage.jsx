export default function ResumePage() {
    return (
        <div>
            <div className="download">
                <a href="/documents/resume.pdf" 
                   download>Click here to download my resume</a>
            </div>
            <section className="skills justify-content-center">
                <div className="list border-style">
                    <h2 className=""> Front-end Proficiencies</h2>
                    <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>JQuery</li>
                        <li>responsive design</li>
                        <li>React</li>
                        <li>Bootstrap</li>
                    </ul>
                </div>
                <div className="list border-style">
                    <div>
                        <h2> Back-end Proficiencies</h2>
                    </div>
                    <ul>
                        <li>APIs</li>
                        <li>Node</li>
                        <li>Express</li>
                        <li>Mysql, Sequelize</li>
                        <li>MongoDB, Mongoose</li>
                        <li>REST</li>
                        <li>GraphQL</li>
                    </ul>
                </div>
            </section>
        </div>
    ); 
}