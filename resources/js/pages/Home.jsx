import { useEffect, useState } from "react";
import Banner from "../components/Banner";
import RecentEvents from "../events/RecentEvents";
import Gallery from "../components/Gallery";
import ContactSection from "../components/ContactSection";

const Home = () => {
    const [recentEvents, setRecentEvents] = useState([]);
    useEffect(() => {
        fetch("/api/events")
            .then((res) => res.json())
            .then((data) => {
                const sorted = [...data].sort(
                    (a, b) => new Date(b.date) - new Date(a.date)
                );
                setRecentEvents(sorted.slice(0, 3));
            })
            .catch(console.error);
    }, []);
    return (
        <>
            <Banner />
            <RecentEvents />
            <Gallery />
            <ContactSection />
        </>
    );
};
export default Home;
