import React from 'react';
import { FaEnvelope } from 'react-icons/fa';
import styles from './EmailLink.module.css';

const EmailLink = ({
  email = 'pr@hittpr.com',
  subject = 'Контакт - hittpr.com',
  hasIcon = false,
  iconSize = '1rem'
}) => {
  const href = `mailto:${email}?subject = ${subject}`;
  const icon = hasIcon ? (
    <FaEnvelope size={iconSize} className={styles.icon} />
  ) : null;

  return (
    <a href={href}>
      <span>{icon}</span>
      <span>{email}</span>
    </a>
  );
};

export default EmailLink;
