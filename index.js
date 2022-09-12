let content1_obj = document.getElementById("content-1");
let content2_obj = document.getElementById("content-2");
let content3_obj = document.getElementById("content-3"); 
let content4_obj = document.getElementById("content-4");
let content5_obj = document.getElementById("content-5");
let content6_obj = document.getElementById("content-6");
let content7_obj = document.getElementById("content-7");
let content8_obj = document.getElementById("content-8");
let content9_obj = document.getElementById("content-9");
let content10_obj = document.getElementById("content-10");

document.getElementById("content-1-link").addEventListener("click", function () {

  // unset all other values content1_obj
  // skip 1
  content2_obj.setAttribute("style", "visibility: hidden !important; position: absolute !important; top: -9999px; left: -9999px;");
  content3_obj.setAttribute("style", "visibility: hidden !important; position: absolute !important; top: -9999px; left: -9999px;");
  content4_obj.setAttribute("style", "visibility: hidden !important; position: absolute !important; top: -9999px; left: -9999px;");
  content5_obj.setAttribute("style", "visibility: hidden !important; position: absolute !important; top: -9999px; left: -9999px;");
  content6_obj.setAttribute("style", "visibility: hidden !important; position: absolute !important; top: -9999px; left: -9999px;");
  content7_obj.setAttribute("style", "visibility: hidden !important; position: absolute !important; top: -9999px; left: -9999px;");
  content8_obj.setAttribute("style", "visibility: hidden !important; position: absolute !important; top: -9999px; left: -9999px; ");
  content9_obj.setAttribute("style", "visibility: hidden !important; position: absolute !important; top: -9999px; left: -9999px;");
  content10_obj.setAttribute("style","visibility: hidden !important; position: absolute !important; top: -9999px; left: -9999px;");

  //sets current values
  content1_obj.setAttribute("style", "position: relative !important; display: block !important; height: fit-content !important;");
});


document.getElementById("content-2-link").addEventListener("click", function () {

  // unset all other values other than content2_obj
  content1_obj.setAttribute("style", "visibility: hidden !important; position: absolute !important; top: -9999px; left: -9999px;");
  // skip 2
  content3_obj.setAttribute("style", "visibility: hidden !important; position: absolute !important; top: -9999px; left: -9999px;");
  content4_obj.setAttribute("style", "visibility: hidden !important; position: absolute !important; top: -9999px; left: -9999px;");
  content5_obj.setAttribute("style", "visibility: hidden !important; position: absolute !important; top: -9999px; left: -9999px;");
  content6_obj.setAttribute("style", "visibility: hidden !important; position: absolute !important; top: -9999px; left: -9999px;");
  content7_obj.setAttribute("style", "visibility: hidden !important; position: absolute !important; top: -9999px; left: -9999px;");
  content8_obj.setAttribute("style", "visibility: hidden !important; position: absolute !important; top: -9999px; left: -9999px;");
  content9_obj.setAttribute("style", "visibility: hidden !important; position: absolute !important; top: -9999px; left: -9999px; ");
  content10_obj.setAttribute("style", "visibility: hidden !important; position: absolute !important; top: -9999px; left: -9999px;");

  //sets current values
  content2_obj.setAttribute("style", "position: relative !important; display: block !important; height: fit-content !important;");
});

document.getElementById("content-3-link").addEventListener("click", function () {
  // unset all other values other than content3_obj
  content1_obj.setAttribute("style", "visibility: hidden !important; position: absolute !important; top: -9999px; left: -9999px;");
  content2_obj.setAttribute("style", "visibility: hidden !important; position: absolute !important;");
  // Skip 3
  content4_obj.setAttribute("style", "visibility: hidden !important; position: absolute !important; top: -9999px; left: -9999px;");
  content5_obj.setAttribute("style", "visibility: hidden !important; position: absolute !important; top: -9999px; left: -9999px;");
  content6_obj.setAttribute("style", "visibility: hidden !important; position: absolute !important; top: -9999px; left: -9999px;");
  content7_obj.setAttribute("style", "visibility: hidden !important; position: absolute !important; top: -9999px; left: -9999px;");
  content8_obj.setAttribute("style", "visibility: hidden !important; position: absolute !important; top: -9999px; left: -9999px;");
  content9_obj.setAttribute("style", "visibility: hidden !important; position: absolute !important; top: -9999px; left: -9999px;");
  content10_obj.setAttribute("style", "visibility: hidden !important; position: absolute !important; top: -9999px; left: -9999px;");

  //sets current values
  content3_obj.setAttribute("style", "position: relative !important; display: block !important;");
});

