import Article from "../components/Article";
import Banner from "../components/Banner";
import NavButtom from "../components/NavButtom";
import NavTop from "../components/NavTop";
import SubMenu from "../components/SubMenu";
import Resep from "../components/Resep";
import YouTube from "../components/YouTube";
import Review from "../components/Review";
import About from "../components/About";
import DownloadApp from "../components/DownloadApp";

function Home() {
  return (
    <div className="static flex justify-center">
      <div className="flex justify-center w-screen">
        <NavTop />
        <div className="md:w-96 lg:w-96 xl:w-96 z-0 mx-auto bg-white pt-10 mt-8 mb-14">
          <Banner />
          <SubMenu />
          <Article />
          <Resep />
          <YouTube />
          <Review />
          <About />
          <NavButtom />
          <DownloadApp />
        </div>
      </div>
    </div>
  );
}

export default Home;
