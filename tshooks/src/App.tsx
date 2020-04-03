import React, {
  useState,
  useMemo,
  useCallback,
  useRef,
} from 'react';

interface User {
  name: string;
  login: string;
  avatar_url: string;
}

const App: React.FC = () => {
  const [user, setUser] = useState<User>();
  const [users, setUsers] = useState<[User]>();
  const inputRef = useRef<HTMLInputElement>(null);
  
  const names = useMemo(() => users?.map(user => user.name).join(', ') || '', [users]);
  
  const greeting = useCallback((user: User) => alert(`Hello ${names}`), [names])

  async function loadData(): Promise<void>{
    const response = await fetch('https://api.github.com/users/diego3g');
    const data = await response.json();

    inputRef?.current?.focus();
    setUser(data);
  }

  loadData();
  return (    
    <div>
      {user?.name}
      <form action="">
        <input type="text" ref={inputRef}/>
      </form>
    </div>
  );
}

export default App;
