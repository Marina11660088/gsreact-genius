import './App.css';
import GoodEveningComponent from './GoodEveningComponent';
import GoodMorningComponent from './GoodMorningComponent';


function App() {
  const greeting = "morning"
  return (
    <div>
     {greeting === "morning" ? <GoodMorningComponent/> : <GoodEveningComponent/>}
    </div>
  );
}

export default App;
