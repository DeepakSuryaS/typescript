import { type FC, type ReactNode } from "react";

type ImageType = {
  src: string;
  alt: string;
};

interface HeaderProps {
  image: ImageType;
  children: ReactNode;
}

const Header: FC<HeaderProps> = ({ image, children }) => {
  const { src, alt } = image;

  return (
    <header>
      <img src={src} alt={alt} />
      {children}
    </header>
  );
};

export default Header;
