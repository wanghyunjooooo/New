document.addEventListener('DOMContentLoaded', function () {
    const audio = document.getElementById('drunk-shot-audio');
    const playPauseBtn = document.getElementById('play-pause-btn');
    const volumeBtn = document.getElementById('volume-btn');
    const newSongPlayer = document.querySelector('.new-song-player');
    
    let isPlaying = false;
    let isMuted = false;

    // 재생/일시정지 버튼 클릭 이벤트
    playPauseBtn.addEventListener('click', function () {
        if (isPlaying) {
            audio.pause();
            newSongPlayer.classList.remove('spin');
            playPauseBtn.classList.replace('bi-pause-fill', 'bi-caret-right-fill'); // 아이콘 변경
        } else {
            audio.play();
            newSongPlayer.classList.add('spin');
            playPauseBtn.classList.replace('bi-caret-right-fill', 'bi-pause-fill'); // 아이콘 변경
        }
        isPlaying = !isPlaying;
    });

    // 오디오가 끝나면 자동으로 멈추고 아이콘과 애니메이션을 원래대로 되돌립니다.
    audio.addEventListener('ended', function () {
        newSongPlayer.classList.remove('spin');
        playPauseBtn.classList.replace('bi-pause-fill', 'bi-caret-right-fill');
        isPlaying = false;
    });

    // 볼륨 버튼 클릭 이벤트
    volumeBtn.addEventListener('click', function () {
        if (isMuted) {
            audio.muted = false;
            volumeBtn.classList.replace('bi-volume-mute-fill', 'bi-volume-up-fill'); // 아이콘 변경
        } else {
            audio.muted = true;
            volumeBtn.classList.replace('bi-volume-up-fill', 'bi-volume-mute-fill'); // 아이콘 변경
        }
        isMuted = !isMuted;
    });
});
