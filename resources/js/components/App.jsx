import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Layout.jsx";
import Home from "../pages/Home.jsx";
import About from "../pages/About.jsx";
import Contact from "../pages/Contact.jsx/";
import EventsList from "../events/EventsList.jsx";
import EventCreate from "../events/EventCreate.jsx";
import EventDetails from "../events/EventDetails.jsx";
function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="events" element={<EventsList />} />
                    <Route path="events/create" element={<EventCreate />} />
                    <Route path="events/:id" element={<EventDetails />} />
                    <Route path="about" element={<About />} />{" "}
                    <Route path="contact" element={<Contact />} />{" "}
                </Route>
            </Routes>
        </Router>
    );
}

export default App;
