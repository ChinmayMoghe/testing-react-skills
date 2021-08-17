import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.scss';
import Home from './components/Home';
import Cards from './components/Cards';
import BackgroundImage from './components/BackgroundImage';

function App() {
  return (
    <div className="App">
      <h1 className="company-name">Smart cows</h1>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/task-1' component={Cards} />
          <Route exact path='/task-2' component={BackgroundImage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
