import { Routes, Route } from 'react-router-dom'
import ContactPage from './pages/ContactPage';
import HomePage from './pages/HomePage';
import Header from './components/Header';
import Footer from './components/Footer';
import EquinosasDirectoryPage from './pages/EquinosasDirectoryPage';
import EquinosaDetailPage from './pages/EquinosaDetailPage';
import AboutPage from './pages/AboutPage';
import './App.css';

function App() {
    return (
        <div className='App'>
            <Header />
            <Routes>
            {/* <EquinosasDirectoryPage /> */}
            <Route path='/' element={<HomePage/>} />
            <Route path='contact' element={<ContactPage/>}/>
            <Route path='directory' element={<EquinosasDirectoryPage/>} />
            <Route
                path='directory/:equinosaId'
                element={<EquinosaDetailPage/>}
            />
            <Route path='about' element={<AboutPage/>} />
            
            </Routes>
            <Footer />
        </div>
    );
}

export default App;