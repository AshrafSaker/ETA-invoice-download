window.onload = function() {
    setTimeout(initializeButtons, 10000); // تأخير تحميل الصفحة وتهيئة الأزرار
    console.log("تأخير تحميل الصفحة");
};

function initializeButtons() {
    console.log("بدء تحميل الإضافة وتهيئة الأزرار");

    // إنشاء زر التحميل الرئيسي (Download)
    const dButton = document.createElement("button");
    dButton.textContent = "Download";
    dButton.id = "downloadall";
    dButton.className = "ms-Button ms-Button--action ms-Button--command ms-Pivot-link link-140";

    // تحديد موقع زر التحميل
    let container = document.querySelector(".root-132");
    if (container) {
        container.appendChild(dButton);
        console.log("تم تحميل الإضافة");
    } else {
        console.log("خطأ في التشغيل: لم يتم العثور على .root-132");
    }

    // إنشاء أزرار خيارات التحميل (All in Excel, Choose in Excel, All PDF, Choose PDF)
    // وجعلها مخفية مبدئيًا
    const allexcel = createHiddenButton("All in Excel", "allexcel");
    const excel = createHiddenButton("Choose in Excel", "excel");
    const allpdf = createHiddenButton("All PDF", "allpdf");
    const pdf = createHiddenButton("Choose PDF", "pdf");

    let dcontiner = document.querySelector(".filterHeader");
    if (dcontiner) {
        dcontiner.appendChild(allexcel);
        dcontiner.appendChild(excel);
        dcontiner.appendChild(allpdf);
        dcontiner.appendChild(pdf);
        console.log("تم إضافة أزرار الخيارات (مخفية)");
    } else {
        console.log("خطأ في التشغيل: لم يتم العثور على .filterHeader");
    }

    // الحدث عند الوقوف على زر Download
    dButton.addEventListener("mouseover", function() {
        console.log("mouseover");
        dButton.style.background = "navy";
        dButton.style.color = "white";
    });

    // الحدث عند الابتعاد عن زر Download
    dButton.addEventListener("mouseout", function() {
        console.log("mouseout");
        dButton.style.background = "lightgray";
        dButton.style.color = "blue";
    });

    // الحدث عند الضغط على زر Download
    dButton.addEventListener("click", function() {
        console.log("تم النقر على زر Download");
        dButton.style.color = "red";
        dButton.style.background = "lightgray";

        // إظهار أزرار خيارات التحميل المخفية
        allexcel.style.display = "inline-block"; // أو "block" حسب التخطيط المطلوب
        excel.style.display = "inline-block";
        allpdf.style.display = "inline-block";
        pdf.style.display = "inline-block";

        console.log("تم تفعيل خيارات التحميل");
    });

    // دالة مساعدة لإنشاء زر مخفي
    function createHiddenButton(text, id) {
        const button = document.createElement("button");
        button.textContent = text;
        button.id = id;
        button.className = "ms-Button ms-Button--action ms-Button--command ms-Pivot-link link-140";
        button.style.display = "none"; // إخفاء الزر مبدئيًا

        button.addEventListener("mouseover",function(){
          button.style.color="red";
          button.style.fontWeight= "bold"
        });
        button.addEventListener("mouseout",function(){
          button.style.color="black";
          button.style.fontWeight= "normal"
          

        });
        button.addEventListener("click",function(){
          button.style.color="blue";
        });
        return button;
    }
    allexcel.addEventListener("click",function(){
      console.log("تم الضغط على تحميل الكل كا اكسيل");
     // التوقف عند استخراج البيانات 
      /*
      const tableRows = document.querySelectorAll('a');
const data = [];
tableRows.forEach(row => {
    const rowData = Array.from(row.querySelectorAll('td'))
                       .map(cell => cell.textContent.trim());
    if (rowData.length > 0) { // تأكد أن الصف يحتوي على بيانات
        data.push(rowData);
    }
});
console.log(data); // سترى البيانات في الكونسول
  });

*/

}