//var images=[" tib1.jpg","tib2.jpg","tib4.jpg","tib3.jpg"];
     // var nuj=document.getElementById("slideimgage");
    //  var i=0;
    //  function slides(){
     //  nuj.src=images[i];
    //    if(i<(images.length-1))
    //    i++; 
    //    else 
    //    i=0;
//
    ///  }
     // setInterval(slides,2000);
      //
    //  var images=[" tib1.jpg","tib2.jpg","tib4.jpg","tib3.jpg"];
    //  var nuj=document.getElementById("slideimgage");
     // var i=0;
     // function slides(){
     //  nuj.src=images[i];
     //   if(i<(images.length-1))
     //   i++; 
    //    else 
    ////    i=0;

    //  }
    //  setInterval(slides,2000);var images=[" tib1.jpg","tib2.jpg","tib4.jpg","tib3.jpg"];
     // var nuj=document.getElementById("slideimgage");
     // var i=0;
     // function slides(){
     //  nuj.src=images[i];
     //   if(i<(images.length-1))
     //   i++; 
     //   else 
     //   i=0;

     // }
     // setInterval(slides,2000);var images=[" tib1.jpg","tib2.jpg","tib4.jpg","tib3.jpg"];
      //var nuj=document.getElementById("slideimgage");
     // var i=0;
     // function slides(){
      // nuj.src=images[i];
      //  if(i<(images.length-1))
      //  i++; 
      //  else 
      //  i=0;

     // }
     // setInterval(slides,2000);
     // var images=[" image/tib1.jpg","image/tib2.jpg","image/tib4.jpg","image/tib3.jpg"];
     // var nuj=document.getElementById("slideduab");
     // var i=0;
      //function slides(){
      // nuj.src=images[i];
      //  if(i<(images.length-1))
       // i++; 
       // else 
       // i=0;

     // }
     // setInterval(slides,2000);
      //qhov ua nw create acoundt//
     // var create_account=document.getElementById('kov');
     // var form=document.getElementById('formsing');
     // var indext=document.getElementById('indext');

      //function showform(){
      //  form.style.display="block";
      //  indext.style.display="none";
     //   form.focus();
     //   return true;
    //  }
    //  create_account.addEventListener('click',showform);
//txhoj cias//
//var checkmanorwoman=document.getElementById('choose');
//var checkmanorwoman1=document.getElementById('choose1');
//var txhojcais=document.getElementById('cais');

//function showtxojcais(){
  //txhojcais.style.display="block";
  
//}
//checkmanorwoman.addEventListener('click',showtxojcais);
//checkmanorwoman1.addEventListener('click',showtxojcais);


//formloing khag msu hau nawb qhov nso //
//var npeLoginn=document.getElementById('Loginnawb');
//var Former=document.getElementById('formlogin_error');

//function showLogin(){
  //Former.style.display="block";
  //npeLoginn.style.display="none";
 
//}
//npeLoginn.addEventListener('click',showLogin);
//qhov yuav ua kom thaum saus email thiab password tsi yog es nw yuav tawm nawb//
var email=document.getElementById('email');
var pass=document.getElementById('password');
var email_error=document.getElementById('email_error');
var pass_error=document.getElementById('password_error');
var nl=document.getElementById('nl');
var nl_error=document.getElementById('nl_error');
var nb=document.getElementById('nb');
var nb_error=document.getElementById('nb_error');
var pwone=document.getElementById('pwone');
var pwone_error=document.getElementById('pwone_error');
var check=document.getElementById('check');
function login_error(){
  if(nl.value.length <10){
    nl_error.style.display="block";
    nl.focus();
    return false;
  }
  if(nb.value.length !=11){
    nb_error.style.display="block";
    nb.focus();
    return false;
  }
  if(email.value.length <8){
    //email.style.border="1px solid red";
   email_error.style.display="block";
    email.focus();
   return false;
}
if(pass.value.length <6){
  //pass.style.border="1px solid red";
 pass_error.style.display="block";
 pass.focus();
  return false;
}
if(pwone.value.length<6){
  pwone_error.style.display="block";
  pwone.focus();
  return false;
}
}
function nlvarify(){
  if(nl.value.length>=10){
    nl_error.style.display="none";
    return true;
  }
}
function nbvarify(){
  if(nb.value.length=11){
    nb_error.style.display="none"
  }
}
function emailvarify(){
  if(email.value.length>=8){
    //email.style.border="0px";  
    email_error.style.display="none";
   return true;

}}
function passvarify(){
if(pass.value.length>=6){
   // pass.style.border="0px";  
    pass_error.style.display="none";
   return true;
 }
}
function pwonevarify(){
  if(pwone.value.length>=6){
    pwone_error.style.display="none";
    return true;
  }
}
nl.addEventListener('input',nlvarify);
nb.addEventListener('input',nbvarify);
email.addEventListener('input',emailvarify);
pass.addEventListener('input',passvarify);
pwone.addEventListener('input',pwonevarify);


