// ##########################################################
// header or navbar dynmaic movement


window.onscroll =function(){
   
        if(document.documentElement.scrollTop > 200){
            document.getElementById("navbar").classList.add("active");
        } else{
            document.getElementById("navbar").classList.remove("active");
    }
};










// ###############################################################
// company services
let paragraph = document.querySelectorAll(".text-on-click");
let card = document.querySelectorAll(".card-on-click")

for (let i=0;i<card.length;i++){
    card[i].onmouseover = function(){
        paragraph[i].classList.add("active");
        card[i].style.height="425px";
    }
    card[i].onmouseout = function(){
        paragraph[i].classList.remove("active");
        card[i].style.height="320px";
    }
};


// ##############################################################
// projects

let imgZoom = document.querySelectorAll(".img-projects");
let imgBlue = document.querySelectorAll(".background-img");
let buttonImg = document.querySelectorAll(".button-img");

// close button
let closeButton = document.querySelector(".close-button");
let blackLayer = document.querySelector(".black-bage");
// close botton end



let imgBlackLayer = document.querySelector(".img-black-layer");


closeButton.onclick = function(){
    blackLayer.style.top="-150%";
};


for(let i=0;i<imgZoom.length;i++){
    imgZoom[i].onmouseover =function(){
        imgBlue[i].classList.add("active");
        imgBlue[i].onclick = function(){
            blackLayer.style.top="0";
            let attr = document.createAttribute("src");
            attr.value = `/img/gallery/${i+1}.jpg`;
            imgBlackLayer.setAttributeNode(attr);
            console.log(imgBlackLayer);
        }
    }
    imgZoom[i].onmouseout =function(){
        imgBlue[i].classList.remove("active");
    }
};




// ##################################################################################################
// counting number of clients
let videoMon = document.querySelector(".video-mon");
let users =document.querySelector(".users");
let applications = document.querySelector(".mobile-apps");
let workingSites =document.querySelector(".worked-sites");



// count up libaray 


window.onload = function(){
    let website  =new CountUp("worked-sites",0,250,0,2.5);
        website.start();
    let applications  =new CountUp("mobile-apps",0,100,0,2.5);
        applications.start();
    let users  =new CountUp("users",0,10000,0,2.5);
        users.start();
    let videoMon  =new CountUp("video-mon",0,30,0,0.5);
        videoMon.start();
    
};








// ###################################################################################################
// vadlidation 
// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
  
          form.classList.add('was-validated')
        }, false)
      })
  })()
//   ##################################################################################################


// ###########################
{/* <body>
	<div class="num">5</div>
	<script>
		let number = parseInt(document.querySelector(".num").innerHTML);
		function countup() {
			number += 1;
			document.querySelector(".num").innerHTML = number;
			console.log(number);
			if (number === 250) {
				clearInterval(counter);
			}
		}

		let counter = setInterval(countup, 250);
	</script>
</body> */}