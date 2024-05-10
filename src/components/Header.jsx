import Logo from "./Logo"
import More from "./More";
import Navigation from "./Navigation"

const Header = () => {
  return (
    <div className="font-bold flex justify-between px-[10%] py-4 items-center text-lg">
      <Logo />
      <Navigation />
      <More/>
    </div>
  );
}

export default Header
