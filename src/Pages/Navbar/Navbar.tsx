import { useMediaQuery } from "@/components/hooks/useMediaQuery";
import ActionButtons, { Avatars } from "./ActionButtons";
import { NavigationMenuDemo } from "./AppMenu";
import BrandName from "./BrandName";
import { SideNav } from "./MobileView";
import { useAuth } from "@/Auth/AuthContext";
const Layout = () => {
  const { user } = useAuth();
  const isMobile = useMediaQuery("(max-width:768px)");
  const isTablet = useMediaQuery("(max-width:1391px)");
  if (isMobile === true) {
    return (
      <div className="flex justify-evenly gap-5 py-5  border-b-2">
        <BrandName />
        <SideNav />
      </div>
    );
  } else if (isTablet === true) {
    return (
      <div className="flex justify-evenly gap-5 py-5  border-b-2">
        <SideNav />
        <BrandName />
        <Avatars />
      </div>
    );
  } else {
    return (
      <div className="flex justify-evenly px-5 border-b-2 py-5">
        <BrandName />
        <NavigationMenuDemo />
        <Avatars />
      </div>
    );
  }
};
const Navbars = () => {
  return (
    <div className="">
      <Layout />
    </div>
  );
};

export default Navbars;
