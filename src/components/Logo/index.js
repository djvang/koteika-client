import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/" className="logo">
      <a>
        <img className="logo__image" src="/images/logo.svg" alt="" />
      </a>
    </Link>
  );
};

export default Logo;
