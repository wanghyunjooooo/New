// 카메라에 접근해서 비디오를 표시하는 함수
function startCamera() {
    // 사용자의 카메라에 접근
    navigator.mediaDevices.getUserMedia({ video: true })
      .then(function(stream) {
        // 비디오 요소에 스트림을 연결
        const videoElement = document.getElementById('video');
        videoElement.srcObject = stream;
      })
      .catch(function(error) {
        console.error('카메라에 접근할 수 없습니다: ', error);
      });
  }
  
  // 페이지 로드 시 카메라 시작
  window.onload = startCamera;
  