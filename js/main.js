const slider = document.getElementById('mvSlider');
let isDragging = false;
let startPos = 0;
let currentTranslate = 0;
let prevTranslate = 0;
let animationID;
let sliderWidth = slider.offsetWidth;

window.addEventListener('resize', () => {
    sliderWidth = slider.offsetWidth; // 창 크기가 변경되면 슬라이더 너비 재계산
});

// 슬라이더의 터치 및 마우스 이벤트 처리
slider.addEventListener('mousedown', startDrag);
slider.addEventListener('mousemove', dragging);
slider.addEventListener('mouseup', endDrag);
slider.addEventListener('mouseleave', endDrag);
slider.addEventListener('touchstart', startDrag);
slider.addEventListener('touchmove', dragging);
slider.addEventListener('touchend', endDrag);

function startDrag(event) {
    isDragging = true;
    startPos = getPositionX(event);
    animationID = requestAnimationFrame(animation); // 애니메이션 시작
    slider.classList.add('dragging');
}

function dragging(event) {
    if (!isDragging) return;
    const currentPosition = getPositionX(event);
    const movedBy = currentPosition - startPos;

    // 이동 범위를 작게 유지하면서 부드럽게 움직이도록 민감도 설정
    currentTranslate = prevTranslate + (movedBy * 1); // 민감도를 1.2로 설정해 부드럽게
    slider.style.transform = `translateX(${currentTranslate}px)`;
}

function endDrag() {
    isDragging = false;
    cancelAnimationFrame(animationID); // 애니메이션 종료

    // 슬라이드 이동 범위가 100px 미만이면 원래 자리로 돌아옴
    if (Math.abs(currentTranslate - prevTranslate) < 100) {
        currentTranslate = 0; // 원래 자리로 복귀
    }

    // 슬라이드 이동 범위가 커도 원래 자리로 돌아오는 애니메이션 설정
    slider.style.transition = 'transform 1s ease'; // 부드럽게 돌아오는 애니메이션
    slider.style.transform = `translateX(${currentTranslate}px)`;

    prevTranslate = currentTranslate; // 현재 위치 저장
    slider.classList.remove('dragging');
}

function getPositionX(event) {
    return event.type.includes('mouse') ? event.pageX : event.touches[0].clientX;
}

function animation() {
    setSliderPosition();
    if (isDragging) requestAnimationFrame(animation);
}

function setSliderPosition() {
    slider.style.transform = `translateX(${currentTranslate}px)`;
}


        // 오디오 요소 가져오기
        const audio = document.getElementById('drunk-shot-audio');
        const playButton = document.querySelector('.music-player-start');
        const stopButton = document.querySelector('.music-player-stop');

        // 재생 버튼 클릭 이벤트
        playButton.addEventListener('click', function() {
            audio.play();  // 음악 재생
            playButton.classList.add('hidden'); // 재생 버튼 숨기기
            stopButton.classList.remove('hidden'); // 정지 버튼 보이기
        });

        // 정지 버튼 클릭 이벤트
        stopButton.addEventListener('click', function() {
            audio.pause();  // 음악 일시정지
            audio.currentTime = 0;  // 음악을 처음으로 되돌리기
            stopButton.classList.add('hidden'); // 정지 버튼 숨기기
            playButton.classList.remove('hidden'); // 재생 버튼 보이기
        });
