import { FC } from 'react';

interface Props {
  onClick?: () => void;
  title: string;
}
const Button: FC<Props> = ({ onClick, title }) => (
  <>
    <button
      className="main-button"
      onClick={onClick}
    >
      {title}
    </button>
  </>
);
export default Button;
