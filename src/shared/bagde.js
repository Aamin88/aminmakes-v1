import '../assets/styles/badge.css'

const Badge = ({text, skill}) => {
    return (
        <span className={`badge ${skill}`}>
            {text}
        </span>
    )
}

export default Badge;