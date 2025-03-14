import HomeNav from "../../components/HomeNav/HomeNav";
import OtherUsers from "../../components/OtherUsers/OtherUsers";
import PopBox from "../../components/PopBox/PopBox";
import SelectBtn from "../../components/SelectBtn/SelectBtn";
import "./HomePage.scss";

function HomePage() {

  return (
    <main className="main">
      <HomeNav />
      <div className="box__main">
      <PopBox />
      </div>
      <div className="btn">
      <SelectBtn />
      </div>
      <OtherUsers />
    </main>
  )
}

export default HomePage