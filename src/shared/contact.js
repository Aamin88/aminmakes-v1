
const styleContact = {

}

const Contact = ({icon, type}) => {
    return( 
        <div style={styleContact}>
            <span>{icon}</span>
            {type}
        </div>
    )
}


export default Contact;