import './App.css';
import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom';
import { Register } from './components/register';
import { Login } from './components/login';

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login}/>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
