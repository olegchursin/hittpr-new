import { TFunction } from 'next-i18next';

export const getMenuData = (t: TFunction) => {
  return [
    {
      id: 'about',
      render: true,
      mega_menu: false,
      has_dropdown: true,
      title: t('common.aboutUs'),
      link: '/about',
      sub_menus: [
        { link: '/about', title: t('common.whoWeAre') },
        { link: '/testimonials', title: t('common.testimonials') }
      ]
    },
    {
      id: 'pr',
      render: true,
      mega_menu: false,
      has_dropdown: true,
      title: t('common.pr'),
      link: '/pr',
      sub_menus: [
        { link: '/pr/sport', title: t('common.sport') },
        { link: '/pr/fashion', title: t('common.fashion') },
        { link: '/pr/personal-brand', title: t('common.personalBrand') },
        { link: '/pr/psychology', title: t('common.psychology') },
        { link: '/pr-smi', title: t('common.allPublications') }
      ]
    },
    {
      id: 'portfolio',
      render: true,
      mega_menu: false,
      has_dropdown: false,
      title: t('common.materials'),
      link: '/portfolio'
    },
    {
      id: 'training',
      render: true,
      mega_menu: false,
      has_dropdown: false,
      title: t('common.training'),
      link: '/training'
    },
    {
      id: 1,
      render: false,
      mega_menu: false,
      has_dropdown: true,
      title: 'All',
      link: '/',
      sub_menus: [
        { link: '/', title: 'Creative Agency' },
        { link: '/home-2', title: 'Personal Portfolio' },
        { link: '/home-3', title: 'Startup Business' },
        { link: '/home-4', title: 'Digital Agency' },
        { link: '/home-5', title: 'Business Advisor' },
        { link: '/home-6', title: 'IT Service Agency' },
        { link: '/portfolio', title: 'Portfolio Full Width' },
        { link: '/portfolio-2', title: 'Portfolio Filter 01' },
        { link: '/portfolio-3', title: 'Portfolio Filter 02' },
        { link: '/portfolio-masonry', title: 'Portfolio Masonry' },
        { link: '/portfolio-details', title: 'Portfolio Details' },
        { link: '/about-hittpr', title: 'About HITTPR' },
        { link: '/about', title: 'About Me' },
        { link: '/job', title: 'Job' },
        { link: '/job-details', title: 'Job Details' },
        { link: '/product', title: 'Product' },
        { link: '/product-details', title: 'Product Details' },
        { link: '/service-1', title: 'Service 01' },
        { link: '/service-2', title: 'Service 02' },
        { link: '/service-3', title: 'Service 03' },
        { link: '/service-4', title: 'Service 04' },
        { link: '/service-details', title: 'Service Details' },
        { link: '/testimonial', title: 'Testimonial' },
        { link: '/price', title: 'Price' },
        { link: '/faq', title: 'Faq' },
        { link: '/login', title: 'Login' },
        { link: '/register', title: 'Register' },
        { link: '/cart', title: 'Cart' },
        { link: '/wishlist', title: 'Wishlist' },
        { link: '/checkout', title: 'Checkout' },
        { link: '/404', title: '404' }
      ]
    },
    {
      id: 'blog',
      render: false,
      mega_menu: false,
      has_dropdown: true,
      title: 'Blog',
      link: '/blog',
      sub_menus: [
        { link: '/blog', title: 'Blog Sidebar' },
        { link: '/blog-details', title: 'Blog Details' }
      ]
    },
    {
      id: 'contact',
      render: true,
      mega_menu: false,
      has_dropdown: false,
      title: t('common.contacts'),
      link: '/contact'
    }
  ];
};
