//전체 공통
const get = (target) => document.querySelector(target);
const getAll = (target) => document.querySelectorAll(target);

let $links = getAll('a[href="#"]');
$links.forEach((link, idx) => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
    });
});

// 공통으로 들어가는 내용을 성격별로 함수로 만들기
const navBar = () => {
    const $gnblis = getAll('#header .nav .gnb > li');
    const $subs = getAll('#header .nav .gnb > li .sub');
    const $header = get('#header');

    $gnblis.forEach((li, idx) => {
        li.addEventListener('mouseenter', (e) => {
            $subs.forEach((subItem) => {
                subItem.classList.remove('on');
            });
            $subs[idx].classList.add('on');
            $header.classList.add('on');
        });
    });

    $header.addEventListener('mouseleave', (e) => {
        $subs.forEach((subItem) => {
            subItem.classList.remove('on');
        });
        $header.classList.remove('on');
    });
};

//패밀리 사이트
const familySite = () => {};

const comInit = () => {
    const getPage = (page, tag) => {
        fetch(page)
            .then((res) => res.text())
            .then((res) => {
                if (tag === '#header') {
                    get(tag).innerHTML = res;
                    navBar();
                    // 헤더에서 실행되는 함수
                }
                if (tag === '#footer') {
                    get(tag).innerHTML = res;
                    familySite();
                }
            });
    };

    getPage('page/header.html', '#header');
    getPage('page/footer.html', '#footer');
};

// 즉시실행함수
(() => {
    comInit();
})();
