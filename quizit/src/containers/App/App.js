import React from 'react';
import MainLayout from '../../components/MainLayout/'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <MainLayout>
      <Router>
        <Switch>
          <Route exact path="/" children={<div>MAIN PAGE</div>} />
          <Route path="/add" children={<div>ADD PAGE</div>} />
          <Route path="/edit" children={<div>EDIT PAGE</div>} />
          <Route path="/quiz" children={<div>QUIZ PAGE</div>} />
        </Switch>
      </Router>
    </MainLayout>
  );
}

export default App;
