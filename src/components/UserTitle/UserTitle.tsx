import { LocalGitHubUser } from 'types';
import styles from './UserTitle.module.scss';

interface UserTitleProps
  extends Pick<LocalGitHubUser, 'name' | 'login' | 'created'> {}

const localDate = Intl.DateTimeFormat('en-GB', {
  day: 'numeric',
  month: 'short',
  year: 'numeric',
});

export const UserTitle = ({ name, login, created }: UserTitleProps) => {
  const joinedDate = localDate.format(new Date(created));
  const GITHUB_URL = 'https://github.com/' + login;
  return (
    <div className={styles.userTitle}>
      <h2>{name}</h2>
      <a
        href={GITHUB_URL}
        target='_blank'
        rel="noreferrer"
      >
        <h3>{login}</h3>
      </a>
      <span>{joinedDate}</span>
    </div>
  );
};
