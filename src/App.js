import './App.css';
import Build from './components/Build';
import Flow from './components/Flow';
import Font from './components/Font';
import Footer from './components/Footer';
import Huddle from './components/Huddle';
import Image from './components/Image';
import User from './components/User';

function App() {
  return (
    <div className="App">
        <Huddle/>
        <Build/>
        <Font/>
        <Image/>
        <Flow/>
        <User/>
        <Footer/>
    </div>
  );
}

export default App;
