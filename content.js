window.onload = function() {
  setTimeout(addButton,10000);// تأخير تحميل الصفحه
  console.log("تأخير تحميل الصفحه");};
function addButton(){
  console.log("بدء تحميل الاضافه");
    const dButton = document.createElement("button");

    dButton.textContent = "Download";
    dButton.id = "downloadall";
    dButton.className = "ms-Button ms-Button--action ms-Button--command ms-Pivot-link link-140";

    let container = document.querySelector(".root-132");
    if(container){
      container.appendChild(dButton);
      console.log("تم تحميل الاضافة");
    }else{
      console.log("خطاء في التشغيل !!!!");
    }

    dButton.addEventListener("click",function(){
      console.log("اول اجراء");
    });
  }