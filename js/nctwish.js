// 버튼 클릭 시 오디오 및 비디오 재생하고, 요소 숨기기
document.getElementById('playButton').addEventListener('click', function() {
    var audio = document.getElementById('audio');
    var video = document.getElementById('yushi-video');
    var waitingMessage = document.getElementById('waitingMessage');
    var playButton = document.getElementById('playButton');
    var svgIcon = document.querySelector('a svg');  // SVG 아이콘
    var notCallImage = document.getElementById('not-call');  // not-call

    // 오디오 및 비디오 재생
    audio.play();
    video.play();

    // 비디오가 재생 중일 때 클래스 추가
    video.classList.add('playing');

    // 버튼 클릭 시 요소들 숨기기
    waitingMessage.style.display = 'none';
    playButton.style.display = 'none';
    svgIcon.style.display = 'none';  // SVG 아이콘 숨기기
    notCallImage.style.display = 'block';

    // 5초 뒤에 다른 동영상 및 오디오 재생
    setTimeout(function() {
        // 새로운 오디오와 비디오 설정
        var newAudio = document.createElement('audio');
        newAudio.id = 'audio';
        newAudio.controls = true;
        newAudio.innerHTML = '<source src="/audio/유우시-밥이요밥먹었어요.mp3" type="audio/mpeg"> Your browser does not support the audio element.';

        var newVideo = document.createElement('video');
        newVideo.id = 'yushi-video';
        newVideo.classList.add('video-style');
        newVideo.muted = true;
        newVideo.playsInline = true;
        newVideo.poster = "/img/gallery-새로운-영상.jpg";
        newVideo.innerHTML = '<source src="/video/유우시-밥이요밥먹었어요.mp4" type="video/mp4"> Your browser does not support the video element.';

        // 기존의 오디오 및 비디오를 새로운 요소로 교체
        document.querySelector('.items').replaceChild(newAudio, audio);
        document.querySelector('.items').replaceChild(newVideo, video);

        // 새 오디오 및 비디오 재생
        newAudio.play();
        newVideo.play();

        // 비디오가 재생 중일 때 클래스 추가
        newVideo.classList.add('playing');

        // 5초 뒤에 또 다른 동영상 및 오디오 재생
        setTimeout(function() {
            // 또 다른 오디오와 비디오 설정
            var anotherAudio = document.createElement('audio');
            anotherAudio.id = 'audio';
            anotherAudio.controls = true;
            anotherAudio.innerHTML = '<source src="/audio/유우시-돈가스 먹었어요.mp3" type="audio/mpeg"> Your browser does not support the audio element.';

            var anotherVideo = document.createElement('video');
            anotherVideo.id = 'yushi-video';
            anotherVideo.classList.add('video-style');
            anotherVideo.muted = true;
            anotherVideo.playsInline = true;
            anotherVideo.poster = "/img/gallery-유우.jpg";
            anotherVideo.innerHTML = '<source src="/video/유우시-돈가스먹었어요.mp4" type="video/mp4"> Your browser does not support the video element.';

            // 기존의 오디오 및 비디오를 또 다른 요소로 교체
            document.querySelector('.items').replaceChild(anotherAudio, newAudio);
            document.querySelector('.items').replaceChild(anotherVideo, newVideo);

            // 새 오디오 및 비디오 재생
            anotherAudio.play();
            anotherVideo.play();

            // 비디오가 재생 중일 때 클래스 추가
            anotherVideo.classList.add('playing');

            // 5초 뒤에 세 번째 동영상 및 오디오 재생
            setTimeout(function() {
                // 세 번째 오디오와 비디오 설정
                var thirdAudio = document.createElement('audio');
                thirdAudio.id = 'audio';
                thirdAudio.controls = true;
                thirdAudio.innerHTML = '<source src="/audio/유우시-맛있겠다.mp3" type="audio/mpeg"> Your browser does not support the audio element.';

                var thirdVideo = document.createElement('video');
                thirdVideo.id = 'yushi-video';
                thirdVideo.classList.add('video-style');
                thirdVideo.muted = true;
                thirdVideo.playsInline = true;
                thirdVideo.poster = "/img/gallery-유.jpg";
                thirdVideo.innerHTML = '<source src="/video/유우시-맛있겠다.mp4" type="video/mp4"> Your browser does not support the video element.';

                // 기존의 오디오 및 비디오를 세 번째 요소로 교체
                document.querySelector('.items').replaceChild(thirdAudio, anotherAudio);
                document.querySelector('.items').replaceChild(thirdVideo, anotherVideo);

                // 새 오디오 및 비디오 재생
                thirdAudio.play();
                thirdVideo.play();

                // 비디오가 재생 중일 때 클래스 추가
                thirdVideo.classList.add('playing');

                // 5초 뒤에 네 번째 동영상 및 오디오 재생
                setTimeout(function() {
                    // 네 번째 오디오와 비디오 설정
                    var fourthAudio = document.createElement('audio');
                    fourthAudio.id = 'audio';
                    fourthAudio.controls = true;
                    fourthAudio.innerHTML = '<source src="/audio/.mp3" type="audio/mpeg"> Your browser does not support the audio element.';

                    var fourthVideo = document.createElement('video');
                    fourthVideo.id = 'yushi-video';
                    fourthVideo.classList.add('video-style');
                    fourthVideo.muted = true;
                    fourthVideo.playsInline = true;
                    fourthVideo.poster = "/img/gallery-잘먹겠습니다.jpg";
                    fourthVideo.innerHTML = '<source src="/video/유우시-쓰담쓰담.mp4" type="video/mp4"> Your browser does not support the video element.';

                    // 기존의 오디오 및 비디오를 네 번째 요소로 교체
                    document.querySelector('.items').replaceChild(fourthAudio, thirdAudio);
                    document.querySelector('.items').replaceChild(fourthVideo, thirdVideo);

                    // 새 오디오 및 비디오 재생
                    fourthAudio.play();
                    fourthVideo.play();

                    // 비디오가 재생 중일 때 클래스 추가
                    fourthVideo.classList.add('playing');

                    // 5초 뒤에 다섯 번째 동영상 및 오디오 재생
                    setTimeout(function() {
                        // 다섯 번째 오디오와 비디오 설정
                        var fifthAudio = document.createElement('audio');
                        fifthAudio.id = 'audio';
                        fifthAudio.controls = true;
                        fifthAudio.innerHTML = '<source src="/audio/영통종료.mp3" type="audio/mpeg"> Your browser does not support the audio element.';

                        var fifthVideo = document.createElement('video');
                        fifthVideo.id = 'yushi-video';
                        fifthVideo.classList.add('video-style');
                        fifthVideo.muted = true;
                        fifthVideo.playsInline = true;
                        fifthVideo.poster = "/img/gallery-밥먹었어요.jpg";
                        fifthVideo.innerHTML = '<source src="/video/유우시-안녕.mp4" type="video/mp4"> Your browser does not support the video element.';

                        // 기존의 오디오 및 비디오를 다섯 번째 요소로 교체
                        document.querySelector('.items').replaceChild(fifthAudio, fourthAudio);
                        document.querySelector('.items').replaceChild(fifthVideo, fourthVideo);

                        // 새 오디오 및 비디오 재생
                        fifthAudio.play();
                        fifthVideo.play();

                        // 비디오가 재생 중일 때 클래스 추가
                        fifthVideo.classList.add('playing');
                        
                        // 5초 후에 끝 페이지로 이동
                        setTimeout(function() {
                            window.location.href = '/end.html';  // 자동으로 end.html로 이동
                        }, 4000);  // 5초 뒤에 end.html로 이동

                    }, 5000);  // 5초 뒤에 다섯 번째 동영상과 오디오 재생

                }, 9000);  // 5초 뒤에 네 번째 동영상과 오디오 재생

            }, 5000);  // 5초 뒤에 세 번째 동영상과 오디오 재생

        }, 5000);  // 5초 뒤에 두 번째 동영상과 오디오 재생

    }, 5000);  // 5초 후에 첫 번째 새로운 동영상과 오디오 재생
});
