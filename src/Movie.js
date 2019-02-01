import React, { Component } from 'react';
import './Movie.css'


class movie extends Component {
    render() {
        return (
            <div>
            
            <MoviePoster imaging={this.props.image}/>

            <h1>{this.props.title}</h1>

            </div>
        );
    }
}

class MoviePoster extends Component{
    render(){
        return(
            <img src={this.props.imaging}/>


        );
    }
}

export default movie;