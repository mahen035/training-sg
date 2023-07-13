package com.training.userservice.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.training.userservice.model.User;

public interface UserRepository extends JpaRepository<User, Long>{
	
	User findByFirstName(String firstName);
	
	@Query("select u.firstName from User u where u.age > :param")
	String findOlderUser(@Param("param") int age);
	

}
