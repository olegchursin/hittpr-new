import Link from 'next/link';
import { menuData } from './menu-data';
import { I18N_NS } from '../../utils/i18n-utils';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

const NavMenus = () => {
  const { t } = useTranslation(I18N_NS);
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(menuData);
  }, []);

  return (
    <ul>
      {data?.map((menu, i) => {
        const dropdownClass = menu.has_dropdown ? 'has-dropdown' : '';
        const megaMenuClass = menu.mega_menu ? 'has-mega-menu' : '';
        const menuItem = (
          <li key={i} className={`${dropdownClass} ${megaMenuClass}`}>
            <Link href={menu.link}>
              <>
                {t(menu.title)}{' '}
                {menu.has_dropdown && <i className="fal fa-angle-down" />}
              </>
            </Link>
            {menu.has_dropdown && (
              <ul className="submenu text-start">
                {menu.sub_menus.map((subMenu, i) => (
                  <li key={i}>
                    <Link href={subMenu.link}>{t(subMenu.title)}</Link>
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
