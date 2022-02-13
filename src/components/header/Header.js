import './Header.css'

function Header (){
    return(
        <>
           <nav>
           <h1>Travel Distination</h1>
           <img id="logoH"src="https://www.onlinelogomaker.com/blog/wp-content/uploads/2017/09/travel-logo-design.jpg" alt="" />
        <ul id="navigation">
          <li><a href="#">Main</a></li>
          <li><a href="#">Second</a></li>
          <li>
            <input type="search" placeholder="Search" />
            <input
              type="submit"
              value="Search"
              id="search"
            />
          </li>
        </ul>
      </nav>
        </>
        )
    }
export default Header;