import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';
//제작순서 : 메인 컴포넌트(app.js)-리스트(map이용)로 만든 영화카드-영화정보


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

//render : componentWillMount() -> render() -> componentDidMount()
//update : componentWillReceiveProps() -> shouldComponentUpdate() -> componentWillUpdate() -> render() -> componentDidUpdate
   state={
     greeting:'hello!'
   }

   componentDidMount(){
     setTimeout(()=>{
       this.setState({
         greeting:'hello again!'
       })      
     }, 5000)
   }

   render() {  
    return (
      <div className="App"> {/*react는 긴 배열에게 key값을 주라고 콘솔로 경고한다. 그래서 index 넣음*/}
         {movieInfo.map((movieInfo, index) =>{ {/*이 index는 리액트에서 기본으로 주는 함수나 변수같은녀석임*/}
          return <Movie title={movieInfo.title} image={movieInfo.poster} key={index}/> 
        })}

        {this.state.greeting}
      </div>
    );
  }
}

export default App;
