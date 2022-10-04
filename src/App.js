import './App.css';
import Footer from './Footer';
import Header from './Header';
import Main from './Main';
import Sidebar from './Sidebar';

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
