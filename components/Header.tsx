import PageContainer from "./Page-container";
import { HeaderNavigation } from "./Header-navigation";
import ProfileButton from "./Profile-button";
import ResponsiveMenu from "./ResponsiveMenu";
import ToggleTheme from "./toggleTheme";


const Header = () => {
  return (
    <header className="p-4 border-b">
      <PageContainer>
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center gap-2">
            {/* responsive menu */}
            <ResponsiveMenu />
            <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-fuchsia-400 to-blue-600">
              NextBlog
            </h1>
          </div>

          {/* Navigation */}
          <HeaderNavigation />

          {/* Buttons */}
          <div className="flex items-center gap-2">
            {/* toogle */}
            <ToggleTheme />
            <ProfileButton />
          </div>
        </div>
      </PageContainer>
    </header>
  );
};

export default Header;
