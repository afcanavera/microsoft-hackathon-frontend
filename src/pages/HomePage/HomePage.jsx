import HomeNav from "../../components/HomeNav/HomeNav";
import OtherUsers from "../../components/OtherUsers/OtherUsers";
import PopBox from "../../components/PopBox/PopBox";
import SelectBtn from "../../components/SelectBtn/SelectBtn";
import "./HomePage.scss";

function HomePage() {

  return (
    <>
      <HomeNav />
      <PopBox />
      <SelectBtn />
      <OtherUsers />
    </>
  )
}

export default HomePage