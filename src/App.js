import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import HomeScreen from "./components/HomeScreen/HomeScreen";
import QuestionnairesStudent from "./components/QuestionnairesScreen/QuestionnairesStudent/QuestionnairesStudent";
import QuestionnairesTourist from "./components/QuestionnairesScreen/QuestionnairesTourist/QuestionnairesTourist";
import QuestionnairesLongPeriod from "./components/QuestionnairesScreen/QuestionnairesLongPeriod/QuestionnairesLongPeriod";
import QuestionnairesBike from "./components/QuestionnairesScreen/QuestionnairesBike/QuestionnairesBike";
import QuestionnairesNearBy from "./components/QuestionnairesScreen/QuestionnairesNearBy/QuestionnairesNearBy";
import QuestionnairesSenior from "./components/QuestionnairesScreen/QuestionnairesSenior/QuestionnairesSenior";

// import OptionsScreen from "./components/OptionsScreen/OptionsScreen";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/home">
          <HomeScreen />
        </Route>
        <Route exact path="/questionnaires/tourist">
          <QuestionnairesTourist />
        </Route>
        <Route exact path="/questionnaires/student">
          <QuestionnairesStudent />
        </Route>
        <Route exact path="/questionnaires/longPeriod">
          <QuestionnairesLongPeriod />
        </Route>
        <Route exact path="/questionnaires/bike">
          <QuestionnairesBike />
        </Route>
        <Route exact path="/questionnaires/nearby">
          <QuestionnairesNearBy />
        </Route>
        <Route exact path="/questionnaires/senior">
          <QuestionnairesSenior />
        </Route>
        <Route path="/">
          <HomeScreen />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
