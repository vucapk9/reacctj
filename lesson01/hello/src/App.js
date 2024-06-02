import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
      </header>
      <Nvv/>
        <Nvv email="nguyenvanvu642004@gmail.com" phone="0812056108"/>
        <Nvv email="admin@gmail.com" phone="0913456729" company="Tập đoàn NTU" />
    </div>
  );
}

export default App;
