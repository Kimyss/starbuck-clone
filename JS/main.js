// 검색 영역(.search) 클릭 시 input에 강제 포커스 및 제어
// 검색 영역(div와 input찾기)
const searchEl = document.querySelector('.search');
console.log(searchEl);

// const searchInputEl = document.querySelector('.search input');
// 문서 전체에서 찾지 말고 아래와 같이 최적화
const searchInputEl = searchEl.querySelector('input')
console.log(searchInputEl);

// 검색 영역을 클릭하면 input 요소를 포커스하도록 실행
searchEl.addEventListener('click', function() {
  searchInputEl.focus();
});

// input 요소에 포커스(focus) 되면 placeholder 추가
// 힌트 : setAttribute()

// input 요소에 포커스가 해제 (blur) 되면 placeholder 초기화