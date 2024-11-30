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
  
  function navigateToCall(image) {
    const name = image.getAttribute('data-name'); // 클릭된 이미지의 이름을 가져옴
    window.location.href = `call.html?name=${name}`; // 쿼리 문자열로 전달
}

  // URL에서 'name' 파라미터를 가져오기
  const urlParams = new URLSearchParams(window.location.search);
  const name = urlParams.get('name'); // 'name' 값 가져오기

  // 'name-display' id를 가진 h1 요소에 이름을 표시
  document.getElementById('name-display').innerText = name;

    // h1 요소를 선택
    const nameDisplay = document.getElementById('name-display');
    const messageLink = document.getElementById('message-link');

    // h1 텍스트에 맞춰 링크 수정
    const name1 = nameDisplay.textContent.trim();

    switch (name1) {
        case "료":
            messageLink.href = "nctwish/ryo.html";
            break;
        case "시온":
            messageLink.href = "nctwish/sion.html";
            break;
        case "유우시":
            messageLink.href = "nctwish/yushi.html";
            break;
        case "리쿠":
            messageLink.href = "nctwish/riku.html";
            break;
        case "사쿠야":
            messageLink.href = "nctwish/sakuya.html";
            break;
        case "재희":
            messageLink.href = "nctwish/daeyoung.html";
            break;
        default:
            // 이름이 일치하지 않으면 아무 것도 하지 않음
            messageLink.href = "#";
            break;
    }

    
    