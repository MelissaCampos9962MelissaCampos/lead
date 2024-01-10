var oLink = document.getElementsByClassName('link')[0];


function check(url) {
    if (!url) return
    if (url[url.length - 1] !== '/') url += '/'
    var img = document.createElement('img')
    img.onload = function() {
        console.log(url, ' loaded, redirecting...')
        window.setTimeout(() => {window.location = url}, 1000);
    }
    img.onerror = function(e) {
        console.log(url, ' fail to load, stay.')
        console.error(e)
    }
    img.src = url + 'favicon.ico'
    img.style.display = 'none'
    document.body.appendChild(img)
  }
  // check('https://wt-shouye-2g3lr6koffd3237a-1308905294.ap-shanghai.app.tcloudbase.com/')
  // check('https://store.aa1b.cn/')
  
  check(oLink.href)