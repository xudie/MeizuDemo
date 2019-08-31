"use script"

window.onload = (function () {
    loadDataPic();
    loadDataEJ();
    loadDataPJ();
    loadDataZB();
    loadDataRT();
    loadDataFly();
    loadDataHD();
    loadDataPhone();
    loadDataVideo();
});

function loadDataPic() {
    $.get("/data/pic.json", null, function (data) {
        console.log(data);
        let html = ''
        data.forEach(item => {
            html += `<div class="swiper-slide">`;
            html += `<a href="${item.href}" style="background-image: url(${item.imgurl})"></a>`;
            html += `</div>`;
        });
        document.querySelector(".piclist").innerHTML = html;

        new Swiper('.swiper-container', {
            // 垂直切换选项
            //direction: 'vertical', 
            // 循环模式选项
            loop: true,
            // 如果需要分页器
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            autoplay: {
                delay: 2500,
                disableOnInteraction: false,
            },
            on: {
                slideChangeTransitionStart: function () {
                    console.log('当前的slide序号是' + this.activeIndex);
                    let textList = document.querySelectorAll(".right .nav li a");
                    let searchBorder = document.querySelector(".right .search");
                    let logoColor = document.querySelector(".logo a");
                    console.log(textList);

                    if (this.activeIndex == 2 || this.activeIndex == 5) {
                        textList.forEach(item => {
                            item.classList.add("headertext");
                        });
                        searchBorder.classList.add("section-border");
                        logoColor.classList.add("logo-color");
                    } else {
                        textList.forEach(item => {
                            item.classList.remove("headertext");
                        });
                        searchBorder.classList.remove("section-border");
                        logoColor.classList.remove("logo-color");
                    }
                }
            }
        })
    });
}

function loadDataEJ() {
    $.get("/data/ej.json", null, function (data) {
        console.log(data);
        let html = ''
        data.forEach(item => {
            html += `<div class="${item.ismain ? 'item special':'item'}"><a href="">`;
            html += `<img class="${item.ismain ? 'headset-show-img1':'same-img'}" src="${item.url}">`;
            html += `<div class="same-title ${item.ismain ? 'headset-show-title' : ''}">`;
            html += `<p>${item.name}</p>`;
            html += `<p>${item.content}</p>`;
            html += `<span><i>￥</i>${item.price}</span></div></a></div>`;
        });
        document.querySelector(".headset-show").innerHTML = html;
    });
}

function loadDataPJ() {
    $.get("/data/peijian.json", null, function (data) {
        console.log(data);
        let html = ''
        data.forEach(item => {
            html += `<div class="${item.ismain ? 'item special':'item'}"><a href="">`;
            html += `<img class="${item.ismain ? 'headset-show-img1':'same-img'}" src="${item.url}">`;
            html += `<div class="same-title ${item.ismain ? 'headset-show-title' : ''}">`;
            html += `<p>${item.name}</p>`;
            html += `<p>${item.content}</p>`;
            html += `<span><i>￥</i>${item.price}</span></div></a></div>`;
        });
        document.querySelector(".Accessories-show").innerHTML = html;
    });
}

function loadDataZB() {
    $.get("/data/zhoubian.json", null, function (data) {
        console.log(data);
        let html = ''
        data.forEach(item => {
            html += `<div class="${item.ismain ? 'item special':'item'}"><a href="">`;
            html += `<img class="${item.ismain ? 'headset-show-img1':'same-img'}" src="${item.url}">`;
            html += `<div class="same-title ${item.ismain ? 'headset-show-title' : ''}">`;
            html += `<p>${item.name}</p>`;
            html += `<p>${item.content}</p>`;
            html += `<span><i>￥</i>${item.price}</span></div></a></div>`;
        });
        document.querySelector(".Surrounding-show").innerHTML = html;
    });
}

function loadDataRT() {
    $.get("data/reitie.json", null, function (data) {
        let html = '';
        data.forEach(item => {
            html += `<div class="Post-show-item"><a href="${item.link}">`;
            html += `<img src="${item.imgSrc}">`;
            html += ` <div class="user">`;
            html += `<img src="${item.avatarSrc}">`;
            html += `<span>${item.username}</span></div>`;
            html += `<p>魅族 ${item.content}</p>`;
            html += `<span>${item.typesOf}</span></a></div>`;
        });
        document.querySelector(".Post-show").innerHTML = html;
    });
}

function loadDataFly() {
    $.get("data/fly.json", null, function (data) {
        let html = '';
        data.forEach(item => {
            html += `<div class="Flyme-show-item"><a href="${item.link}">`;
            html += `<img src="${item.imgSrc}">`;
            html += `<p>${item.title}</p></a></div>`;
        });
        document.querySelector(".Flyme-show").innerHTML = `<div class="Flyme-show-spacial"><a href="#"><img src="/images/9-1.png"></a></div>` + html;
    });
}

function loadDataHD() {
    $.get("data/huodong.json", null, function (data) {
        let html = "";
        data.forEach(item => {
            html += `<li><a href="${item.link}">`;
            html += `<img src="${item.imgSrc}">`
            html += `<p>${item.title}</p><span>${item.description}</span></a></li>`
        });
        document.querySelector(".activity").innerHTML = html;
    });
}

function loadDataPhone() {
    $.get("data/phone.json", null, function (data) {
        let html = "";
        data.forEach(item => {
            html += `<div class="${item.Judge ? 'item special':'item' }">`;
            html += `<a href="${item.link}">`;
            html += `<div class="${item.Judge ? 'classification-one':'classification-two' }"><span>${item.offer}</span></div>`;
            html += `<img class="same-img" src="${item.imgSrc}">`
            html += `<div class="same-title">`;
            html += `<p>${item.name}</p>`;
            html += `<p>${item.property}</p>`;
            html += `<span><i>￥</i>${item.value}</span></div></a></div>`;
        });
        document.querySelector(".ipone-show-region").innerHTML = html;
    });
}

function loadDataVideo() {
    $.get("data/video.json", null, function (data) {
        let html = "";
        data.forEach(item => {
            html += `<div class="video-show-item">`;
            html += `<a href="${item.url}">`;
            html += `<img src="${item.imgSrc}">`;
            html += `<i></i><p>${item.name}</p> </a></div>`
        });
        document.querySelector(".video-show").innerHTML = html;
    })
}