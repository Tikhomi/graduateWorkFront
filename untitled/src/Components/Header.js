import React, { Component } from "react";
import "./Header.css";
import {
    Navbar,
    Nav,
    Container,
} from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Routes } from "react-router-dom";
import About from "../Pages/About";
import Home from "../Pages/Home";
import Services from "../Pages/Services";
import Doctors from "../Pages/Doctors";
import Blog from "../Pages/Blog";
import BlogPageOne from "../Pages/BlogPageOne";
import BlogPageTwo from "../Pages/BlogPageTwo";
import BlogPageThree from "../Pages/BlogPageThree";
import BlogPageFour from "../Pages/BlogPageFour";
import Contacts from "../Pages/Contacts";
import Test from "../Pages/Test";
import Register from "../Pages/Register";
import Login from "../Pages/Login";
import Term from "../Pages/Term";

import DoctorF from "../Pages/DoctorF";
import PaymentF from "../Pages/PaymentF";
import ServiceF from "../Pages/ServiceF";
import ClientF from "../Pages/ClientF";
import AppointmentF from "../Pages/AppointmentF";
import ForClientF from "../Pages/ForClientF";
import RedactorF from "../Pages/RedactorF";

import DeleteD from "../Pages/DeleteD";
import DeleteS from "../Pages/DeleteS";
import DeleteP from "../Pages/DeleteP";

import CabClient from "../Pages/CabClient";
import CabAdmin from "../Pages/CabAdmin";
import CabDoctor from "../Pages/CabDoctor";

import SMS from "../Pages/SMS";
import FormTest from "../Pages/FormTest";
import Ex from "../Pages/Ex";


export default class header extends Component {
    render() {
        return (
            <>
                <Navbar collapseOnSelect expand="md" variant="dark" className="header">
                    <Container>
                        <Navbar.Brand href="/Home" className="logo">
                            CONVINSING
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse>
                            <Nav>
                                <Nav.Link href="/About">о клинике</Nav.Link>
                                <Nav.Link href="/Services">услуги</Nav.Link>
                                <Nav.Link href="/Doctors">специалисты</Nav.Link>
                                <Nav.Link href="/Blog">блог</Nav.Link>
                                <Nav.Link href="/Login">личный кабинет</Nav.Link>
                                <div className="phone"><Nav.Link><a className="num">+7 (901) 302-17-97</a></Nav.Link></div>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>

                <Router>
                    <Routes>
                        <Route exact path="/Home" element={<Home />} />
                        <Route exact path="/About" element={<About />} />
                        <Route exact path="/Services" element={<Services />} />
                        <Route exact path="/Doctors" element={<Doctors />} />
                        <Route exact path="/Blog" element={<Blog />} />
                        <Route exact path="/Register" element={<Register />} />
                        <Route exact path="/Login" element={<Login />} />
                        <Route exact path="/Term" element={<Term />} />
                        <Route exact path="/BlogPageOne" element={<BlogPageOne />} />
                        <Route exact path="/BlogPageTwo" element={<BlogPageTwo />} />
                        <Route exact path="/BlogPageThree" element={<BlogPageThree />} />
                        <Route exact path="/BlogPageFour" element={<BlogPageFour />} />
                        <Route exact path="/Contacts" element={<Contacts />} />
                        <Route exact path="/Test" element={<Test />} />
                        <Route exact path="/DoctorF" element={<DoctorF />} />
                        <Route exact path="/PaymentF" element={<PaymentF />} />
                        <Route exact path="/ServiceF" element={<ServiceF />} />
                        <Route exact path="/ClientF" element={<ClientF />} />
                        <Route exact path="/AppointmentF" element={<AppointmentF />} />
                        <Route exact path="/ForClientF" element={<ForClientF />} />
                        <Route exact path="/RedactorF" element={<RedactorF />} />
                        <Route exact path="/DeleteD" element={<DeleteD />} />
                        <Route exact path="/DeleteS" element={<DeleteS />} />
                        <Route exact path="/DeleteP" element={<DeleteP />} />
                        <Route exact path="/FormTest" element={<FormTest />} />
                        <Route exact path="/SMS" element={<SMS />} />
                        <Route exact path="/CabClient" element={<CabClient />} />
                        <Route exact path="/CabAdmin" element={<CabAdmin />} />
                        <Route exact path="/CabDoctor" element={<CabDoctor />} />

                        <Route exact path="/Ex" element={<Ex />} />
                    </Routes>
                </Router>
            </>
        )
    }
}