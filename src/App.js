import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { WebsiteRouter } from './Routes/WebsiteRouter';


function App() {
  return (
    <div className='bg-black min-h-screen'>
      <BrowserRouter>
        <WebsiteRouter/>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
