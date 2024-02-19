import avatar from '../pages/images/avatar.jpeg'

export default function HomePage() {
    return (
        <div>
            <h2>Welcome!</h2>
            <img src={avatar} alt="avatar" />
            <div>
                Text about me
            </div>
        </div>
    );
}