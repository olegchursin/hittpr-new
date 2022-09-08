import Link from 'next/link';
import { CONTACT_US_ROUTE } from '../../util/routes';

const ContactUsBtn = () => {
  return (
    <Link href={CONTACT_US_ROUTE}>
      <a className="btn btn-green-900 icon-arrow-right-white text-heading-6 color-white">
        Связаться с нами
      </a>
    </Link>
  );
};

export default ContactUsBtn;
