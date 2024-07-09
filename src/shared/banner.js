import '../assets/styles/banner.css'

const Banner = ({name, bannerClass}) => {
    return(
        <div className={`banner ${bannerClass}`}>
            <img src={name} alt={bannerClass} />
        </div>
    )
}


export default Banner;