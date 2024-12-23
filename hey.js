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

    const inputOverlay = document.getElementById("input-overlay");
    const overlay = document.getElementById("overlay");
    const container = document.getElementById("container");
    const nameInput = document.getElementById("name-input");
    const startButton = document.getElementById("start-button");

    startButton.addEventListener("click", function () {
        const name = nameInput.value.trim();
        if (name) {
            document.getElementById('a').textContent = `${name},`; // 이름 반영
            inputOverlay.style.display = "none"; // 입력 창 숨기기
            overlay.style.display = "block"; // 다음 오버레이 표시
        } else {
            alert("Please enter your name.");
        }
    });

    overlay.addEventListener("click", function () {
        overlay.style.display = "none";
        container.style.display = "flex";
        animateElements(); // 오버레이 클릭 후 애니메이션 시작
    });

    function animateElements() {
        let delay = 0;
        const visibilityDuration = 1000; // 모든 요소가 1000ms 동안 보이도록 설정
        const delayBetweenElements = 1300; // 각 요소 간의 지연 시간

        elements.forEach((element) => {
            setTimeout(() => {
                element.style.visibility = 'visible';
                setTimeout(() => {
                    element.style.visibility = 'hidden';
                }, visibilityDuration); // 1000ms 동안 보이도록 설정
            }, delay);

            delay += delayBetweenElements; // 다음 요소를 위한 지연 시간 증가
        });

        setTimeout(animateElements, delay); // 모든 애니메이션이 끝난 후 다시 호출
    }
});
