import logo from './logo.svg';
import './App.css';
import CricketPlayer from './components/CricketPlayer';

function App() {
  return (
    <div className="App">
     <div className='mainContainer'>
    <h1>this file indicates the concept of push and pull</h1>
      <img src='./images/rohit.jpg' alt=''className='playersPic'></img>
      <h1>name:rohit</h1>
    <h2>team:mumbai</h2>
    <h2>role; captain</h2>
     </div>
     <div className='mainContainer'>
      <img src='./images/virat.jpg' alt=''className='playersPic'></img>
      <h1>name:virat kohli</h1>
    <h2>team:Banglore</h2>
    <h2>role: captain</h2>
     </div>
     <div className='mainContainer'>
      <img src='./images/dhoni.jpg' alt=''className='playersPic'></img>
      <h1>name:dhoni</h1>
    <h2>team:csk</h2>
    <h2>role:captain</h2>
     </div>
     <div className='mainContainer'>
      <img src='./images/pant.jpg' alt=''className='playersPic'></img>
      <h1>name:pant</h1>
    <h2>team:delhi</h2>
    <h2>role:captain</h2>
     </div>
     <hr></hr>
     <CricketPlayer name="virat kohli"team="rcb" role="captain"picURL="./images/virat.jpg"></CricketPlayer>
          
    </div>
  );
}

export default App;
