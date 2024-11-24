// 이미지 경로 배열 (확장자 추가)
const images = [
    'img/gallery-유우시1.jpg',
    'img/gallery-유우시2.jpg',
    'img/gallery-리쿠.jpg',
    'img/gallery-시온.jpg',
    'img/gallery-사쿠야.jpg',
    'img/gallery-재희.jpg',
    'img/gallery-료.jpg'
];

let currentIndex = 0;  // 현재 이미지 인덱스

document.getElementById('change-image').addEventListener('click', function() {
    currentIndex = (currentIndex + 1) % images.length;  // 인덱스를 1씩 증가시키고, 배열의 길이로 나누어 순환
    document.getElementById('image-to-change').src = images[currentIndex];  // 이미지 변경

    // 다운로드 링크도 변경
    updateDownloadLink();
});

// 반대로 이동하는 버튼 클릭 시, 이미지 거꾸로 변경
document.getElementById('reverse-image').addEventListener('click', function() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;  // 인덱스를 1씩 감소시키고, 배열의 길이로 나누어 순환
    document.getElementById('image-to-change').src = images[currentIndex];  // 이미지 변경

      // 다운로드 링크도 변경
      updateDownloadLink();
});

// 다운로드 링크를 동적으로 변경하는 함수
function updateDownloadLink() {
    const downloadLink = document.getElementById('download');
    const currentImage = images[currentIndex];  // 현재 표시된 이미지

    // 현재 이미지 이름을 다운로드 파일명으로 사용
    const imageName = currentImage.split('/').pop();  // 'img/gallery-유우시1.jpg' -> '유우시1.jpg'
    downloadLink.href = currentImage;  // 링크의 href를 현재 이미지로 설정
    downloadLink.download = imageName;  // 다운로드 시 사용할 파일명 설정
}

 // 전체 <a> 태그 클릭 시 다운로드를 막는 함수
 document.getElementById('download').addEventListener('click', function(event) {
    event.preventDefault(); // 기본 동작인 다운로드를 막음
  });

    // SVG 요소 클릭 시 다운로드 실행하는 함수
    document.getElementById('download-svg').addEventListener('click', function(event) {
        event.stopPropagation(); // 이벤트가 부모로 전파되는 것을 막음
        var link = document.getElementById('download');
        link.click(); // 링크를 클릭한 것처럼 동작하게 하여 다운로드 실행
      });
