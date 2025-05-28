// resources/js/components/Header.jsx
function Header() {
    return (
        <header
            style={{
                borderBottom: "1px solid #ccc",
                paddingTop: "10px",
            }}
        >
            <div>
                <ul>
                    <li>
                        <a href="/events">Events</a>
                    </li>
                    <li>
                        <a href="/events/create">Add Events</a>
                    </li>
                </ul>
            </div>
        </header>
    );
}

export default Header;
