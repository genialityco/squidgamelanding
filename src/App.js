import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomeTwo from './pages/homes/HomeTwo';
import Community from './pages/community/Community';
import BulkUserUploader from './pages/admin/BulkUserUploader';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <HomeTwo />
          </Route>
          <Route path="/community">
            <Community />
          </Route>
          <Route path="/uploader-users">
            <BulkUserUploader />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

