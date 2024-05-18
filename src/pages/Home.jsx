import { DocumentTitle } from '../components/DocumentTitle';
import css from './Pages.module.css';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

const Home = () => {
 const { isLoggedIn } = useAuth();
  
  return (
    <>
      <DocumentTitle>Home</DocumentTitle>
      <div className={css.container}>
        <img src="https://media.tenor.com/4evdvK5vGrcAAAAi/phone-vibrating.gif" alt="Phone gif" className={css.gif} />
        <h1 className={css.title}>
          Contacts manager welcome page
        </h1>
       
      {!isLoggedIn &&  <p className={css.link}>Do you want to <NavLink to="/register" className={css.span}>Register</NavLink> or <NavLink to="/login" className={css.span}>Log In</NavLink> ?</p>}
     
      </div>
    </>
  );
}

export default Home;