document.getElementById("content-4-link").addEventListener("click", function () {
  // unset all other values other than content4_obj
  content1_obj.setAttribute("style", "visibility: hidden !important; position: absolute !important; top: -9999px; left: -9999px;");
  content2_obj.setAttribute("style", "visibility: hidden !important; position: absolute !important; top: -9999px; left: -9999px;");
  content3_obj.setAttribute("style", "visibility: hidden !important; position: absolute !important; top: -9999px; left: -9999px;");
  // Skip 4
  content5_obj.setAttribute("style", "visibility: hidden !important; position: absolute !important; top: -9999px; left: -9999px;");
  content6_obj.setAttribute("style", "visibility: hidden !important; position: absolute !important; top: -9999px; left: -9999px;");
  content7_obj.setAttribute("style", "visibility: hidden !important; position: absolute !important; top: -9999px; left: -9999px;");
  content8_obj.setAttribute("style", "visibility: hidden !important; position: absolute !important; top: -9999px; left: -9999px;");
  content9_obj.setAttribute("style", "visibility: hidden !important; position: absolute !important; top: -9999px; left: -9999px;");
  content10_obj.setAttribute("style", "visibility: hidden !important; position: absolute !important; top: -9999px; left: -9999px; ");

  //sets current values
  content4_obj.setAttribute("style", "position: relative !important; display: block !important;");
});

document.getElementById("content-5-link").addEventListener("click", function () {
  // unset all other values other than content5_obj
  content1_obj.setAttribute("style", "visibility: hidden !important; position: absolute !important; top: -9999px; left: -9999px;");
  content2_obj.setAttribute("style", "visibility: hidden !important; position: absolute !important; top: -9999px; left: -9999px;");
  content3_obj.setAttribute("style", "visibility: hidden !important; position: absolute !important; top: -9999px; left: -9999px; ");
  content4_obj.setAttribute("style", "visibility: hidden !important; position: absolute !important; top: -9999px; left: -9999px;");
  // 5 Skip
  content6_obj.setAttribute("style", "visibility: hidden !important; position: absolute !important; top: -9999px; left: -9999px;");
  content7_obj.setAttribute("style", "visibility: hidden !important; position: absolute !important; top: -9999px; left: -9999px;");
  content8_obj.setAttribute("style", "visibility: hidden !important; position: absolute !important; top: -9999px; left: -9999px;");
  content9_obj.setAttribute("style", "visibility: hidden !important; position: absolute !important; top: -9999px; left: -9999px;");
  content10_obj.setAttribute("style", "visibility: hidden !important; position: absolute !important; top: -9999px; left: -9999px;");

  //sets current values
  content5_obj.setAttribute("style", "position: relative !important; display: block !important;");
});

document.getElementById("content-6-link").addEventListener("click", function () {
  // unset all other values other than content6_obj
  content1_obj.setAttribute("style", "visibility: hidden !important; position: absolute !important; top: -9999px; left: -9999px;");
  content2_obj.setAttribute("style", "visibility: hidden !important; position: absolute !important; top: -9999px; left: -9999px;");
  content3_obj.setAttribute("style", "visibility: hidden !important; position: absolute !important; top: -9999px; left: -9999px;");
  content4_obj.setAttribute("style", "visibility: hidden !important; position: absolute !important; top: -9999px; left: -9999px;");
  content5_obj.setAttribute("style", "visibility: hidden !important; position: absolute !important; top: -9999px; left: -9999px;");
  // Skip 6
  content7_obj.setAttribute("style", "visibility: hidden !important; position: absolute !important; top: -9999px; left: -9999px;");
  content8_obj.setAttribute("style", "visibility: hidden !important; position: absolute !important; top: -9999px; left: -9999px;");
  content9_obj.setAttribute("style", "visibility: hidden !important; position: absolute !important; top: -9999px; left: -9999px;");
  content10_obj.setAttribute("style", "visibility: hidden !important; position: absolute !important; top: -9999px; left: -9999px;");

  //sets current values
  content6_obj.setAttribute("style", "position: relative !important; display: block !important;");
});

document.getElementById("content-7-link").addEventListener("click", function () {
  // unset all other values other than content6_obj
  content1_obj.setAttribute("style", "visibility: hidden !important; position: absolute !important; top: -9999px; left: -9999px;");
  content2_obj.setAttribute("style", "visibility: hidden !important; position: absolute !important; top: -9999px; left: -9999px;");
  content3_obj.setAttribute("style", "visibility: hidden !important; position: absolute !important; top: -9999px; left: -9999px;");
  content4_obj.setAttribute("style", "visibility: hidden !important; position: absolute !important; top: -9999px; left: -9999px;");
  content5_obj.setAttribute("style", "visibility: hidden !important; position: absolute !important; top: -9999px; left: -9999px;");
  content6_obj.setAttribute("style", "visibility: hidden !important; position: absolute !important; top: -9999px; left: -9999px;");
  // Skip 7
  content8_obj.setAttribute("style", "visibility: hidden !important; position: absolute !important; top: -9999px; left: -9999px;");
  content9_obj.setAttribute("style", "visibility: hidden !important; position: absolute !important; top: -9999px; left: -9999px;");
  content10_obj.setAttribute("style", "visibility: hidden !important; position: absolute !important; top: -9999px; left: -9999px;");

  //sets current values
  content7_obj.setAttribute("style", "position: relative !important; display: block !important;");
});


