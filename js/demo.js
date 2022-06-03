window.addEventListener('DOMContentLoaded', function () {
    let listleft = document.querySelector('.listleft');
    // 标题
    let items = listleft.querySelectorAll('.item');
    // 内容选项ul
    let uls = listleft.querySelectorAll('#case');
    // content
    let content = document.querySelector('.content-right');
    let ctli = content.children
    let flag = true;
    for (let i = 0; i < items.length; i++) {
        items[i].addEventListener('click', function () {//? 标题点击
            for (let i = 0; i < items.length; i++) {//? 排他算法
                items[i].className = 'item';
                uls[i].style.height = '0';
                let li = uls[i].children;
                for (let i = 0; i < li.length; i++) {//? 清除该标题内的li的选中样式
                    li[i].className = '';
                }
                for (let i = 0; i < ctli.length; i++) {
                    ctli[i].style.display = 'none';
                }
            }
            //? 标题打开时
            if (flag) {
                this.className = 'item itemcheck';
                flag = false;
                uls[i].style.height = '100px'
                var li = uls[i].children;
                for (let i = 0; i < li.length; i++) {
                    li[i].setAttribute('data-index', i);
                    li[i].addEventListener('click', function () {
                        for (let i = 0; i < li.length; i++) {
                            li[i].className = '';
                        }
                        this.className = 'licheck';
                        let index = li[i].getAttribute('data-index');
                        for (let i = 0; i < ctli.length; i++) {
                            ctli[i].style.display = 'none';
                        }
                        ctli[index].style.display = 'block';
                    })
                }
            }
            //? 标题关闭时
            else {
                this.className = 'item';
                flag = true;
                uls[i].style.height = '0';
            }
        })
    }
})