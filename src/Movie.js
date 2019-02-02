import React, { Component } from 'react';
import './Movie.css'
import LinesEllipsis from 'react-lines-ellipsis'


class movie extends Component {

    render() {
        return (
        <div className="Movie">
            <div className="Movie_Columns">
            <MoviePoster imaging={this.props.image} alt={this.props.title}/>
            </div>

            <div className="Movie_Columns">
           
              <h1>{this.props.title}</h1>
                <div className="Movie_Genres">
                   {this.props.genres.map(genre =>
                       <MovieGenre genre={this.props.genres}
                        key={this.props.id}/>)}
                </div>
              <p className="Movie_Synopsis">
                <LinesEllipsis
                    text={this.props.synopsis}
                    maxLine='3'
                    ellipsis='...'
                    trimRight
                    basedOn='letters'
                    />   
              </p>
           </div>
        </div>
        );
    }
}

function MovieGenre({genre}){
    return(
        <span className="Movie_Genre">{genre}</span>
    )
}


class MoviePoster extends Component{
    render(){
        return(
            <img src={this.props.imaging} alt={this.props.alt} title={this.props.alt} className="Movie_Poster"/>
        );
    }
}

export default movie;