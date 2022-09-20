import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { NotFound } from './components/NotFound';
import { Preloder } from './components/Preloder';

import './sass/style.scss';
import { Auth, Login } from './components/features/auth';
import { Layout } from './components/Layout';
import { Profile } from './pages/Profile';
import { PersonalArea } from './pages/Profile/routes/PersonalArea';
import { Orders } from './pages/Profile/routes/Orders';
import { Promocodes } from './pages/Profile/routes/Promocodes';
import { Settings } from './pages/Profile/routes/Settings';

const Home = React.lazy(() => import(/* webpackChunkName: "Home" */ './pages/Home'));
const Shop = React.lazy(() => import(/* webpackChunkName: "Shop" */ './pages/Shop'));
const Contact = React.lazy(() => import(/* webpackChunkName: "Contact" */ './pages/Contact'));
const Cart = React.lazy(() => import(/* webpackChunkName: "Cart" */ './pages/Cart'));
const Checkout = React.lazy(() => import('./pages/Checkout'));
const ProductDetails = React.lazy(
    () => import(/* webpackChunkName: "ProductDetails" */ './pages/ProductDetails'),
);
const PreLogin = React.lazy(
    () => import(/* webpackChunkName: "Prelogin" */ './components/features/auth/PreLogin'),
);

const App = () => {
    // const token = localStorage.getItem('token');

    // const { data = [] } = useCheckAuthQuery(token || '');
    // console.log(data);

    return (
        <>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route
                        index
                        element={
                            <Suspense fallback={<Preloder />}>
                                <Home />
                            </Suspense>
                        }
                    />
                    <Route
                        path="shop"
                        element={
                            <Suspense fallback={<Preloder />}>
                                <Shop />
                            </Suspense>
                        }
                    />
                    <Route
                        path="product/:id"
                        element={
                            <Suspense fallback={<Preloder />}>
                                <ProductDetails />
                            </Suspense>
                        }
                    />
                    <Route
                        path="cart"
                        element={
                            <Suspense fallback={<Preloder />}>
                                <Cart />
                            </Suspense>
                        }
                    />
                    <Route
                        path="checkout"
                        element={
                            <Suspense fallback={<Preloder />}>
                                <Checkout />
                            </Suspense>
                        }
                    />
                    <Route
                        path="contact"
                        element={
                            <Suspense fallback={<Preloder />}>
                                <Contact />
                            </Suspense>
                        }
                    />
                    <Route
                        path="prelogin"
                        element={
                            <Suspense fallback={<Preloder />}>
                                <PreLogin />
                            </Suspense>
                        }
                    />
                    <Route path="profile" element={<Profile />}>
                        <Route index element={<PersonalArea />} />
                        <Route path="orders" element={<Orders />} />
                        <Route path="promocodes" element={<Promocodes />} />
                        <Route path="settings" element={<Settings />} />
                    </Route>
                    <Route
                        path="*"
                        element={
                            <Suspense fallback={<Preloder />}>
                                <NotFound />
                            </Suspense>
                        }
                    />
                </Route>
                <Route
                    path="login"
                    element={
                        <Suspense fallback={<Preloder />}>
                            <Login />
                        </Suspense>
                    }
                />
                <Route
                    path="auth"
                    element={
                        <Suspense fallback={<Preloder />}>
                            <Auth />
                        </Suspense>
                    }
                />
            </Routes>
        </>
    );
};

export default App;
