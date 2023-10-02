import Link from 'next/link';
import { getMenuData } from './menu-data';
import { I18N_NS } from '../../utils/i18n-utils';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

const NavMenus = () => {
  const { t } = useTranslation(I18N_NS);
  const [menuData, setMenuData] = useState([]);

  useEffect(() => {
    const data = getMenuData(t);
    setMenuData(data);
  }, []);

  return (
    <ul>
      {menuData?.map((menu, i) => {
        const dropdownClass = menu.has_dropdown ? 'has-dropdown' : '';
        const megaMenuClass = menu.mega_menu ? 'has-mega-menu' : '';
        const menuItem = (
          <li key={i} className={`${dropdownClass} ${megaMenuClass}`}>
            <Link href={menu.link}>
              <a>
                {menu.title}{' '}
                {menu.has_dropdown && <i className="fal fa-angle-down" />}
              </a>
            </Link>
            {menu.has_dropdown && (
              <ul className="submenu text-start">
                {menu.sub_menus.map((subMenu, i) => (
                  <li key={i}>
                    <Link href={subMenu.link}>
                      <a>{subMenu.title}</a>
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        );

        return menu.render ? menuItem : null;
      })}
    </ul>
  );
};

export default NavMenus;
