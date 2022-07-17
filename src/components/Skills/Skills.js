import uniqid from 'uniqid'
import { skills } from '../../portfolio'
import './Skills.scss'

const Skills = () => {
  if (!skills.length) return null

  return (
    <section className='section skills' id='skills'>
      <h2 className='section__title'>Skills</h2>
      <ul className='skills__list'>
  
   
        {skills.map((skill) => (
          <li key={uniqid()} className='skills__list-item  button-container-1 '>
         <span className="mas"> <img src={skill.img} alt="projectimg" width={48} height={48}/> <div>{skill.name}</div></span>
         <button id='work' type="button" name="Hover">{skill.name}</button>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Skills
