import { BrowserRouter as Routes, Route, Router } from "react-router-dom";

import Navbar from "./Navbar"

import Home from "../views/Home"
import Search from "../views/Search"
import Collection from "../views/Collection"

//{/*switch artık Routes  */}

function Content() {
    return (
        <main className="flex-auto">
            <Navbar />
            <Router>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/search" element={<Search />} />
                <Route path="/collection" element={<Collection />} />
            </Routes>
            </Router>
        </main>
    )
}

export default Content
