// 利用排他法
var a_ = document.getElementsByClassName('a');
// console.log(a_);
// 显示内容  动漫
var animation_ = document.getElementsByClassName('animation');
var fault_ = document.getElementsByClassName('fault');
//排他发
for (var i = 0; i < a_.length; i++) {
    a_[i].setAttribute('index', i);
    a_[i].onclick = function() {
        var index = this.getAttribute('index')
            // 切换选中的类名 字体改变颜色
        for (var j = 0; j < a_.length; j++) {
            // 删除类名
            a_[j].classList.remove('ma');
            // 添加类名
            a_[index].classList.add('ma');
        }
        // 内容部分  显示与隐藏
        for (var k = 0; k < fault_.length; k++) {
            fault_[k].style.display = "none";
            fault_[index].style.display = "block";
        }
        for (var r = 0; r < animation_.length; r++) {
            animation_[r].style.display = "none";
            animation_[index].style.display = "block";
        }
    }
}