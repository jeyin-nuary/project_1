//인기 영화 데이터

const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZTExODAzMzVhNGE2NzMxMTJlOTg1ZDQzZTUxMjMyYyIsInN1YiI6IjY0NzU3YWViOTI0Y2U2MDExNmM1ZmM3MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.LsITjGVhhqpYuf7KH_NEVSX7r45y_7tMtZ7OFN3UgCk'
    }
};



fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options)
    .then(response => {
        return response.json()
    })
    .then(data => {
        //가져온 데이터 사용
        let movies = data.results;

        //영화 검색 이벤트 핸들러
        function handleSearch(event) {
            event.preventDefault(); //폼 제출 이벤트 막기
        }

        //검색어 입력값 가져오기
        var searchInput = document.getElementById('search-input').value;


        //영화 검색
        var searchResults = movies.filter(movie => movie.title.toLowerCase().includes(searchInput.toLowerCase()));

        //영화 카드 리스트 UI 업데이트
        renderMovieCards(searchResults);
    })

   //영화 카드 리스트 UI 업데이트
function renderMovieCards(movies) {
            var cardContainer = document.querySelector('.card-container');
            cardContainer.innerHTML = '';  //기존 카드 제거

            movies.forEach(function (movie) {
                var title = movie.title;
                var overview = movie.overview;
                var posterPath = movie.poster_path;
                var voteAverage = movie.vote_average;

                //이미지 주소
                var imgPath = 'https://image.tmdb.org/t/p/w500' + posterPath;


                //새로운 카드 요소 생성
                var newCard = document.createElement('div');
                newCard.className = 'movie-card';
                newCard.innerHTML = `
        <img src="${imgPath}" alt="${title}" />
        <h2>${title}</h2>
        <p>${overview}</p>
        <span>평점: ${voteAverage}</span>
      `;

                //카드를 카드 컨테이너에 추가
                cardContainer.appendChild(newCard);
            });
}


// 검색 이벤트 리스너 등록
var searchForm = document.querySelector('.search');
searchForm.addEventListener('submit', handleSearch);

// 인기 영화 목록 초기 표시
renderMovieCards(movies);







