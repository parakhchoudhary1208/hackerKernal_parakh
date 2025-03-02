import Header from './components/Header';
import Footer from './components/Footer';
import Projects from './components/Projects';
import About from './components/About';
import News from './components/News';
import Services from './components/Services';
import Contact from './components/Contact';
import  ReactLenis from 'lenis/react';

const Home = () => {
    return (
        <ReactLenis root>
            <main>
                <Header />
                <Projects />
                <About />
                <News />
                <Services />
                <Contact />
                <Footer />
            </main>
        </ReactLenis>
    );
};

export default Home;