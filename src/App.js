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
    fetch('https://yts.am/api/v2/list_movies.json?sort_by=download_count')
    .then(potato => potato.json()) //2진코드를 json형태로 바꿔주고
    .then(meoho => console.log(meoho)) //then엔 함수1개만 넣어야됨.
    .catch(err => console.log(err))  //에러보상코드
  }


  renderMovieInfo=()=>{   //react는 긴 배열에게 key값을 주라고 콘솔로 경고한다. 그래서 index 넣음
    const movieInfo = this.state.movieInfo.map((movieInfo, index)=>{
      return <Movie title={movieInfo.title} image={movieInfo.poster} key={index}/> //이 index는 리액트에서 기본으로 주는 함수나 변수같은녀석임. react내장기능
    })
    return movieInfo
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
