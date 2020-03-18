import React from 'react';
import MainLayout from '../MainLayout';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MainPage from '../MainPage';
import AddPage from '../AddPage/';
import EditQuizPage from '../EditQuizPage/';
import './App.css';

function App() {
  return (
      <Router>
        <MainLayout>
          <Switch>
            <Route path="/" exact children={<MainPage />} />
            <Route path="/add" children={<AddPage />} />
            <Route path="/edit" exact children={<div>EDIT PAGE</div>} />
            <Route path="/edit/:quizId" children={<EditQuizPage />} />
            <Route path="/quiz" children={<div>QUIZ PAGE</div>} />
          </Switch>
        </MainLayout>
      </Router>
  );
}

export default App;
