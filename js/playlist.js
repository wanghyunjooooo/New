// 각각의 버튼과 오디오 요소를 가져옵니다.
const playPauseBtn1 = document.getElementById('play-pause-btn1');
const playPauseBtn2 = document.getElementById('play-pause-btn2');
const playPauseBtn3 = document.getElementById('play-pause-btn3');

const song1 = document.getElementById('song1');
const song2 = document.getElementById('song2');
const song3 = document.getElementById('song3');

// 음악을 멈추는 함수
function stopAllSongs() {
    song1.pause();
    song2.pause();
    song3.pause();

    // 아이콘 초기 상태로 설정
    playPauseBtn1.classList.remove('bi-pause-fill');
    playPauseBtn1.classList.add('bi-caret-right-fill');
    playPauseBtn2.classList.remove('bi-pause-fill');
    playPauseBtn2.classList.add('bi-caret-right-fill');
    playPauseBtn3.classList.remove('bi-pause-fill');
    playPauseBtn3.classList.add('bi-caret-right-fill');
}

// playPauseBtn1 클릭 시 음악 재생/일시 정지
playPauseBtn1.addEventListener('click', () => {
    if (song1.paused) {
        stopAllSongs();  // 다른 음악을 멈춥니다
        song1.play();
        playPauseBtn1.classList.remove('bi-caret-right-fill');
        playPauseBtn1.classList.add('bi-pause-fill');
    } else {
        song1.pause();
        playPauseBtn1.classList.remove('bi-pause-fill');
        playPauseBtn1.classList.add('bi-caret-right-fill');
    }
});

// playPauseBtn2 클릭 시 음악 재생/일시 정지
playPauseBtn2.addEventListener('click', () => {
    if (song2.paused) {
        stopAllSongs();  // 다른 음악을 멈춥니다
        song2.play();
        playPauseBtn2.classList.remove('bi-caret-right-fill');
        playPauseBtn2.classList.add('bi-pause-fill');
    } else {
        song2.pause();
        playPauseBtn2.classList.remove('bi-pause-fill');
        playPauseBtn2.classList.add('bi-caret-right-fill');
    }
});

// playPauseBtn3 클릭 시 음악 재생/일시 정지
playPauseBtn3.addEventListener('click', () => {
    if (song3.paused) {
        stopAllSongs();  // 다른 음악을 멈춥니다
        song3.play();
        playPauseBtn3.classList.remove('bi-caret-right-fill');
        playPauseBtn3.classList.add('bi-pause-fill');
    } else {
        song3.pause();
        playPauseBtn3.classList.remove('bi-pause-fill');
        playPauseBtn3.classList.add('bi-caret-right-fill');
    }
});
