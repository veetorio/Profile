import Glyph from "../../icons/Glyph";
import Link from "../link/Routes";

const links: string[] = ["home", "projetos", "redes sociais"];
const loc: string[] = ["#main", "#projetos", "#redes"];

function Header() {
  return (
    <header className={`bg-slate-700 h-20 w-screen flex box shadow-xl fixed top-0 z-999`}>
      <div className="pl-5 w-1/6 h-full flex items-center">
        <a href="https://theowlhouse.fandom.com/wiki/Vee">
          <Glyph />
        </a>
      </div>
      <div className="w-5/6 h-full flex justify-end ">
        <div className="w-1/2 h-full grid grid-cols-3 pr-1 gap-2">
          {links.map((e , index ) => {
            return <Link text={e} location={loc[index]} />;
          })}
        </div>
      </div>
    </header>
  );
}

export default Header;
