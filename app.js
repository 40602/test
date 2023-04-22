const text=document.querySelectorAll(".thePaths");

for (let i =0; i<text.length;i++){
    console.log(`text number$[i] lengh is ${text[i].getTotalLength()}`);
}
const lastword=document.querySelector("#sixteen");
const animation=document.querySelector("div.animation");
lastword.addEventListener("animationend",()=>{
    animation.style="transition:all 1s ease; opacity:0;pointer-events:none;";
})

// 檢查是否已經有名為 visited 的 cookie
let visited = getCookie('visited');

// 如果 visited 不存在，則認為這是第一次進入網站，設置一個 cookie
if (!visited) {
  setCookie('visited', true, 365); // 設置一年後過期的 cookie
  // 在這裡加入動畫效果的程式碼
}

// 獲取 cookie 值的函數
function getCookie(name) {
  let cookies = document.cookie.split(';');
  for (let i = 0; i < cookies.length; i++) {
    let cookie = cookies[i].trim();
    if (cookie.startsWith(name + '=')) {
      return cookie.substring(name.length + 1);
    }
  }
  return null;
}

// 設置 cookie 的函數
function setCookie(name, value, days) {
  let expires = '';
  if (days) {
    let date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = '; expires=' + date.toUTCString();
  }
  document.cookie = name + '=' + value + expires + '; path=/';
}
