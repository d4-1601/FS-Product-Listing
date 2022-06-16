import './App.css';
import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom';
import { Register } from './components/register';

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/register" component={Register} />
          <Route />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
