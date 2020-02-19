import React from 'react';
import MainLayout from '../../components/MainLayout/'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MainPage from '../MainPage/'
import AddPage from '../AddPage/'

function App() {
  return (
    <MainLayout>
      <Router>
        <Switch>
          <Route exact path="/" children={<MainPage />} />
          <Route path="/add" children={<AddPage />} />
          <Route path="/edit" children={<div>EDIT PAGE</div>} />
          <Route path="/quiz" children={<div>QUIZ PAGE</div>} />
        </Switch>
      </Router>
    </MainLayout>
  );
}

export default App;
