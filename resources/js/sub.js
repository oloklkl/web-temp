import data from './data.js';
import videoData from './videoData.js';

//서브페이지의 공통부분
const subVisual = () => {};
const subText = () => {};
const subBanner = () => {};

// 페이지별 함수
//sub1
//sub2
const subTab = () => {
    let $box = getAll('.sub2 .sub-tab .con-box .box');
    let $li = getAll('.sub2 .sub-tab .tab li');
    let $con = get('#content');
    let id = 0,
        el = null,
        h = 0,
        old = 0;

    $box[id].classList.add('on');
    h = getComputedStyle($box[id]).height;
    h = parseInt(h) + 500;
    $con.style.height = h + 'px';

    $li.forEach((item, idx) => {
        item.addEventListener('click', (e) => {
            id = idx;

            $li[id].classList.add('on');
            $li[old].classList.remove('on');

            $box[id].classList.add('on');
            $box[old].classList.remove('on');

            h = getComputedStyle($box[id]).height;
            h = parseInt(h) + 500;
            $con.style.height = h + 'px';

            old = id;
        });
    });
};

//sub3에 출력
const gallery = () => {
    const $list = get('.sub3 .con-box .list');
    const $more = get('.sub3 .more');
    const $next = get('.popup-gallery .gallelry-body .next');
    const $prev = get('.popup-gallery .gallelry-body .prev');
    const $close = get('.popup-gallery .gallelry-header');
    const $bg = get('.bg');
    const $popup = get('.popup-gallery');
    const $bimg = get('.popup-gallery .gallelry-body img');
    const $strong = get('.popup-gallery .gallelry-body strong');
    const $total = get('.popup-gallery .gallelry-header .total-img');

    let imgurl = '',
        current = 0,
        bimg = '',
        totalImage = data.length,
        cnt = 0;

    const showImg = () => {
        if (cnt > totalImage - 1) return;
        for (let i = 0; i < 8; i++) {
            const li = document.createElement('li');
            const img = document.createElement('img');
            img.setAttribute('src', data[cnt].img);
            img.setAttribute('alt', data[cnt].title);
            li.append(img);
            $list.append(li);
            cnt++;
        }

        const $li = getAll('.sub3 .con-box .list li');
        $li.forEach((item, idx) => {
            item.addEventListener('click', (e) => {
                current = idx;
                $bg.classList.add('show');
                $popup.classList.add('show');
                galleryPopup();
            });
        });
    };
    showImg();

    function galleryPopup() {
        $total.innerHTML = `
        image <span>${data[current].id}</span> of
        <strong>${totalImage}</strong> 
        `;
        $bimg.setAttribute('src', data[current].img);
        $bimg.setAttribute('alt', data[current].title);
        $strong.textContent = data[current].title;
        $bimg.animate({ opacity: [0, 1] }, 300);
    }

    $more.addEventListener('click', (e) => {
        showImg();
    });
    $next.addEventListener('click', (e) => {
        current = current >= cnt - 1 ? 0 : current + 1;
        galleryPopup();
    });
    $prev.addEventListener('click', (e) => {
        current = current <= 0 ? cnt - 1 : current - 1;
        galleryPopup();
    });
    $bg.addEventListener('click', (e) => {
        $bg.classList.remove('show');
        $popup.classList.remove('show');
    });
    $close.addEventListener('click', (e) => {
        $bg.classList.remove('show');
        $popup.classList.remove('show');
    });
};

//sub4
const videoList = () => {
    let $list = get('.sub4 .list');
    let $vid = get('.sub4 .video iframe');
    videoData.forEach((item, idx) => {
        $list.innerHTML += `
        <div class=${item.videoId}>
            <img src=${item.thumbNailSrc} alt="" />
        </div>
        `;
    });
    let $listdiv = getAll('.sub4 .list div');
    $listdiv.forEach((item, idx) => {
        item.addEventListener('click', (e) => {
            //alert(idx);
            $vid.setAttribute('src', videoData[idx].videoSrc);
        });
    });
};

//sub5

//페이지별 함수 영역
const sub1 = () => {};
const sub2 = () => {
    subTab();
};
const sub3 = () => {
    gallery();
};
const sub4 = () => {
    videoList();
};
const sub5 = () => {};
const sub6 = () => {};
const sub7 = () => {};

const subInit = () => {
    subVisual();
    subText();
    subBanner();

    //페이지별 sub 함수호출
    if (location.pathname.split('/').pop() === 'sub1.html') {
        sub1();
    }
    if (location.pathname.split('/').pop() === 'sub2.html') {
        sub2();
    }
    if (location.pathname.split('/').pop() === 'sub3.html') {
        sub3();
    }
    if (location.pathname.split('/').pop() === 'sub4.html') {
        sub4();
    }
    if (location.pathname.split('/').pop() === 'sub5.html') {
        sub5();
    }
    if (location.pathname.split('/').pop() === 'login.html') {
        sub6();
    }
    if (location.pathname.split('/').pop() === 'join.html') {
        sub7();
    }
};

(() => {
    subInit();
})();
