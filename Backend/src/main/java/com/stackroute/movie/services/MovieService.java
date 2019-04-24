package com.stackroute.movie.services;

import java.util.List;

import com.stackroute.movie.domain.Movie;
import com.stackroute.movie.exception.MovieAlreadyExistsException;
import com.stackroute.movie.exception.MovieNotFoundException;

public interface MovieService {

	boolean saveMovie(Movie movie) throws MovieAlreadyExistsException;
	
	Movie updateMovie(int id,Movie movie) throws MovieNotFoundException;
	
	boolean deleteMovieById(int id) throws MovieNotFoundException;
	
	Movie getMovieById(int id) throws MovieNotFoundException;
	
	List<Movie> getMyMovies(String userId) throws MovieNotFoundException;
	
	int getIdwithUserIdAndMovieId(String userId, int movieId);

}
