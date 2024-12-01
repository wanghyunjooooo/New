document.addEventListener('DOMContentLoaded', function () {
    const audio = document.getElementById('drunk-shot-audio');
    const playPauseBtn = document.getElementById('play-pause-btn');
    const newSongPlayer = document.querySelector('.new-song-player');
    
    let isPlaying = false;

    // 재생/일시정지 버튼 클릭 이벤트
    playPauseBtn.addEventListener('click', function () {
        if (isPlaying) {
            audio.pause();
            newSongPlayer?.classList.remove('spin');
            playPauseBtn.classList.replace('bi-pause-fill', 'bi-caret-right-fill'); // 아이콘 변경
        } else {
            audio.play();
            newSongPlayer?.classList.add('spin');
            playPauseBtn.classList.replace('bi-caret-right-fill', 'bi-pause-fill'); // 아이콘 변경
        }
        isPlaying = !isPlaying;
    });

    // 오디오가 끝날 때
    audio.addEventListener('ended', function () {
        newSongPlayer?.classList.remove('spin');
        playPauseBtn.classList.replace('bi-pause-fill', 'bi-caret-right-fill');
        isPlaying = false;
    });
});

document.getElementById('arrow-right').addEventListener('click', function() {
    var mvPracticeImg = document.getElementById('mv-pratice-img');
    var mvImg = document.getElementById('mv-img');

    // mv-pratice-img를 보이게 설정하고 mv-img 숨기기 (모바일 화면에서만)
    mvPracticeImg.style.display = 'block';
    mvImg.style.display = 'none';

    // 2초 후에 mv-pratice-img 숨기고 mv-img 보이게 설정
    setTimeout(function() {
        mvPracticeImg.style.display = 'none'; // mv-pratice-img 숨기기
        mvImg.style.display = 'block'; // mv-img 보이기 (모바일에서는 이미 숨겨짐)
    }, 2000); // 2초
});
