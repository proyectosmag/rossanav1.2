import Head from "next/head";
import NavBar from './NavBar/NavBar'
import Futter from './Footer/Footer'
const Layaut = ({ children }) => (
<>
<Head>
    <title>Real Estate</title>
</Head>
<div>
    <header className="sticky top-0 z-30 ">
        <NavBar></NavBar>
    </header>
    <main>
        { children }
    </main>
    <footer>
        <Futter/>
    </footer>
</div>
</>
);
 export default Layaut;