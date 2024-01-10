/* 
  Loading animation for Authentic Weather ~ http://authenticweather.com
  -- Made in collaboration with Tobias van Schneider :
  -- http://www.vanschneider.com/
*/
//setTimeout("javascript:location.href='hello.html'", 5000); 
//setTimeout("window.location.href = 'https://store.aa1b.cn/'", 5000);

var oLink = document.getElementsByClassName('link')[0];


function check(url) {
  if (!url) return
  if (url[url.length - 1] !== '/') url += '/'
  var img = document.createElement('img')
  img.onload = function() {
      console.log(url, ' loaded, redirecting...')
      window.setTimeout(() => {window.location = url}, 2000);
  }
  img.onerror = function(e) {
      console.log(url, ' fail to load, stay.')
      console.error(e)
  }
  img.src = url + 'favicon.ico'
  img.style.display = 'none'
  document.body.appendChild(img)
}
// check('https://www.baidu.com')
// check('https://store.aa1b.cn/')

check(oLink.href)











// let controller = new AbortController();
// setTimeout(() => {
// controller.abort();
// }, 6000);

// let isOk = await fetch("https://baidu.com/", {
// mode: "no-cors",
// signal: controller.signal
// }).catch(()=>false);