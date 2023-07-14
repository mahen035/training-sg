package com.training.userservice.service;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;

import com.training.userservice.model.User;

public interface UserService {
	
	ResponseEntity<List<User>> getUsers();
	ResponseEntity<User> findByName(String name);
	ResponseEntity<User> addUser(User user);
	String getOlderStudent(@RequestBody int age);

}
