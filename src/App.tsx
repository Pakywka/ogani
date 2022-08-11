import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Header, Footer, Hero } from './components';
import Blog from './pages/Blog';
import { NotFound } from './pages/NotFound';
import { Preloder } from './components/Preloder';

import './sass/style.scss';

const Home = React.lazy(() => import(/* webpackChunkName: "Home" */ './pages/Home'));
const Shop = React.lazy(() => import(/* webpackChunkName: "Shop" */ './pages/Shop'));
const Contact = React.lazy(() => import(/* webpackChunkName: "Contact" */ './pages/Contact'));
const Cart = React.lazy(() => import(/* webpackChunkName: "Cart" */ './pages/Cart'));
const Checkout = React.lazy(() => import('./pages/Checkout'));
const ProductDetails = React.lazy(
    () => import(/* webpackChunkName: "ProductDetails" */ './pages/ProductDetails'),
);

const App = () => {
    return (
        <div className="App">
            <Header />
            <Hero />
            <div className="App__content">
                <Routes>
                    <Route
                        path="/"
                        element={
                            <Suspense fallback={<Preloder />}>
                                <Home />
                            </Suspense>
                        }
                    />
                    <Route
                        path="/shop"
                        element={
                            <Suspense fallback={<Preloder />}>
                                <Shop />
                            </Suspense>
                        }
                    />
                    <Route
                        path="/product/:id"
                        element={
                            <Suspense fallback={<Preloder />}>
                                <ProductDetails />
                            </Suspense>
                        }
                    />
                    <Route
                        path="/cart"
                        element={
                            <Suspense fallback={<Preloder />}>
                                <Cart />
                            </Suspense>
                        }
                    />
                    <Route
                        path="/checkout"
                        element={
                            <Suspense fallback={<Preloder />}>
                                <Checkout />
                            </Suspense>
                        }
                    />
                    {/* <Route path="/blog" element={<Suspense><Blog /></Suspense>} /> */}
                    <Route
                        path="/contact"
                        element={
                            <Suspense fallback={<Preloder />}>
                                <Contact />
                            </Suspense>
                        }
                    />
                    <Route
                        path="*"
                        element={
                            <Suspense fallback={<Preloder />}>
                                <NotFound />
                            </Suspense>
                        }
                    />
                </Routes>
            </div>
            <Footer />
        </div>
    );
};

export default App;
