import { useState } from 'react';

import { Container } from 'components/Container';
import { Header } from 'components/Header';
import { Search } from 'components/Search';
import { UserCard } from 'components/UserCard';

import { defaultUser } from 'mock';
import { GitHubError, GitHubUser, LocalGitHubUser } from 'types';
import { isGitHubUser } from 'utils/typeguards';
import { extractLocalUser } from 'utils/exract-local-user';
import { Help } from 'components/Help';

const BASE_URL = 'https://api.github.com/users/'

function App() {
  const [user, setUser] = useState<LocalGitHubUser | null>(defaultUser)
  const fetchUser = async (username: string) => {
    const url = BASE_URL + username;

    const res = await fetch(url);
    const user = await res.json() as GitHubUser | GitHubError;

    if (isGitHubUser(user)) {
      setUser(extractLocalUser(user))
    } else {
      setUser(null);
    }
  }

  return (
    <Container>
      <Help/>
      <Header />
      <Search hasError={!user} onSubmit={fetchUser} />
      {user && (
      <UserCard
        {...user}
      />
      )}
    </Container>
  );
}

export default App;

