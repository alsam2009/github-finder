import { ReactComponent as SearchIcon } from 'assets/icon-search.svg';
import styles from './Search.module.scss';
import { Button } from 'components/Button';

interface SearchProps {
  hasError: boolean;
  onSubmit: (text: string) => void;
}

type FormFields = {
  username: HTMLInputElement,
}

export const Search = ({ hasError, onSubmit }: SearchProps) => {

  const hadleSubmit = (event: React.FormEvent<HTMLFormElement & FormFields> ) => {
    event.preventDefault();
    const text = event.currentTarget.username.value;

    if (text) {
      onSubmit(text.trim());
      event.currentTarget.reset();
    }
  }

  return (
    <form onSubmit={hadleSubmit}  autoComplete='off'>
      <div className={styles.search}>
        <label htmlFor="search" className={styles.label}>
          <SearchIcon/>
        </label>
        <input
          type="text"
          className={styles.textField}
          id="search"
          name="username"
          placeholder="Search GitHub username..."
        />
        {hasError && (
          <div className={styles.error}>
            No result
          </div>
        )}
        <Button>
          Search
        </Button>
      </div>
    </form>
  );
};