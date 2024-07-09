import '../assets/styles/section.css'

const ExperienceSection = ({title, content}) =>{
    return(
        <section className='experience-section'>
            <div className="title">
                <h3>{title}</h3>
            </div>
            <div className="exp-content">
                {content}
            </div>
        </section>
    )
}

export default ExperienceSection;