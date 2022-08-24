import React from 'react';
import { BrowserRouter, Routes, Route, Redirect, useRouteMatch } from 'react-router-dom';
import { Confirmation } from '../components/confirmation/confirmation';
import { Delivery } from '../components/delivery/delivery';
import { Payment } from '../components/payment/payment';
import { CheckoutRoutePath } from './checkout-route-path';
export default function CheckoutRoutes() {
    let { path } = useRouteMatch();
    return (
     <Routes></Routes>
    )
