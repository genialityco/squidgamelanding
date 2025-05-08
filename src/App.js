
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomeTwo from './pages/homes/HomeTwo';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <HomeTwo />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

