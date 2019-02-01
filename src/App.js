import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';

const movieList =[
  'hi',
  'hello',
  '안녕'
]

const movieImage =[
  'https://www.google.com/imgres?imgurl=http%3A%2F%2Fmblogthumb3.phinf.naver.net%2FMjAxNzEwMDZfMTQw%2FMDAxNTA3MjYzMjA2NjQ3.QWohMsVGuwtqFkLgbzjR5AwrkQqbu4EncYxpNY3tzjUg.l93QRelpONPN_ChhdoC-bRo-UrERxOTyCcy2F_H82oYg.JPEG.hazzimit%2F%25ED%2582%25B9%25EC%258A%25A4%25EB%25A7%25A8_%25EA%25B3%25A8%25EB%2593%25A0%25EC%2584%259C%25ED%2581%25B4_%25EB%258F%2584%25EB%2584%2590%25EB%2593%259C_%25ED%258A%25B8%25EB%259F%25BC%25ED%2594%2584%25EC%259D%2598_%25ED%2583%2584%25ED%2595%25B5%25EC%259D%2584_%25EB%25B0%2594%25EB%259E%258C%2528%25EC%2597%2594%25EB%2594%25A9%25ED%2581%25AC%25EB%25A0%2588%25EB%2594%25A7_%25EC%2597%2586%25EC%259D%258C%2529.jpg%3Ftype%3Dw800&imgrefurl=http%3A%2F%2Fm.blog.naver.com%2Fhazzimit%2F221111497797&docid=SDkd2YcPUm6BgM&tbnid=VcjvGdxsyJ6vIM%3A&vet=10ahUKEwjrsofLyZngAhXUAYgKHX8CBZYQMwjzASgAMAA..i&w=800&h=800&bih=744&biw=767&q=%ED%82%B9%EC%8A%A4%EB%A7%A8&ved=0ahUKEwjrsofLyZngAhXUAYgKHX8CBZYQMwjzASgAMAA&iact=mrc&uact=8',
  'https://www.google.com/imgres?imgurl=http%3A%2F%2Fimage.chosun.com%2Fsitedata%2Fimage%2F201708%2F22%2F2017082200633_0.jpg&imgrefurl=http%3A%2F%2Fnews.chosun.com%2Fsite%2Fdata%2Fhtml_dir%2F2017%2F08%2F22%2F2017082200644.html&docid=nlh1QObxVp1adM&tbnid=Gya8qdgGVPcqfM%3A&vet=10ahUKEwjrsofLyZngAhXUAYgKHX8CBZYQMwj2ASgDMAM..i&w=540&h=776&bih=744&biw=767&q=%ED%82%B9%EC%8A%A4%EB%A7%A8&ved=0ahUKEwjrsofLyZngAhXUAYgKHX8CBZYQMwj2ASgDMAM&iact=mrc&uact=8',
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
