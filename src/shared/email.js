const Email = ({icon, email}) => {

return (
    <div className='contact-email contacts'>
        <a href={`mailto:${email}`}>
            <p>
                <span>
                    {icon}
                </span>
                <h4>
                    {email}
                    <span>Email</span>
                </h4>
            </p>
        </a>
    </div>
)
}


export default Email