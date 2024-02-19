import avatar from '../assets/images/avatar.jpeg'

export default function HomePage() {
    return (
        <div className='homepage'>
            <h2>Welcome!</h2>
            <img src={avatar} alt="avatar" />
            <div>
                <p>Text about me</p>
            </div>
        </div>
    );
}