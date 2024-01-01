
// let dateNow = new Date();
// console.log(dateNow);
// let bday = new Date("jul 2, 1996");
// console.log(bday)
// let diff = dateNow - bday;
// console.log((diff/1000/60/60/24/365).toFixed());
// let months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
// console.log(months[dateNow.getMonth()])
// let btn = document.querySelector(".btn");
// let counter = 1;
// let myText = document.querySelector(".text");
// btn.onclick = function(){
//     let myRequest = new XMLHttpRequest();
// myRequest.open("GET",`https://learnwebcode.github.io/json-example/animals-${counter}.json`)
// myRequest.send();
// counter++
//     myRequest.onload = function(){
//         myData = JSON.parse(myRequest.responseText);
//         myText.innerHTML+= `<br>`
//         for(let i=0; i< myData.length;i++){
//             myText.innerHTML += `My pet's name is ${myData[i].name} it likes`;
//             console.log(myData[i].foods.likes)
//             myData[i].foods.likes.forEach(e => {
//                 if(e === "catnip"||e==="carrots"){
//                     myText.innerHTML += ` and ${e} <br>`
//                 }else{
//                     myText.innerHTML += ` ${e}`
                    
//                 }
//             });
//         }
//     }
// }
// function Navbar() {
//     return (
//         <nav className="navbar navbar-expand-lg navbar-light bg-light">
//             <a className="navbar-brand" href="#">Navbar</a>
//             <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//                 <span className="navbar-toggler-icon"></span>
//             </button>

//             <div className="collapse navbar-collapse" id="navbarSupportedContent">
//                 <ul className="navbar-nav mr-auto">
//                 <li className="nav-item active">
//                     <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
//                 </li>
//                 <li className="nav-item">
//                     <a className="nav-link" href="#">Link</a>
//                 </li>
//                 <li className="nav-item dropdown">
//                     <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
//                     Dropdown
//                     </a>
//                     <div className="dropdown-menu" aria-labelledby="navbarDropdown">
//                     <a className="dropdown-item" href="#">Action</a>
//                     <a className="dropdown-item" href="#">Another action</a>
//                     <div className="dropdown-divider"></div>
//                     <a className="dropdown-item" href="#">Something else here</a>
//                     </div>
//                 </li>
//                 <li className="nav-item">
//                     <a className="nav-link disabled" href="#">Disabled</a>
//                 </li>
//                 </ul>
//                 <form className="form-inline my-2 my-lg-0">
//                     <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
//                     <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
//                 </form>
//             </div>
//         </nav>
//     )
// }
// function Maincontent(){
//     return(
//         <h1>I'm learning react</h1>
//     )
// }
// ReactDOM.render(
//     <div>
// <Navbar/>
// <Maincontent/>
//     </div>,
//     document.querySelector(".root")
// )
// let check = document.getElementById("check")
// let btn = document.querySelector(".btn")
// check.onclick= function(){
//     if(check.getAttribute("value")==="n"){
//         check.setAttribute("value","y")
//         btn.removeAttribute("disabled")
//     }else{
//         check.setAttribute("value","n")
//         btn.setAttribute("disabled","")
//     }
// }
// $("#check").click(function () { 
//     if($("#check").attr("value") ==="n"){
//         $("#check").attr("value", "y");
//         $(".btn").removeAttr("disabled");
//     }else{
//         $("#check").attr("value", "n");
//         $(".btn").attr("disabled", "");
//     }
// });
// $(document).on( "contextmenu", function() {
//     return false
//   } );
// var test = {
//     id: "div",
//     class: "divclass",
//     css: {
//       "color": "blue"
//     }
// }
// var $div = $("<div>");
//   $div.html("New Division");
//   $("body").append($div);

$(document).ready(function () {
    
  $('.btn').click(function () { 
    console.log($('#no').val())
      for(let i=0; i<$('#no').val(); i++){
  
          var $p=$('<p>')
          $p.html('new paragraph')
          $('.generation').append($p);
      }
  });
      
  });
// Junior front-end web developer with a bachelor’s degree in computer science and software engineering. took a certificate from NTI in front-end web development, and freecodecamp.com. I have some experience in UI design  as I have a pretty good knowledge with graphic design. I also have some knowledge coming out of college in database, software engineering process, static testing, problem solving and some more programming languages like c++ and Java. I look forward to working hard and proving my worth.