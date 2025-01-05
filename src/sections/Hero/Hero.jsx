import styles from './HeroStyles.module.css';
import heroImg from '../../assets/hero-img.png';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import twitterIconLight from '../../assets/twitter-light.svg';
import twitterIconDark from '../../assets/twitter-dark.svg';

import gitHubIconLight from '../../assets/github-light.svg';
import gitHubIconDark from '../../assets/github-dark.svg';
import linkedInIconLight from '../../assets/linkedin-light.svg';
import linkedInIconDark from '../../assets/linkedin-dark.svg';
import CV from '../../assets/myCV.pdf'
import { useTheme } from '../../common/ThemeContext';

function Hero() {
  const {theme, toggleTheme} = useTheme();

  const themeIcon = theme === 'light' ? sun : moon;
  const twitterIcon = theme === 'light' ? twitterIconLight : twitterIconDark;
  const gitHubIcon = theme === 'light' ? gitHubIconLight : gitHubIconDark;
  const linkedInIcon = theme === 'light' ? linkedInIconLight : linkedInIconDark;

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          src={heroImg}
          className={styles.hero}
          alt="Profile picture of Arya Trivedi"
        />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color mode icon"
          onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1>
          Arya <br /> 
          Trivedi
        </h1>
        <h2>Web Developer</h2>
        <span>
          <a href="https://github.com/AryaTrivedi25" target='blank'>
            <img src={gitHubIcon} alt="Github icon" />
          </a>
          <a href="https://www.linkedin.com/in/arya-trivedi-210925261/" target='blank'>
            <img src={linkedInIcon} alt="twitter icon" />
          </a>
          <a href="https://x.com/ATrivedi20744?t=0X7c4DXqNaPRlMHo9HsRLA&s=08" target='blank'>
            <img src={twitterIcon} alt="twitter icon" />
          </a>
        </span>
        <p className={styles.description}>Crafting digital experiences, exploring intelligent algorithms, and embracing the future of technology.</p>
        <a href={CV} download>
          <button className='hover'> Resume &#11015;</button>
        </a>
      </div>
    </section>
  )
}

export default Hero;