
// for(var i=1;i<3;i++){
//   $("#btn"+i).click(function(){
//     $("#area"+i).slideToggle();
//   });
// }




$("#btn1").click(function() {
  $("#area1").slideToggle();
});

$("#btn2").click(function(){
  $("#area2").slideToggle();
});

$("#btn3").click(function(){
  $("#area3").slideToggle();
});

function compile() {
  let htmlcode = document.querySelector("#area1").value;
  let csscode =  "<style>"+document.querySelector("#area2").value+"</style>";
  let jscode = "<script>"+ document.querySelector("#area3").value+"</script>";
  var code =  document.querySelector("#outputarea").contentWindow.document;

  code.open();
  code.write(htmlcode+csscode+jscode);
  code.close();
  
}
document.querySelector("#area1").addEventListener("keyup",compile);
document.querySelector("#area2").addEventListener("keyup",compile);
document.querySelector("#area3").addEventListener("keyup",compile);



// function run(){
//   var html= $("#area1").value;
//   // var css= "<style>"+document.querySelector("#area2").value;+"</style>"
//   // var js= document.querySelector("#area3").value;
//   // let outputview=document.querySelector("#output");
//   console.log(html);
// }