import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.scss';

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
