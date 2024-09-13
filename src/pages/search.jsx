import {  useState } from "react";
import Header from "./utiles";



const Main = ({theme }) => {
    const [text, setText] = useState('');
    const [response, setResponse] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
  
    // تحديث الحالة عند تغيير الإدخال
    const handleChange = (e) => {
      setText(e.target.value);
    };
  
    // إرسال البيانات عند تقديم النموذج
    const handleSubmit = async (e) => {
      e.preventDefault();
      setLoading(true);
      setError(null);
  
      try {
        const response = await fetch('http://localhost:8000/find_similar_ayahs/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ text }), // إرسال حقل `text` في جسم الطلب
        });
  
        if (!response.ok) {
          throw new Error('استجابة الشبكة لم تكن صحيحة');
        }
  
        const data = await response.json();
        setResponse(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
  
    return (
        <main className={theme}>
            <nav className="container control">
                <button   className="btn">
                    <i className="fa-solid fa-plus"></i>
                </button>
                <button  className="btn">
                    <i className="fa-solid fa-minus"></i>
                </button>
            </nav>

            <nav className="navbar ">
                <div className="container">
                    <form onSubmit={handleSubmit} className=" d-flex search flex-row-reverse ">
                        <input className="form-control" 
                            onChange={handleChange} 
                            value={text} 
                            type="text" 
                            placeholder="ابحث هنا"
                        />
                        <button  className="btn btn-success me-2"> 
                            بحث
                        </button>
                    </form>
                </div>
            </nav>

            <div className=" container search-result">
                <div className="result">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur, voluptate recusandae. Praesentium corrupti ipsam exercitationem nesciunt nobis necessitatibus vel magnam, eius facilis quod ratione quos, qui sed ipsum consequuntur harum?
                    { response }
                </div>
            </div>

        </main>
    )
}

 export const SearchEngin = () => {
    return (
      <>
        <Header name={"الباحث القرآني"} theme="green" navbar={"back-nav"} />
        <Main theme="green" />       
      </> 
    )
  };

  
  