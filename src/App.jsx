import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductsPreview from './components/ProductsPreview';
import AllProductsSection from './components/AllProductsSection';
import InquiryForm from './components/InquiryForm';
import MapSection from './components/MapSection';
import Footer from './components/Footer';

const App = () => {
    return (
        <BrowserRouter>
            <div className="min-h-screen bg-pastel-blue font-sans selection:bg-soft-teal/30 selection:text-deep-teal">
                <Navbar />
                <main>
                    <section id="home">
                        <Hero />
                    </section>
                    <section id="products">
                        <ProductsPreview />
                        <div id="all-products">
                            <AllProductsSection />
                        </div>
                    </section>
                    <section id="inquiry">
                        <InquiryForm />
                    </section>
                    <section id="location">
                        <MapSection />
                    </section>
                </main>
                <Footer />
            </div>
        </BrowserRouter>
    );
};

export default App;
