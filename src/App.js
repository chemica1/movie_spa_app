import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';

const movieList =[
  'hi',
  'hello',
  '안녕'
]

const movieImage =[
  'https://cdn.pixabay.com/photo/2013/07/21/13/00/rose-165819_1280.jpg',
  'https://img1.daumcdn.net/thumb/R1920x0/?fname=http%3A%2F%2Fcfile1.uf.tistory.com%2Fimage%2F25257E4753D84EE013DA26',
  'https://cdn.pixabay.com/photo/2013/09/11/12/02/flower-181240_1280.jpg',
]



class App extends Component {
   render() {  
    return (
      <div className="App">
        <Movie title={movieList[0]} image={movieImage[0]}/>

        
        <Movie title={movieList[1]} image={movieImage[1]}/>

        
        <Movie title={movieList[2]} image={movieImage[2]}/>
      </div>
    );
  }
}

export default App;
