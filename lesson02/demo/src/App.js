import logo from './logo.svg';
import './App.css';
import Func_JSX_NguyenVanVu from './components/Func_JSX_NguyenVanVu';

function App() {
  return (
    <section className="App">
      <h1>Demo JSX</h1>
      {/* function component demo */}
      <Func_JSX_NguyenVanVu/>
      <Func_JSX_NguyenVanVu fullName="Nguyen Van Vu" age="21" />

      <Class_NguyenVanVu/>
      <hr/>
      <Class_NguyenVanVu info="Hoc ReactJS" time="11" />
    </section>
  );
}

export default App;
