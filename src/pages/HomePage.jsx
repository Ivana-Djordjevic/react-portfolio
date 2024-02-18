import avatar from './images/avatar.jpg'
// const avatar = require('./images/avatar.jpeg')

export default function HomePage() {
    return (
        <div>
            <h2>i am the HomePage !</h2>
            <image scr={avatar} alt="charcoal illiustration"></image>
        </div>
    );
}