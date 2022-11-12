import { FC } from 'react';

interface BadgeProps {
  readonly text: string;
}

const Badge: FC<BadgeProps> = ({ text }) => {
  return <span className="tag-1 bg-green-900">{text}</span>;
};

export default Badge;
