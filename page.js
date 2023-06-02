window.onload = function(){
	//실행될 코드
let globalMovies 

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
globalMovies = data.results;

renderMovieCards(movies);
       

        //검색어 입력값 가져오기
        var searchInput = document.getElementById('search-input');
        console.log("searchInput:", searchInput);

        var searchBtn = document.getElementById("search-btn")


        // movies = movies.filter(movie => movie.title.includes(searchInput))
        // renderMovieCards(movies);


        //영화 검색, 대소문자 구분 안함
        //영화 검색, 대소문자 구분 안함
        //영화 검색, 대소문자 구분 안함 => alt + shift + 아래 화살표 키


      
        searchInput.addEventListener('change',(e) => {
            console.log(e.target.value);
            const searchInputvalue = e.target.value;
            var searchResults = movies.filter(movie => {
                return movie.title.toLowerCase().includes(searchInputvalue.toLowerCase());
            })
            renderMovieCards(searchResults);
        } )
        // renderMovieCards(searchResults);
    })
        //영화 카드 리스트 UI 업데이트
        //searchResults배열은 검색어와 일치하는 영화
        // renderMovieCards(searchResults);


        // 검색 이벤트 리스너 등록
        // var searchForm = document.querySelector('.search');
        // searchForm.addEventListener('submit', handleSearch);
       
        //영화 카드 리스트 UI 업데이트
        function renderMovieCards(movies) {
            var cardContainer = document.querySelector('.card-container');
            cardContainer.innerHTML = '';  //기존 카드 제거
                let a =[];
           
            var searchInput = document.getElementById('search-input').value;
            movies.forEach(movie => {
                // if (searchInput === movie.title) {

                    var id = movie.id;
                    var title = movie.title;
                    var overview = movie.overview;
                    var posterPath = movie.poster_path;
                    var voteAverage = movie.vote_average;
                    var movieId = movie.id; //영화 id 추가



                    //이미지 주소
                    var imgPath = 'https://image.tmdb.org/t/p/w500' + posterPath;


                    //새로운 카드 요소 생성
                    // var newCard = document.createElement('div');
                    // newCard.className = 'movie-card';
                    const html =`
                    <div class="movie-card">
                        <img src="${imgPath}" alt="${title}" data-id="${id}"/>
                        <h2>${title}</h2>
                        <p>${overview}</p>
                        <span>평점: ${voteAverage}</span>
                    </div>
                `;
                a.push(html)
                //     newCard.innerHTML = `
                //     <img src="${imgPath}" alt="${title}" data-id="${id}"/>
                //     <h2>${title}</h2>
                //     <p>${overview}</p>
                //     <span>평점: ${voteAverage}</span>
                // `;

                    //카드를 카드 컨테이너에 추가
                    // cardContainer.appendChild(newCard);
                    cardContainer.innerHTML=a.join("")
                // };
            })

            
        //  //영화 이미지 클릭 이벤트 리스너 등록
        //  console.log( document.querySelectorAll('.movie-card')); // 
         const movieImages = document.querySelectorAll('.movie-card img');
         console.log(movieImages);
         movieImages.forEach((image) => {
             image.addEventListener('click', handleImageClick);

             // 영화 이미지 클릭 이벤트 핸들러
             function handleImageClick(event) {
                 console.log(event.target);
                 const movieId = event.target.dataset.id; //클릭한 이미지의 영화 id 가져오기
                 alert('ID: ' + movieId);

             }
         });

        // // 영화 이미지 클릭 이벤트 핸들러
        // function handleImageClick(event) {
        //     console.log(event.target);
        //     const movieId = event.target.dataset.id; //클릭한 이미지의 영화 id 가져오기
        //     alert('ID: ' + movieId);

        }


        // 인기 영화 목록 초기 표시
            // renderMovieCards(movies);

        }
        // renderMovieCards(movies);
