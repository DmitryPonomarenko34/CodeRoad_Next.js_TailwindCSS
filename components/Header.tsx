import Logo from "./Logo";
import NavLinks from "./NavLinks";

export default function Header() {
  return (
    <header>
      <div className="container py-4">
        <div className="flex justify-between relative items-center">
          <Logo />
          <NavLinks />
        </div>
      </div>
    </header>
  );
}
