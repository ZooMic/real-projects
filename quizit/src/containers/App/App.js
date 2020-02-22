import React from 'react';
import MainLayout from '../../components/MainLayout/';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MainPage from '../MainPage/';
import AddPage from '../AddPage/';
import EditQuizPage from '../EditQuizPage/';

function App() {
  return (
    <MainLayout>
      <Router>
        <Switch>
          <Route path="/" exact children={<MainPage />} />
          <Route path="/add" children={<AddPage />} />
          <Route path="/edit" exact children={<div>EDIT PAGE</div>} />
          <Route path="/edit/:quizId" children={<EditQuizPage />} />
          <Route path="/quiz" children={<div>QUIZ PAGE</div>} />
        </Switch>
      </Router>
    </MainLayout>
  );
}

export default App;
