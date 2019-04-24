package com.stackroute.movie.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.stackroute.movie.domain.Movie;



public interface MovieRepository extends JpaRepository<Movie, Integer> {

	
	List<Movie> findByUserId(String userId);
}
