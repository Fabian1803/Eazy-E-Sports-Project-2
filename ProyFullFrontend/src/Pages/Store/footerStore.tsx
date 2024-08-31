import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaypal, faCcVisa } from '@fortawesome/free-brands-svg-icons';
import { faBook, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

interface FooterStoreProps {}

const FooterStore: React.FC<FooterStoreProps> = () => {

  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const handleToggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <footer className='footerCont'>
      <div className="cont1">
        <div className="logo" translate='no'>
          <Link className='navLink' to="/home">Eazy-E<br />Sports</Link>
        </div>
        <div className="contInfo">
          <ul className='ul'>
            {['TIENDAS', 'CUENTA', 'INFORMACIÓN', 'REDES SOCIALES', 'ÚNETE A NOSOTROS'].map((title, index) => (
              <li
                key={index}
                className={`li ${activeIndex === index ? 'active' : ''}`}
              >
                <div className="pTitle" onClick={() => handleToggle(index)}>
                  <p>{title}</p>
                  <div className={`btnF ${activeIndex === index ? 'active' : ''}`}>
                    <FontAwesomeIcon icon={faChevronUp} />
                  </div>
                </div>
                <ul>
                  {index === 0 && (
                    <>
                      <li>
                        <a href="">
                          <p>Tienda-Lima</p>
                          <p style={{ fontSize: '12px', color: '#97A2C2' }}>r. Junín cdra. 1</p>
                        </a>
                      </li>
                      <li>
                        <a href="">
                          <p>Tienda-Callao</p>
                          <p style={{ fontSize: '12px', color: '#97A2C2' }}>Av. Óscar R. Benavides 3866</p>
                        </a>
                      </li>
                    </>
                  )}
                  {index === 1 && (
                    <>
                      <li><a href="">Mi Cuenta</a></li>
                      <li><a href="">Registrate</a></li>
                      <li><a href="">Soporte</a></li>
                    </>
                  )}
                  {index === 2 && (
                    <>
                      <li><a href="">Políticas</a></li>
                      <li><a href="">Términos y condiciones</a></li>
                    </>
                  )}
                  {index === 3 && (
                    <>
                      <li><a href="">Instagram</a></li>
                      <li><a href="">Facebook</a></li>
                      <li><a href="">TikTok</a></li>
                    </>
                  )}
                  {index === 4 && (
                    <li><a href="">Trabaja con Nosotros</a></li>
                  )}
                </ul>
              </li>
            ))}
            <li className='li'>
              <div className="logoPagos">
                <FontAwesomeIcon icon={faPaypal} />
                <FontAwesomeIcon icon={faCcVisa} />
              </div>
            </li>
          </ul>
        </div>
        <div className="book">
          <a href="">
            <FontAwesomeIcon icon={faBook} />
            <p>Libro de<br /><b>reclamaciones</b></p>
          </a>
        </div>
      </div>
      <div className="cont2">
        <p style={{ fontSize: '12px' }}>Todos los derechos Reservados Easy-E Sport 2024</p>
        <p style={{ fontSize: '10px' }}>Images are the property of Adidas and Nike ecommerce</p>
      </div>
    </footer>
  );
};

export default FooterStore;
