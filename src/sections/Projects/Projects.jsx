import styles from './ProjectStyles.module.css';
import ProjectCard from '../../common/ProjectCard';
import coldEmail from '../../assets/emailGen.png';
import meals from '../../assets/meals.png';
import expenseTracker from '../../assets/Expense Tracker.png';
import pokemon from '../../assets/Pokemon.png';

function Projects() {
  return (
    <section id='projects' className={styles.container}>
      <h1 className='sectionTitle'>Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard src={coldEmail} 
        link ='https://github.com/AryaTrivedi25/Cold-Email-Generator-Gen_AI_Project-'
        h3 = 'Cold Email Generator'
        p = 'Gen_AI project using LLM'
        />
        <ProjectCard src={meals} 
        link ='https://github.com/AryaTrivedi25/Flutter/tree/master/Udemy/meals_app'
        h3 = 'Meals App'
        p = 'Flutter app for meal exploration'
        />
        <ProjectCard src={pokemon} 
        link ='https://github.com/AryaTrivedi25/Devheat_Beta_Jyotishh'
        h3 = 'Pokemon Rotom'
        p = 'Encyclopedia of pokemon'
        />
        <ProjectCard src={expenseTracker} 
        link ='https://github.com/AryaTrivedi25/Flutter/tree/master/Udemy/expense_tracker'
        h3 = 'Expense Tracker App'
        p = 'Flutter app to keep Expenses'
        />
      </div>
    </section>
  )
}

export default Projects;