import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Header, Footer, Hero } from './components';
import Blog from './pages/Blog';
import { NotFound } from './pages/NotFound';
import { Preloder } from './components/Preloder';

import './sass/style.scss';
import { Auth, Login } from './pages/Auth';

const Home = React.lazy(() => import(/* webpackChunkName: "Home" */ './pages/Home'));
const Shop = React.lazy(() => import(/* webpackChunkName: "Shop" */ './pages/Shop'));
const Contact = React.lazy(() => import(/* webpackChunkName: "Contact" */ './pages/Contact'));
const Cart = React.lazy(() => import(/* webpackChunkName: "Cart" */ './pages/Cart'));
const Checkout = React.lazy(() => import('./pages/Checkout'));
const ProductDetails = React.lazy(
    () => import(/* webpackChunkName: "ProductDetails" */ './pages/ProductDetails'),
);
const PreLogin = React.lazy(
    () => import(/* webpackChunkName: "Prelogin" */ './pages/Auth/PreLogin'),
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
                    <Route
                        path="/contact"
                        element={
                            <Suspense fallback={<Preloder />}>
                                <Contact />
                            </Suspense>
                        }
                    />
                    <Route
                        path="/prelogin"
                        element={
                            <Suspense fallback={<Preloder />}>
                                <PreLogin />
                            </Suspense>
                        }
                    />
                    <Route
                        path="/login"
                        element={
                            <Suspense fallback={<Preloder />}>
                                <Login />
                            </Suspense>
                        }
                    />
                    <Route
                        path="/auth"
                        element={
                            <Suspense fallback={<Preloder />}>
                                <Auth />
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
