import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header/Header'
import Body from './components/body/Body'

function App() {
  return (
    <div className="App">
      <Header/>
      <p id='txt'>UI/UX {'>'} Refer & Earn</p>
      <Body/>
    </div>
  );
}

export default App;
