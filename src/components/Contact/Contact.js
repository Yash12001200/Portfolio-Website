import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';
import { contact } from '../../portfolio'
import './Contact.css'

const Contact = () => {
  if (!contact.email) return null
  const mystyle = {
    background: 'transparent',
    margin: "0px 0px 2px 0px",
   
  };
  return (
    <section className='section contact center' id='contact'>
      <h2 className='section__title'>Contact</h2>
      <div className='contactbox'>
      <a href={`mailto:${contact.email}`} target="blank">
        <span type='button' className=' btn--outline rainbow rainbow-5'>
          <EmailIcon style={mystyle}/>
          Email
        </span>
      </a>
   
  
      <a href={contact.github} target="blank">
      
        <span type='button' className=' btn--outline rainbow rainbow-5'>
        <GitHubIcon  style={mystyle}/>
          Github
        </span>
      </a>
      <a href={contact.linkedin} target="blank">
        <span type='button' className=' btn--outline rainbow rainbow-5'>
          <LinkedInIcon  style={mystyle}/>
          LinkedIn
        </span>
      </a>
      </div>
    </section>
  )
}

export default Contact
