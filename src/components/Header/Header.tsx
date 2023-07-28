import { ThemeSwitcher } from 'components/ThemeSwitcher';
import {ReactComponent as GitHubIcon} from 'assets/icon-github.svg'
import styles from './Header.module.scss';


export const Header = () => (
  <div className={styles.header}>
    <div className={styles.logo}>
    <GitHubIcon width={26} height={26}/>
    <h2 className={styles.logo_text}>
    &#123; GitHub Finder &#125;
    </h2>
    </div>

    <ThemeSwitcher/>
  </div>
);
