let content1_obj = document.getElementById("content-1");
let content2_obj = document.getElementById("content-2");


document.getElementById("content-1-link").addEventListener("click", function () {
  console.log("content-1: started block");

  // unset all other values
  content2_obj.setAttribute("style", "visibility: hidden !important; position: absolute !important;");

  //sets current values
  content1_obj.setAttribute("style", "position: relative !important; display: block !important;");

  console.log("content-1: end block");
});


document.getElementById("content-2-link").addEventListener("click", function () {
  console.log("content-2: started block"); 

  // unset all other values
  content1_obj.setAttribute("style", "visibility: hidden !important; position: absolute !important;");

  //sets current values
  content2_obj.setAttribute("style", "position: relative !important; display: block !important;");
  console.log("content-2: ran block"); 
});