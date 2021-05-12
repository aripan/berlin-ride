import "./App.css";
import HomeScreen from "./components/HomeScreen/HomeScreen";
import QuestionnairesScreen from "./components/QuestionnairesScreen/QuestionnairesScreen";
// import OptionsScreen from "./components/OptionsScreen/OptionsScreen";

function App() {
  return (
    <div className="App">
      <HomeScreen />
      <QuestionnairesScreen />
      {/* <OptionsScreen /> */}
    </div>
  );
}

export default App;
