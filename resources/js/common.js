// const get = (target) => document.querySelector(target);
// const getAll = (target) => document.querySelectorAll(target);

// a 태그의 기본 이벤트 방지
const preventDefaultAnchor = () => {
    const $links = getAll('a[href="#"]');
    $links.forEach((link) => {
        if (!link.classList.contains('noPrevent')) {
            link.addEventListener('click', (e) => e.preventDefault());
        }
    });
};

// // 네비게이션 메뉴 이벤트 핸들링
// const navBar = () => {
//     const $gnblis = getAll('#gnb > ul > li');
//     const $gnbuls = getAll('#gnb ul ul'); // 모든 서브메뉴
//     const $gnb = get('#gnb');

//     $gnblis.forEach((li) => {
//         li.addEventListener('mouseenter', () => {
//             // 기존 활성화된 on 클래스 제거
//             $gnbuls.forEach((ul) => ul.classList.remove('on'));

//             // 현재 li의 하위 ul만 on 추가
//             const currentUl = li.querySelector('ul');
//             if (currentUl) {
//                 currentUl.classList.add('on');
//             }
//         });
//     });

//     $gnb.addEventListener('mouseleave', () => {
//         $gnbuls.forEach((ul) => ul.classList.remove('on'));
//     });
// };

// // 초기 실행
// (() => {
//     preventDefaultAnchor();
//     navBar();
// })();
