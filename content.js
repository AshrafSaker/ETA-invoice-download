window.onload = function() {
  setTimeout(addButton,5000);// تأخير تحميل الصفحه
  console.log("تأخير تحميل الصفحه");};
function addButton(){
  console.log("بدء تحميل الاضافه");
    const dButton = document.createElement("button");

    dButton.textContent = "Download";
    dButton.id = "downloadall";

    let container = document.querySelector(".filterHeader");
    if(container){
      container.appendChild(dButton);
      console.log("تم تحميل الاضافة");
      //بدء كتابة الاوامر لزر الdownload
      dButton.addEventListener("click",function(){
        console.log("اول اجراء");
      }
    );
    }else{alert("خطاء في تشغيل الاضافة");}
  }
