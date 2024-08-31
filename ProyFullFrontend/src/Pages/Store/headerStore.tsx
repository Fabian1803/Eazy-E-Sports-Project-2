import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser, faMoon, faSun, faBasketShopping, faMagnifyingGlass, faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';

interface HeaderStoreProps { }

const HeaderStore: React.FC<HeaderStoreProps> = () => {
  const [menuActive, setMenuActive] = useState(false);
  const [temaState, setTemaState] = useState(true);

  const openMenu = () => setMenuActive(!menuActive);
  const changeTheme = () => setTemaState(!temaState);

  useEffect(() => {
    document.body.className = temaState ? 'light' : 'dark';
  }, [temaState]);

  return (
    <header className="header">
      <div className='headerCont'>
        <div className="logoHeader" translate="no">
          <Link className='navLink' to="/home">Eazy-E<br />Sports</Link>
        </div>
        <div className={`menuHeader ${menuActive ? 'active' : 'false'}`}>
          <div className="logoHeader" translate="no">
            <Link className='navLink' to="/home">Eazy-E<br />Sports</Link>
          </div>
          <ul>
            <li><Link className='navLink' to="/women">MUJER</Link></li>
            <li><Link className='navLink' to="/men">HOMBRE</Link></li>
            <li><Link className='navLink' to="/kids">NIÑOS</Link></li>
            <li><Link className='navLink' to="/collection">TIENDA</Link></li>
            <li><Link className='navLink' to="/trend">NUESTRA TIENDA</Link></li>
          </ul>
        </div>
        <div className="optionH">
          <div className="user"><Link className='navLink' to="/auth"><FontAwesomeIcon icon={faCircleUser} /></Link></div>
          <button className="tema" onClick={changeTheme}><FontAwesomeIcon icon={temaState ? faSun : faMoon} /></button>
          <div className="like"><Link className='navLink' to="/follows"><FontAwesomeIcon icon={faHeart} /></Link></div>
          <div className="bag"><Link className='navLink' to="/carrito"><FontAwesomeIcon icon={faBasketShopping} /><p>0</p></Link></div>
          <div className="buscar"><FontAwesomeIcon icon={faMagnifyingGlass} /></div>
          <button className="menuDH" onClick={openMenu}><FontAwesomeIcon icon={menuActive ? faXmark : faBars} /></button>
        </div>
      </div>
    </header>
  );
}

export default HeaderStore;
