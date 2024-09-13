import { useEffect, useState } from "react";
import Header from "./utiles";

const Square = ({ description, zekr, count, kind, index, theme }) => {
    const [_count, setCount] = useState(count);
    const [text, setText] = useState(zekr);

    return (
        <>
            <div onClick={() => setCount(text === zekr ? _count - 1 : _count)} className={`${theme} square ${_count <= 0 && text ? "hide" : ''}`}>
                <p>
                    {text}
                </p>

                <div className="btns yellow">
                    <button className="btn count">
                        كرر <span className="circle">{_count}</span>
                    </button>
                    <button onClick={(e) => { setText(description); e.stopPropagation() }} className="btn fav">
                        فضل الذكر
                    </button>
                </div>
            </div>
        </>
    )
}

const Main = ({ theme, fileName }) => {
    const [datas, setDatas] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    useEffect(() => {
        // Function to fetch data from the server
        const fetchData = async () => {
            try {
                const response = await fetch('data/' + fileName + '.json'); // Replace with your server URL

                if (!response.ok)
                    throw new Error('Network response was not ok');

                const data = await response.json();
                setDatas(data);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();

        if (localStorage.getItem(fileName) === '') {
            fetchData();
            localStorage.setItem(fileName, JSON.stringify(datas));
        } else {
            setDatas(JSON.parse(localStorage.getItem(fileName)));
        }
    }, []); // Empty dependency array means this effect runs once when component mounts

    const [fontSize, setFontSize] = useState(16); // الحجم الافتراضي هو 16px

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;
    if (!datas) return <p>No data available</p>;

    const increaseFontSize = () => {
        setFontSize(prevSize => prevSize + 2); // زيادة حجم الخط بمقدار 2px
    };

    const decreaseFontSize = () => {
        setFontSize(prevSize => Math.max(prevSize - 2, 8)); // تقليل حجم الخط بمقدار 2px، ولكن لا يمكن أن يكون أقل من 8px
    };

    // الحصول على الوقت الحالي لتحديد ما إذا كنا في النهار أو المساء
    const now = new Date();
    const hours = now.getHours();
    const isDayTime = hours >= 6 && hours < 18; // النهار من الساعة 6 صباحًا إلى 6 مساءً

    return (
        <main className={theme}>
            <nav className="container control">
                <button onClick={increaseFontSize} className="btn">
                    <i className="fa-solid fa-plus"></i>
                </button>
                <button onClick={decreaseFontSize} className="btn">
                    <i className="fa-solid fa-minus"></i>
                </button>
            </nav>
            <div style={{ fontSize: `${fontSize}px` }} className={theme + " back-content zeker"}>
                {datas.map((foo, index) => {
                    // تمرير الكائنات بناءً على الوقت الحالي وقيمة kind
                    if ((isDayTime && foo.kind === 0) || (!isDayTime && foo.kind === 1)) {
                        return (
                            <Square
                                key={index}
                                count={foo.count}
                                kind={foo.kind}
                                theme={theme}
                                index={index}
                                zekr={foo.zekr}
                                description={foo.description}
                            />
                        );
                    }
                    return null; // عدم عرض الكائنات التي لا تنطبق عليها الشروط
                })}
            </div>
        </main>
    )
}

export const Zeker = () => {
    return (
        <>
            <Header name={"اذكار الصباح"} theme="yellow" navbar={"back-nav"} />
            <Main theme="yellow" fileName="zeker" />
        </>
    )
};
