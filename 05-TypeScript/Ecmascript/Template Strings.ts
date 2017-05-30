//ECMASCRIPT
//el var es antigua ahora ya utilizamos let
//var a = 1;
//  ``  la coma invertida son templete string
let a =1;
let a1 =1;
let nombreUsuario = "Jonathan Pachacama";
let html = "<h1>HOLA</h1>" + "<p>hola amigos</p>"+"<img src='algunUrl'>"+ "<a href='google'>ir a google</a> ";


let htmlConTemplateString= `
<h1>asadadfd</h1>
<p>${nombreUsuario}</p>
<!--puedo usar emmet-->
<!--ul>li*5-->
<ul>
<li></li>
<li></li>
<li></li>
<li></li>
<li></li>
</ul>
`;

console.log(htmlConTemplateString);
