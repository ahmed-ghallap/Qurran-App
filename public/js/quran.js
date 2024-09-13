// const webURL  = window.location.href;
const webURL  = "192.168.1.12:5000/"

console.log(webURL);

function db(name) {
    const data = localStorage.getItem(name);
    if (data === null) {
        console.log(name + " data base not in storage")
        // fetch(webURL+`data/${name}.json`) // استبدل هذا بالعنوان الفعلي للملف JSON
        fetch("http://192.168.1.12:5000/data/why.json") // استبدل هذا بالعنوان الفعلي للملف JSON
        .then(response => {
            if (!response.ok) {
            throw new Error('faild getting date');
            }
            return response.text(); // تحويل الاستجابة إلى JSON
        })
        .then(data => {
            console.log(data); // التعامل مع البيانات JSON هنا
            localStorage.setItem(name, data)
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
    }

    return JSON.parse(
        localStorage.getItem(name)
    );
}


$(() => {
    // init();

    const arr = "محرم - صفر - ربيع الأول - ربيع الآخر - جمادى الأولى - جمادى الآخرة - رجب - شعبان - رمضان - شوال - ذو القعدة - ذو الحجة".split('-')
    const date = HijriJS.today();

    const dayNumber = new Date().getDay();
    const daysOfWeek = ["الأحد", "الاثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت"];
    let dayName = daysOfWeek[dayNumber];

    // $('#date').text(`${date.day} ${arr[date.month - 1]} ${date.year}`);
    // $('#day').text(dayName);


    $('.accordion-button').click(function() {
        $(this).parents(".accordion-item").next().collapse('toggle');
        $(this).toggleClass('collapsed')
    }); 

})

function init () {
    // localStorage.clear();
    const whyAcoordion = $('#why-accordion');

    db('why').forEach((data) => {
        whyAcoordion.append(
            `
            <div class="accordion-item">
                <h2 class="accordion-header">
                    <button class="accordion-button "  
                    data-bs-toggle="collapse" 
                    >
                        ${data.Column1}
                    </button>
                </h2>
            </div>
            <div class="accordion-collapse collapse" data-bs-parent="#accordion-why">
                <div class="accordion-body rose">
                        ${data.Column2}
                </div>
            </div>
            `
        )
        
    })
    // const name = "why";
    //     fetch(webURL+`data/${name}.json`) // استبدل هذا بالعنوان الفعلي للملف JSON
    //     .then(response => {
    //         if (!response.ok) {
    //         throw new Error('faild getting date');
    //         }
    //         return response.json(); // تحويل الاستجابة إلى JSON
    //     })
    //     .then(datas => {
    //         datas.forEach((date) => {
        
    //             whyAcoordion.append(
    //                 `
    //                 <div class="accordion-item">
    //                     <h2 class="accordion-header">
    //                         <button class="accordion-button "  
    //                         data-bs-toggle="collapse" 
    //                         >
    //                             ${data.Column1}
    //                         </button>
    //                     </h2>
    //                 </div>
    //                 <div class="accordion-collapse collapse" data-bs-parent="#accordion-why">
    //                     <div class="accordion-body rose">
    //                             ${data.Column2}
    //                     </div>
    //                 </div>
    //                 `
    //             )

    //         });
    //     })
    //     .catch(error => {
    //         console.error('There was a problem with the fetch operation:', error);
    //     });


    
}
