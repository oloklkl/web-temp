document.addEventListener('DOMContentLoaded', function () {
    const elements = document.querySelectorAll('[include-html]');
    const fetchPromises = [];

    elements.forEach((el) => {
        const file = el.getAttribute('include-html');
        console.log('Loading file:', file);

        const fetchPromise = fetch(file)
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.text();
            })
            .then((data) => {
                el.innerHTML = data;
                el.removeAttribute('include-html');
            })
            .catch((error) => {
                console.error('Error loading file:', file, error);
            });

        fetchPromises.push(fetchPromise);
    });

    Promise.all(fetchPromises).then(() => {
        console.log('✅ 모든 HTML 파일 로드 완료!');
    });
});
