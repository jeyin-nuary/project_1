//인기 영화 데이터

const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZTExODAzMzVhNGE2NzMxMTJlOTg1ZDQzZTUxMjMyYyIsInN1YiI6IjY0NzU3YWViOTI0Y2U2MDExNmM1ZmM3MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.LsITjGVhhqpYuf7KH_NEVSX7r45y_7tMtZ7OFN3UgCk'
    }
};



fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options)
    .then(response => response.json())
    .then(movies => {
        //가져온 데이터 사용
        console.log(movies);
    })
    .catch(error => {
        //오류 처리
        console.error('데이터를 가져오는 중 오류가 발생했습니다.', error);
    });



//영화정보 카드 리스트 UI 구현
//tmdb에서 받아온 데이터 브라우저 화면에 카드 형태로 보이기
//image url 은 base url + file size + file path 로 구성됩니다.

//https://image.tmdb.org/t/p/w500/이미지 url


//카드: title(제목), overview(내용요약), poster_path(포스터 이미지 경로), vote_agerage(평점)
let result = movies.results
result.forEach((i) => {
    let title = i.title;
    let overview = i.overview;
    let poster_path = i.poster_path;
    let vote_agerage = i.vote_agerage;

  
  // 이미지 주소
  poster_path = base_url + poster_sizes + img_path;
  console.log(img_path);

  // 카드 복제
  cloneCard(card_id, img_path, title, overview, vote_average);
});

function cloneCard(card_id, img_path, title, overview, vote_average) {
  // 카드 복제 로직을 구현하세요.
  // 예시: 영화 카드를 복제하여 DOM에 추가하는 등의 작업
  // 예시 코드는 아래와 같습니다.
  
  // 새로운 카드 요소를 생성합니다.
  const newCard = document.createElement('div');
  newCard.className = 'movie-card';

  // 영화 카드의 내용을 설정합니다.
  newCard.innerHTML = `
    <img src="${img_path}" alt="${title}" />
    <h2>${title}</h2>
    <p>${overview}</p>
    <span>평점: ${vote_average}</span>
  `;

  // 카드를 복제한 후에 처리할 작업을 추가하세요.
  // 예시: 클릭 이벤트 핸들러 등록

  // 카드를 원하는 위치에 추가합니다.
  const cardContainer = document.querySelector('.card-container');
  cardContainer.appendChild(newCard);
}






//카드 클릭 시 클릭한 영화 id 나타내는 alert창 띄우기 기능

// 영화 카드 요소들을 선택합니다.
const movieCards = document.querySelectorAll('.movie-card');

// 각각의 영화 카드에 클릭 이벤트 핸들러를 등록합니다.
movieCards.forEach((card) => {
    card.addEventListener('click', () => {
        // 클릭한 영화 카드의 데이터 속성인 'data-movie-id'를 가져옵니다.
        const movieId = card.getAttribute('data-movie-id');

        // 가져온 영화 ID를 alert 창으로 출력합니다.
        alert('영화 ID: ' + movieId);
    });
});






//영화 검색 UI 구현
//input 창에 입력한 문자값이 제목에 포함되는 영화들만 화면에 보이도록 한다.




//입력 후 검색버튼 클릭 시 실행되도록 한다.