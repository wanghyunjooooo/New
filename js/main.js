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
