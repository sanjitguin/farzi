
import '../style/home-layout.css';
import { NavLink, Outlet } from 'react-router-dom';
import { useParams } from 'react-router-dom';
const HomeLayout  = () => {

  const params = useParams()
  const activeStyles = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616"
  }
  return (
    <>
      <div>
          <nav className='host-nav'>
            <NavLink to={`/browse/${params.id}`} 
              end
              style={({ isActive }) => isActive ? activeStyles : null}> Apps</NavLink>
            <NavLink to={`/browse/${params.id}/ui-element`}
              style={({ isActive }) => isActive ? activeStyles : null}>UI Components</NavLink>
            <NavLink to={`/browse/${params.id}/screen-element`}
              style={({ isActive }) => isActive ? activeStyles : null}>Screens</NavLink>
          </nav>
      </div>
      <Outlet />
    </>
  );
}

export default HomeLayout;
