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
    console.log(fetch('https://yts.am/api/v2/list_movies.json?sort_by=download_count')) 
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
