import '../assets/styles/button.css'
const Button = ({text, btnStyle, btnEvent}) => {
    return (
        <a class={'btn'}style={btnStyle} href='mailto:forkahamin@yahoo.co.uk'>
            {text}
        </a>
    )
}

export default Button