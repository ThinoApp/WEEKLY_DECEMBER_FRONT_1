import './App.scss';
import ClientLogos from './components/ClientLogos/ClientLogos';
import CoreFeatures from './components/CoreFeatures/CoreFeatures';
import Features from './components/Features/Features';
// import Footer from './components/Footer/Footer';
import Heading from './components/Heading/Heading';
import HowItWork from './components/HowItWork/HowItWork';
import NewsLetter from './components/NewsLetter/NewsLetter';
import Pricing from './components/Pricing/Pricing';
import Products from './components/Products/Products';
import Testimonials from './components/Testimonials/Testimonials';
import WhyChooseUs from './components/WhyChooseUs/WhyChooseUs';

function App() {
    return (
        <div className="App">
            <Heading />
            <Features />
            <CoreFeatures />
            <WhyChooseUs />
            <ClientLogos />
            <NewsLetter />
            <Products />
            <HowItWork />
            <Testimonials />
            <Pricing />
            {/* <Footer /> */}
        </div>
    );
}

export default App;
