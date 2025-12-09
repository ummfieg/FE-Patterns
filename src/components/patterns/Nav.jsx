import React, { useEffect, useState } from 'react';
import '../../styles/components-style/nav-style.css';

const menuItems = [
  '첫 번째 메뉴',
  '두 번째 메뉴',
  '세 번째 메뉴',
  '네 번째 메뉴',
  '다섯 째 메뉴',
];

const Nav = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const [pageIndex, setPageIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentPage = Math.floor(window.scrollY / window.innerHeight);
      setPageIndex(currentPage);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClickedMenu = (index) => {
    setPageIndex(index);
    window.scrollTo({
      top: index * window.innerHeight,
      behavior: 'smooth',
    });
  };

  return (
    <div className="index-styles__Container">
      <div
        className="line-nav__Container"
        onMouseEnter={() => setActiveMenu(true)}
        onMouseLeave={() => setActiveMenu(null)}
      >
        <nav className="line-nav__Wrapper ">
          <ul className="line-nav__DotWrapper">
            {menuItems.map((_, i) => (
              <li key={i} className="line-nav__list">
                <button
                  type="button"
                  className={pageIndex === i ? 'active' : ''}
                ></button>
              </li>
            ))}
          </ul>
        </nav>

        <div className={`lineNav-styles ${activeMenu ? 'active' : ''}`}>
          {menuItems.map((text, i) => (
            <div
              key={i}
              onClick={() => handleClickedMenu(i)}
              className={`lineNav-styles__Items ${pageIndex === i ? 'active' : ''}`}
            >
              {text}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Nav;