document.getElementById("content-8-link").addEventListener("click", function () {
  // unset all other values other than content6_obj
  content1_obj.setAttribute("style", "visibility: hidden !important; position: absolute !important; top: -9999px; left: -9999px;");
  content2_obj.setAttribute("style", "visibility: hidden !important; position: absolute !important; top: -9999px; left: -9999px;");
  content3_obj.setAttribute("style", "visibility: hidden !important; position: absolute !important; top: -9999px; left: -9999px;");
  content4_obj.setAttribute("style", "visibility: hidden !important; position: absolute !important; top: -9999px; left: -9999px;");
  content5_obj.setAttribute("style", "visibility: hidden !important; position: absolute !important; top: -9999px; left: -9999px;");
  content6_obj.setAttribute("style", "visibility: hidden !important; position: absolute !important; top: -9999px; left: -9999px;");
  content7_obj.setAttribute("style", "visibility: hidden !important; position: absolute !important; top: -9999px; left: -9999px;");
  // Skip 8
  content9_obj.setAttribute("style", "visibility: hidden !important; position: absolute !important; top: -9999px; left: -9999px;");
  content10_obj.setAttribute("style", "visibility: hidden !important; position: absolute !important; top: -9999px; left: -9999px;");

  //sets current values
  content8_obj.setAttribute("style", "position: relative !important; display: block !important;");
});

document.getElementById("content-9-link").addEventListener("click", function () {
  // unset all other values other than content6_obj
  content1_obj.setAttribute("style", "visibility: hidden !important; position: absolute !important; top: -9999px; left: -9999px;");
  content2_obj.setAttribute("style", "visibility: hidden !important; position: absolute !important; top: -9999px; left: -9999px;");
  content3_obj.setAttribute("style", "visibility: hidden !important; position: absolute !important; top: -9999px; left: -9999px;");
  content4_obj.setAttribute("style", "visibility: hidden !important; position: absolute !important; top: -9999px; left: -9999px;");
  content5_obj.setAttribute("style", "visibility: hidden !important; position: absolute !important; top: -9999px; left: -9999px;");
  content6_obj.setAttribute("style", "visibility: hidden !important; position: absolute !important; top: -9999px; left: -9999px;");
  content7_obj.setAttribute("style", "visibility: hidden !important; position: absolute !important; top: -9999px; left: -9999px;");
  content8_obj.setAttribute("style", "visibility: hidden !important; position: absolute !important; top: -9999px; left: -9999px;");
  // Skip 9
  content10_obj.setAttribute("style", "visibility: hidden !important; position: absolute !important; top: -9999px; left: -9999px;");

  //sets current values
  content9_obj.setAttribute("style", "position: relative !important; display: block !important;");
});

document.getElementById("content-10-link").addEventListener("click", function () {
  // unset all other values other than content6_obj
  content1_obj.setAttribute("style", "visibility: hidden !important; position: absolute !important; top: -9999px; left: -9999px;");
  content2_obj.setAttribute("style", "visibility: hidden !important; position: absolute !important; top: -9999px; left: -9999px;");
  content3_obj.setAttribute("style", "visibility: hidden !important; position: absolute !important; top: -9999px; left: -9999px;");
  content4_obj.setAttribute("style", "visibility: hidden !important; position: absolute !important; top: -9999px; left: -9999px;");
  content5_obj.setAttribute("style", "visibility: hidden !important; position: absolute !important; top: -9999px; left: -9999px;");
  content6_obj.setAttribute("style", "visibility: hidden !important; position: absolute !important; top: -9999px; left: -9999px;");
  content7_obj.setAttribute("style", "visibility: hidden !important; position: absolute !important; top: -9999px; left: -9999px;");
  content8_obj.setAttribute("style", "visibility: hidden !important; position: absolute !important; top: -9999px; left: -9999px;");
  content9_obj.setAttribute("style", "visibility: hidden !important; position: absolute !important; top: -9999px; left: -9999px;");
  // Skip 10 

  //sets current values
  content10_obj.setAttribute("style", "position: relative !important; display: block !important;");
});
