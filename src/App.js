import './App.css';
// import the useState Hook from React
import { useState } from 'react';
import Contact from './Contact';
import AccountPage from './AccountPage';
import Shop from './Shop';
import SalesTeam from './SalesTeam';
import DevTeam from './DevTeam';
import Blog from './Blog';
import BlogPost from './BlogPost';
// import 404 component
import PageNotFound from './PageNotFound';
// import the Link component (this serves as the routing equivalent of an anchor tag)
import { Link, Routes, Route } from 'react-router-dom';

function App() {

  // initialize a piece of state to represent the user's sign-in status
  const [ loggedIn, setLoggedIn ] = useState(false);

  // a click event handler function which tracks whether the user is signed in (or not)
  function handleClick() {

    // when the button is clicked we update the boolean value of the loggedIn state variable to be the opposite of what it is
    setLoggedIn(!loggedIn)

  }

  return (
    <>

      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            {/* this will cause a page refresh which we DO NOT WANT */}
            {/* <a href="/shop">Shop</a> */}

            <Link to="/shop">Shop</Link>
          </li>
          <li>
            {/* link components are just like anchor tags without the page refresh */}
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
        </ul>
      </nav>

      {/* ROUTING CONFIGURATION aka URL address logic */}
      <Routes>
        {/* in here is where we define our paths */}

        {/* You should always have defined path for the homepage */}
        <Route path="/" element={<h1>Home</h1>} />

        <Route path="/shop" element={<Shop />} />

        <Route path="/contact" element={<Contact />}>
          {/* define your nested routes in here */}

          <Route path="/contact/sales" element={ <SalesTeam /> } />

          <Route path="/contact/dev" element={ <DevTeam /> } />
        </Route>

        <Route path="/blog" element={ <Blog /> } >
			{/* routes can involve URL parameters */}
          <Route path="/blog/:postNumber" element={ <BlogPost /> } />
        </Route>

        {/* define a route for ANY page address that you haven't created a path for */}
        <Route path="*" element={ <PageNotFound /> } />
      </Routes>

      <button onClick={ handleClick } >
      {
        loggedIn
          ? 'Sign out'
          : 'Sign in'
      }
      </button>

      {/* if the user is signed in, show me the accountpage */}

      {
        loggedIn
          ? <AccountPage />
          : null
      }

      {/* you CANNOT use more than 1 Routes component within a file */}
      {/* <Routes>

        <Route path="/blog" element={<p>No blog found</p>} />

      </Routes> */}

    </>
  );
}

export default App;
