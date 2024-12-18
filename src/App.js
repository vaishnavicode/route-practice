import './css/App.css';
import AppRoute from './routes';
import { LogInProvider } from './contexts/loginContext';
import { UserProvider } from './contexts/userContext';
import { UserListProvider } from './contexts/userListContext';
import { BlogProvider } from './contexts/blogContext';
import { LoaderProvider } from './contexts/loaderContext';
function App() {
  return (
    <>
    <LoaderProvider>
      <BlogProvider>
        <UserListProvider>
          <UserProvider>
            <LogInProvider>
              <AppRoute/>
            </LogInProvider>
          </UserProvider>
        </UserListProvider>
      </BlogProvider>
    </LoaderProvider>
  </>
    
  );
}

export default App;