//function lawm(){
  //var valid= false;
  //var x=document.kuv.nou;
  //for(var i=0;i<x.length;i++){
  //  if(x[i].checked){
   //   valid=true;
    //  break;
   // }
  //}
  //if(valid){
  //  alert("");

  //}else{
   // alert("txasi seb koj nyiam lis cas");
   // return false;
  //}
//}





//function ckeck_grade(){  
  //var score = document.getElementById("score").value; // ຮັບຄ່າຈາກ text box score
  //var show =document.getElementById("show");
  //alert("score="+score);
  //if(score == "")  {
    //show.innerHTML = "Input Score";  // ສົ່ງຄ່າໄປສະແດງໃນ html 
  //}else if(score < 0 || score > 100)  {
    //show.innerHTML = "Please: input number 0 to 100 ";  
 // }else if(score<50){
   // show.innerHTML = "Your Grade : F";  
  //}else if(score<=55){
    //show.innerHTML = "Your Grade : D";  
  //}else if(score<=60){
    //show.innerHTML = "Your Grade : D+";  
  //}else if(score<=65){
   // show.innerHTML = "Your Grade : C";  
  //}else if(score<=70){
    //show.innerHTML = "Your Grade : C+";  
  //}else if(score<=75){
    //show.innerHTML = "Your Grade : B";  
  //}else if(score<=80){
    //show.innerHTML = "Your Grade : B+";  
  //}else if(score<=100){
    //show.innerHTML = "Your Grade : A";  
  //}
  //else { // or if(isNaN(score))  ກວດຄ່າເປັນຕົວເລກ
    //show.innerHTML = "Input Number";  
  //}}  



 // var a_parent =  document.querySelectorAll(".a_parent");
//var dd_menu_a = document.querySelectorAll(".dd_menu_a");

//a_parent.forEach(function(aitem){

	//	aitem.addEventListener("click", function(){
		//	a_parent.forEach(function(aitem){
			//	aitem.classList.remove("active");
			//})
			//dd_menu_a.forEach(function(dd_menu_item){
				//dd_menu_item.classList.remove("active");
			//})
			//aitem.classList.add("active");
		//})
//})

//dd_menu_a.forEach(function(dd_menu_item){

	//	dd_menu_item.addEventListener("click", function(){
		//	dd_menu_a.forEach(function(dd_menu_item){
			//	dd_menu_item.classList.remove("active");
			//})
			//dd_menu_item.classList.add("active");
	//	})
//})
// hauv qab no yog qhov yuav coj mus sim rau hau boukhoum wb lis project
// var rovqab= document.getElementById('proj');
// var mus =document.getElementById('taw');
// var saismus =document.getElementById('flexRadioDefault2');
// var saismusrov =document.getElementById('flexRadioDefault1');
// var choose=document.getElementById('choose');
// var choose1=document.getElementById('choose1');
// function taw(){
    // if(choose1.Value.length !=''){
        // rovqab.style.display="block";
    //     rovqab.focus();
    //    return false;
    // }
    // if(choose1.Value.length =''){
    //     rovqab.style.display="none";
    //     rovqab.focus();
    //    return true;
    // }

// }
// function ploj(){
    // if(choose1.Value.length !=''){
    // rovqab.style.display="none";
    //     rovqab.focus();
    //    return false;
    // }
    // if(choose1.Value.length =''){
    //     rovqab.style.display="none";
    //     rovqab.focus();
    //    return true;
    // }
// }
// choose1.addEventListener('click',taw);
// choose.addEventListener('click',ploj);

var choose=document.getElementById('choose');
var choose1=document.getElementById('choose1');
var cais=document.getElementById('proj');
function showcais(){
	cais.style.display="block";
}
function proj(){
	cais.style.display="none";
}
choose1.addEventListener('click',showcais);
choose.addEventListener('click',proj);
