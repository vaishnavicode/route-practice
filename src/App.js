import './App.css';
import AppRoute from './routes';
import { LogInProvider } from './contexts/loginContext';
import { UserProvider } from './contexts/userContext';
import { UserListProvider } from './contexts/userListContext';
import { BlogProvider } from './contexts/blogContext';
function App() {
  return (
    <>
    <BlogProvider>
      <UserListProvider>
        <UserProvider>
          <LogInProvider>
            <AppRoute/>
          </LogInProvider>
        </UserProvider>
      </UserListProvider>
    </BlogProvider>
    
  </>
    
  );
}

export default App;
