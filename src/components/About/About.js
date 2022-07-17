import { about } from '../../portfolio'
import './About.scss'

const About = () => {
  const { name, role, description, resume, } = about

  return (
    <div className='about center'>
      {name && (
        <h1>
          Hi, I am <span className='about__name'>{name}.</span>
        </h1>
      )}

      {role && <h2 className='about__role'>A {role}.</h2>}
      <p className='about__desc'>{description && description}</p>

      <div className='about__contact center'>
        {resume && (
          <a href={resume} target="blank">
            <button className='button' type="button">
              Resume
              <div className='button__horizontal'/>
              <div className='button__vertical'/>
            </button>
          </a>
        )}
      </div>
    </div>
  )
}

export default About
