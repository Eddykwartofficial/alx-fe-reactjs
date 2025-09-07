import Header from './Header';
import MainContent from './MainContent';
import Footer from './Footer';
import UserProfile from './components/UserProfile';

function App() {
    return (
        <div style={{
            minHeight: '100vh',
            backgroundColor: '#f8f9fa'
        }}>
            <Header />
            <UserProfile 
                name="Alice" 
                age="25" 
                bio="Loves hiking and photography" 
            />
            <MainContent />
            <Footer />
        </div>
    );
}

export default App;