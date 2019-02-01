import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';
//제작순서 : 메인 컴포넌트(app.js)-리스트로 만든 영화카드-영화정보


//api에서 찾은 정보를 배열할 수 있는 array를 만들어보자
const movieInfo = [
  {
    title : "flower",
    poster : 'https://cdn.pixabay.com/photo/2013/07/21/13/00/rose-165819_1280.jpg'
  },

  {
    title : "city",
    poster : 'https://img1.daumcdn.net/thumb/R1920x0/?fname=http%3A%2F%2Fcfile1.uf.tistory.com%2Fimage%2F25257E4753D84EE013DA26',
  },
  {
    title : "sky",
    poster :'https://cdn.pixabay.com/photo/2013/09/11/12/02/flower-181240_1280.jpg'
  }
]

class App extends Component {
   render() {  
    return (
      <div className="App">
        {movieInfo.map(movieInfo =>{
          return <Movie title={movieInfo.title} image={movieInfo.poster} /> 
        })}
      </div>
    );
  }
}

export default App;
