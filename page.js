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
    .then(movies => {
        //가져온 데이터 사용
        let result = movies.results
        result.forEach(movies => {
        
                let title = movies.title;
                let overview = movies.overview;
                let poster_path = movies.poster_path;
                let vote_average = movies.vote_average;
                console.log(title);
                console.log(overview);
                console.log(poster_path);
                console.log(vote_average);



                //이미지 주소
                let img_path = 'https://image.tmdb.org/t/p/w500' + poster_path;


                //영화정보 카드 리스트 UI 구현
                //tmdb에서 받아온 데이터 브라우저 화면에 카드 형태로 보이기
                //image url 은 base url + file size + file path 로 구성됩니다.

                //https://image.tmdb.org/t/p/w500/이미지 url

                
                // 카드 복제
                cloneCard(img_path, title, overview, vote_average);
            });

        });

        .catch(error => {
            console.log(error);
        });

    

//영화 검색기능 구현



//영화id alert창 구현

// // 각 영화 카드 요소를 선택합니다.
// var movieCards = document.querySelectorAll('.movie-card');

// // 각 카드에 클릭 이벤트 리스너를 추가합니다.
// movieCards.forEach(function(card) {
//   card.addEventListener('click', function() {
//     // 클릭된 카드의 id 속성을 가져옵니다.
//     var movieId = card.id;
    
//     // 해당 영화 데이터를 찾습니다.
//     var movieData = movies.find(function(movies) {
//       return movies.id === movieId;
//     });
    
//     // alert 창을 띄워서 영화 정보를 표시합니다.
//     window.alert("ID: " + movieId);
//   });
// });



//영화 정보 카드 리스트 UI 구현
function cloneCard(img_path, title, overview, vote_average) {

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

    // 카드를 원하는 위치에 추가합니다.
    //왜 .card-container일까?
    const cardContainer = document.querySelector('.card-container');
    cardContainer.appendChild(newCard);

}


// 각 영화 카드 요소를 선택합니다.
var movieCards = document.querySelectorAll('.movie-card');

// 각 카드에 클릭 이벤트 리스너를 추가합니다.
movieCards.forEach(function(card) {
  card.addEventListener('click', function() {
    // 클릭된 카드의 id 속성을 가져옵니다.
    var movieId = card.id;
    
    // 해당 영화 데이터를 찾습니다.
    var movieData = movies.find(function(movies) {
      return movies.id === movieId;
    });
    
    // alert 창을 띄워서 영화 정보를 표시합니다.
    window.alert("ID: " + movieId);
  });
});


