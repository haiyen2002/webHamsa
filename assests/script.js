// open , close mobile menu
var mobileBtn = document.querySelector('.mobile-btn')
var navList = document.querySelector('.nav-list')
mobileBtn.onclick = function () {
    navList.classList.toggle('btn-display');

}


//open form login if you click on "GO"

var btnContact = document.querySelector('.btn-contact')


var loginBlock = document.querySelector('.login-block')
var body = document.querySelector('body')
btnContact.onclick = function () {
    loginBlock.style.display = "block"
    var html = `<div id="login">
    <h2>Login</h2>
    <div><input type="text"  placeholder="Enter your Email!"></div>
   <div> <input type="text"  placeholder="Enter your Password!"></div>
    <div class= "group-btn"><button class = "submit-btn">Submit</button> <button class = "cancle-btn">Cancle</button></div>
    <div class = "link-forgot"><a href="#">You forgot your password?</a></div>
    </div>
    `
    loginBlock.innerHTML = html


//out ra khoi form login
    var login = document.querySelector("#login")
    var groupBtn = document.querySelector('.group-btn')
    groupBtn.onclick = function () {
        // loginBlock.style.display = "none";
        login.style.animation = "existTop 1s"
        setTimeout(function () {
            loginBlock.style.display = "none";
        }, 1000)
    }


}

//hover banner
 var itemBanners = document.querySelectorAll(".item-banner");

 itemBanners.forEach((itemBanner)=>{
     itemBanner.onmouseover = function(){
         for(let i = 0; i<itemBanners.length;i++){
             itemBanners[i].style.opacity = '0.5'
         }
         itemBanner.classList.add('active')
     }
     itemBanner.onmouseout = function(){
        for(let i = 0; i<itemBanners.length;i++){
            itemBanners[i].style.opacity = '1'
        }
        itemBanner.classList.remove('active')
    }
 })



//

