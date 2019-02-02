import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';
//제작순서 : 메인 컴포넌트(app.js)-리스트(map이용)로 만든 영화카드-영화정보



class App extends Component {

//render : componentWillMount() -> render() -> componentDidMount()
//update : componentWillReceiveProps() -> shouldComponentUpdate() -> componentWillUpdate() -> render() -> componentDidUpdate
 
  state={

  }
   componentDidMount(){
     this._getMovies();
  }


  renderMovieInfo=()=>{   //index를 이용해 key값을 부여하면 좀 느리니까 api에 내장된 key값을 쓰기로한다.
    const movieInfo = this.state.movieInfo.map(movieInfo=>{
      return <Movie title={movieInfo.title} image={movieInfo.large_cover_image} key={movieInfo.id}/> 
    })
    return movieInfo
  }

  _getMovies = async()=>{
    const movies = await this._callApi()   //this._callApi함수 작업이 끝나길 기다렸다가 movies변수에 집어넣는거임
    this.setState({
      movieInfo : movies   //state에 movieInfo가 없어도 알아서 만들어주네
    })

  }

  _callApi = () =>{
    return fetch('https://yts.am/api/v2/list_movies.json?sort_by=download_count') //node공부할때 get방식으로 들온거 분석하던 그 코드를 es6에선 이렇게 쉽게 할수있다.
    .then(potato => potato.json()) //2진코드를 json형태로 바꿔주고
    .then(meoho => meoho.data.movies) //then엔 함수1개만 넣어야됨.
    .catch(err => console.log(err))  //에러보상코드  //then..then..해서 여기까지 끝나야지 비로소 return한다.

  }

   render() {  
    return (
      <div className="App"> 
         {this.state.movieInfo? this.renderMovieInfo() : 'Loading'}
      </div>
    );
  }
}

export default App;
