import { useEffect, useState } from "react";
import Header from "./utiles";
import { Link } from "react-router-dom";

const Accordion = ({question, answer, index, theme}) => {
    return (
        <>
          <div  className="accordion-item ">
                <h2 className="accordion-header">
                <button class="accordion-button"  data-bs-toggle="collapse" data-bs-target={'#'+index} aria-expanded="true" aria-controls={index}>
                    {question}
                </button>
                </h2>
            </div>

            <div id={index} class="accordion-collapse collapse " data-bs-parent="#why-accordion">
                <div className={"accordion-body " + theme}>
                    {answer}
                </div>
            </div>
        </>
    )

}

const Main = ({theme, fileName }) => {
    const [datas, setDatas] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    useEffect(() => {

        // Function to fetch data from the server
        const fetchData = async () => {
            try {
                const response = await fetch('data/'+fileName+'.json'); // Replace with your server URL

                if (!response.ok) 
                    throw new Error('Network response was not ok');
                
                const data = await response.json();
                setDatas(data);
            } 
            catch (error) {
                setError(error);
            } 
            finally {
                setLoading(false);
            }
        };

        fetchData();
        if (localStorage.getItem(fileName) === '') {
            fetchData();
            localStorage.setItem(fileName, JSON.stringify(datas));
        }
        else {
            setDatas(JSON.parse(localStorage.getItem(fileName)));
        }
    }, []); // Empty dependency array means this effect runs once when component mounts
    
    const [fontSize, setFontSize] = useState(16); // الحجم الافتراضي هو 16px
    // Render based on state
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;
    if (!datas) return <p>No data available</p>;
    

    const increaseFontSize = () => {
        setFontSize(prevSize => prevSize + 2); // زيادة حجم الخط بمقدار 2px
    };

    const decreaseFontSize = () => {
        setFontSize(prevSize => Math.max(prevSize - 2, 8)); // تقليل حجم الخط بمقدار 2px، ولكن لا يمكن أن يكون أقل من 8px
    };

    return (
    <main className={theme}>
            <nav className="container control">
                <button onClick={increaseFontSize}  className="btn">
                    <i className="fa-solid fa-plus"></i>
                </button>
                <button onClick={decreaseFontSize} className="btn">
                    <i className="fa-solid fa-minus"></i>
                </button>
            </nav>
            {/* style={{ fontSize: `${fontSize}px` }} */}
            <div style={{ fontSize: `${fontSize}px` }} className="back-content accordion" id="why-accordion">
                {datas.map((foo, index) => { return <Accordion theme={theme} index={index} question={foo.Column1} answer={foo.Column2} />})}
            </div>
        </main>
    )
}

export const Why = () => {
    return (
      <>
        <Header name={"لماذا"} theme="rose" navbar={"back-nav"} />
        <Main theme="rose" fileName="why" />       
      </> 
    )
  };

export const Assma = () => {
    return (
      <>
        <Header name={"اسماء الله الحسني"} theme="blue" navbar={"back-nav"} />
        <Main theme="blue" fileName="assma" />       
      </> 
    )
  };

  
  