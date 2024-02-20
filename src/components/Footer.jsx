//* A single `Footer` component that appears on multiple pages

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';


export default function Header() {
    return (
        <footer className="border-style">
            <a href='https://github.com/Ivana-Djordjevic'>
                <FontAwesomeIcon className="icon" icon={faGithub} />
            </a>
            <a href='https://www.linkedin.com/in/ivana-djordjevic-799351268/'>
                <FontAwesomeIcon className="icon" icon={faLinkedin} />
            </a>
            <a href='https://www.instagram.com/runningaroundintheabyss?igsh=YzVkODRmOTdmMw%3D%3D&utm_source=qr'>
                <FontAwesomeIcon className="icon" icon={faInstagram} />
            </a>
        </footer>

    );
}