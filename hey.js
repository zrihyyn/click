document.addEventListener("DOMContentLoaded", () => {
    const elements = [
        document.getElementById('a'),
        document.getElementById('b'),
        document.getElementById('c'),
        document.getElementById('d'),
        document.getElementById('e'),
        document.getElementById('f'),
        document.getElementById('g'),
        document.getElementById('h'),
        document.getElementById('i'),
        document.getElementById('j'),
        document.getElementById('k'),
        document.getElementById('l'),
        document.getElementById('m'),
        document.getElementById('n'),
        document.getElementById('o'),
        document.getElementById('p'),
        document.getElementById('q'),
        document.getElementById('r'),
        document.getElementById('s'),
        document.getElementById('t'),
    ];

    const overlay = document.getElementById("overlay");
    const container = document.getElementById("container");

    overlay.addEventListener("click", function() {
        overlay.style.display = "none";
        container.style.display = "flex";
    });

    function animateElements() {
        let delay = 0;

        elements.forEach((element, index) => {
            setTimeout(() => {
                element.style.visibility = 'visible';
                setTimeout(() => {
                    element.style.visibility = 'hidden';
                }, element.id === 'a' ? 2000 : 1000); // #a 요소는 2000ms, 나머지는 1000ms 동안 보이도록 설정
            }, delay);

            delay += element.id === 'a' ? 2000 : 1300; // #a 요소의 지연 시간을 조정
        });

        setTimeout(animateElements, delay); // 모든 애니메이션이 끝난 후 다시 호출
    }

    animateElements();
});
