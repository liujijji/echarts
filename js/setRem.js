function setRem() {
    // 获取设备宽度
    var clientWidth = document.documentElement.clientWidth || document.body.clientWidth;
    // 控制设备的最大最小宽度
    clientWidth = clientWidth > 2560 ? 2560 : clientWidth;
    clientWidth = clientWidth < 1024 ? 1024 : clientWidth;
    var rem = clientWidth / 16;
    var html = document.getElementsByTagName('html')[0];
    html.style.fontSize = rem + 'px'
}
// 屏幕加载的时候执行
window.onload = setRem;
// 页面重置大小
window.onresize = setRem;