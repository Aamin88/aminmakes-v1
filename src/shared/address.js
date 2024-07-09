const Address = ({icon, postcode}) => {

return (
    <div className='contact-address contacts'>
        <p>
            <span>
                {icon}
            </span>

            <h4>
                {postcode}
                <span>Address</span>
            </h4>
        </p>
    </div>
)
}


export default Address;