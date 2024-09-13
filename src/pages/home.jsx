import Header, {Calender} from "./utiles";
import { Link } from "react-router-dom";

const Main = () => {
    return (
        <main className="container">
            <div className="content">

                <Calender />
                <div className="btns">
                    <Link to="book" className="m-btn indigo active">
                        <span className="text">
                                القرآن الكريم 
                        </span>
                        <span className="icon">
                            <i className="fa-solid fa-book-quran fa-2xl"></i>
                        </span>
                    </Link>
                    <Link to={"search"} className="m-btn green">
                        <span className="text">
                           الباحث القرآني 
                        </span>
                        <span className="icon">
                            <i className="fa-brands fa-ussunnah fa-2xl"></i>
                        </span>
                    </Link>
                    <Link to="assma" className="m-btn cyan">
                        <span className="text">
                            اسماء الله الحسني
                        </span>
                        <span className="icon">
                            <i className="fa-solid fa-umbrella fa-2xl"></i>
                        </span>
                    </Link>
                    <Link to={"zeker"} className="m-btn yellow">
                        <span className="text">
                            اذكار الصباح والمساء
                        </span>
                        <span className="icon">
                            <i className="fa-solid fa-moon fa-2xl"></i>
                            <i className="fa-solid fa-sun fa-2xl"></i>
                        </span>
                    </Link>
                
                    <Link className="btn m-btn pink text-decoration-none" to="/why">
                        <span className="text">
                                لماذا
                        </span>
                        <span className="icon">
                            <i className="fa-solid fa-question fa-flip-horizontal fa-2xl"></i>
                        </span>
                    </Link>
                    
                </div>
            </div>

        </main>
    )
}

const Home = () => {
    return (
      <>
        <Header theme="null" navbar={"home-nav"} />
        <Main />       
      </> 
    )
  };
  
  export default Home;
  