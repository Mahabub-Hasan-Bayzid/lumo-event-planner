import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Layout.jsx";
import Home from "../pages/Home.jsx";
import About from "../pages/About.jsx";
import Contact from "../pages/Contact.jsx";
import EventsList from "../events/EventsList.jsx";
import EventCreate from "../events/EventCreate.jsx";
import EventDetails from "../events/EventDetails.jsx";
import Login from "../auth/Login.jsx";
import Register from "../auth/Register.jsx";
import Dashboard from "../auth/Dashboard.jsx";
import AdminLayout from "../admin/AdminLayout.jsx";
import Events from "../admin/Events.jsx";
import AdminHome from "../admin/AdminHome.jsx";
import ProtectedRoute from "../components/ProtectedRoute.jsx"; // 👈 ADD THIS
import Calendar from "./Calendar.jsx";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="events" element={<EventsList />} />
                    <Route path="events/create" element={<EventCreate />} />
                    <Route path="events/:id" element={<EventDetails />} />
                    <Route path="about" element={<About />} />
                    <Route path="contact" element={<Contact />} />
                    <Route path="login" element={<Login />} />
                    <Route path="register" element={<Register />} />
                    <Route path="calendar" element={<Calendar />} />
                </Route>

                {/* Admin Routes (Only Logged in user can view) */}
                <Route element={<ProtectedRoute />}>
                    <Route path="/admin" element={<AdminLayout />}>
                        <Route index element={<AdminHome />} />
                        <Route path="events" element={<Events />} />
                        <Route path="about" element={<div>About Page</div>} />
                        <Route
                            path="contact"
                            element={<div>Contact Page</div>}
                        />
                        <Route path="calendar" element={<div>Calendar</div>} />
                    </Route>
                </Route>
            </Routes>
        </Router>
    );
}

export default App;
