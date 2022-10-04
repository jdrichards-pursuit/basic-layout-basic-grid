import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <Sidebar />
        <Main />
      </div>
      <Footer />
    </div>
  );
}

export default App;
