import Glyph from "../../icons/Glyph";
import Link from "../link/Routes";

const links: string[] = ["home", "projetos", "redes sociais"];
const loc: string[] = ["#main", "#projetos", "#redes"];

function Header() {
  return (
    <header className={`bg-slate-700 h-20 w-screen flex box shadow-xl fixed top-0`}>
      <div className="w-1/6 pl-5 h-full flex items-center">
        <a href="https://theowlhouse.fandom.com/wiki/Vee">
          <Glyph />
        </a>
      </div>
      <div className="w-5/6 h-full flex justify-end ">
        <div className="w-1/2 h-full grid grid-cols-3 justify-end gap-6">
          {links.map((e , index ) => {
            return <Link text={e} location={loc[index]} />;
          })}
        </div>
      </div>
    </header>
  );
}

export default Header;
