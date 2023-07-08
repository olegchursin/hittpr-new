export interface BlogDataItem {
  id: number;
  img: string;
  meta_tag?: string;
  date?: string;
  author?: string;
  comment?: string;
  views?: string;
  title?: string | JSX.Element;
  short_desc?: string | JSX.Element;
  duration?: string;
  delay?: string;
  big?: boolean;
  home?: boolean;
}

export type BlogData = BlogDataItem[];

const blogData: BlogData = [
  {
    id: 1,
    img: '/assets/img/blog/blog-1.jpg',
    meta_tag: 'Tutorials',
    date: 'February. 20.2022',
    author: 'NAIM',
    comment: '10',
    views: '1,326',
    title: 'How to add a count up animation the webflow site.',
    short_desc:
      'At Collax we specialize in designing, building, shipping and scaling beautiful, usable products with blazing-fast',
    duration: '.6s',
    delay: '.4s',
    home: true
  },
  {
    id: 2,
    img: '/assets/img/blog/blog-2.jpg',
    meta_tag: 'Business',
    date: 'February. 22.2022',
    author: 'Mamun',
    comment: '09',
    views: '2,226',
    title: 'How to grow your business with collax digital solution.',
    short_desc:
      'At Collax we specialize in designing, building, shipping and scaling beautiful, usable products with blazing-fast',
    duration: '.7s',
    delay: '.6s',
    home: true
  },
  // home two
  {
    id: 3,
    img: '/assets/img/blog/blog-3.jpg',
    meta_tag: 'Tutorials',
    date: 'March. 20.2022',
    author: 'UDDIN',
    comment: '21',
    views: '1,426',
    title: 'When and how to use Freelancers In Your Organization',
    short_desc:
      'At Collax we specialize in designing, building, shipping and scaling beautiful, usable products with blazing-fast',
    duration: '.3s',
    delay: '.5s'
  },
  {
    id: 4,
    img: '/assets/img/blog/blog-4.png',
    meta_tag: 'Business',
    date: 'April. 22.2022',
    author: 'FAHIM',
    comment: '26',
    views: '3,226',
    title: 'A complete guide to mobile app marketing',
    short_desc:
      'At Collax we specialize in designing, building, shipping and scaling beautiful, usable products with blazing-fast',
    duration: '.5s',
    delay: '.8s'
  },
  // home three
  {
    id: 5,
    img: '/assets/img/blog/blog-5.jpg',
    meta_tag: 'Development',
    date: 'March 22.07.22',
    author: 'AHMED',
    comment: '20',
    views: '1,526',
    title: 'Godaddy user flow solution.',
    short_desc:
      'At Collax we specialize in designing, building, shipping and scaling beautiful',
    duration: '.3s',
    delay: '.6s'
  },
  {
    id: 6,
    img: '/assets/img/blog/blog-6.png',
    meta_tag: 'ui/ux Design',
    date: 'April 22.07.22',
    author: 'NAIM',
    comment: '25',
    views: '1,886',
    title: 'What is ui/ux design trend.',
    short_desc:
      'At Collax we specialize in designing, building, shipping and scaling beautiful',
    duration: '.5s',
    delay: '.8s'
  },
  {
    id: 7,
    img: '/assets/img/blog/blog-7.jpg',
    meta_tag: 'Web Design',
    date: 'June 22.07.22',
    author: 'FARHAN',
    comment: '32',
    views: '1,326',
    title: 'Create you design system like.',
    short_desc:
      'At Collax we specialize in designing, building, shipping and scaling beautiful',
    duration: '.7s',
    delay: '1s'
  },
  // home 4
  {
    id: 8,
    img: '/assets/img/blog/blog-8.jpg',
    meta_tag: 'Development',
    date: 'July 22, 2022',
    author: 'SAMRAT',
    comment: '33',
    views: '1,426',
    title: 'Godaddy user flow solution.',
    short_desc:
      'At Collax we specialize in designing, building, shipping and scaling beautifu. At Collax we specialize in designing, building, shipping and scaling beautiful.',
    big: true
  },
  {
    id: 9,
    img: '/assets/img/blog/blog-sm-1.jpg',
    meta_tag: 'Design',
    date: 'April 22, 2022',
    author: 'MATIUR',
    comment: '36',
    views: '1,626',
    title: 'Godaddy user flow solution for every individual',
    short_desc:
      'At Collax we specialize in designing, building, shipping and scaling beautifu. At Collax we specialize in designing, building, shipping and scaling beautiful.'
  },
  {
    id: 10,
    img: '/assets/img/blog/blog-sm-2.png',
    meta_tag: 'Web Design',
    date: 'March 22, 2022',
    author: 'SALIM',
    comment: '38',
    views: '1,426',
    title: 'Business solution for every individual',
    short_desc:
      'At Collax we specialize in designing, building, shipping and scaling beautifu. At Collax we specialize in designing, building, shipping and scaling beautiful.'
  },
  {
    id: 12,
    img: '/assets/img/blog/blog-sm-3.png',
    meta_tag: 'App Design',
    date: 'June 22, 2022',
    author: 'NAIM',
    comment: '45',
    views: '1,926',
    title: 'How to gain pro experience ar figma update version',
    short_desc:
      'At Collax we specialize in designing, building, shipping and scaling beautifu. At Collax we specialize in designing, building, shipping and scaling beautiful.'
  }
];

export default blogData;
