package com.training.userservice.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.training.userservice.model.User;
import com.training.userservice.repository.UserRepository;

@RestController  // @Controller + @ResponseBody
@RequestMapping("/home")
public class UserController {
	
	@Autowired
	UserRepository userRepository;
	
	@GetMapping("/main")
	public String greet() {
		return "Hello World!";
	}
	
	@GetMapping("/users")
	public ResponseEntity<List<User>> getUsers(){
		List<User> users = userRepository.findAll();
		
		return new ResponseEntity<>(users, HttpStatus.CREATED);
		
	}
	
	@GetMapping("/user/find")
	public ResponseEntity<User> findByName(@RequestParam("firstName") String name){
		return new ResponseEntity<>(userRepository.findByFirstName(name), HttpStatus.OK);
	}
	
	@PostMapping("/user")
	public ResponseEntity<User> addUser(@RequestBody User user){
		User userAdded = userRepository.save(user);
		return new ResponseEntity<>(userAdded, HttpStatus.CREATED);
	}
	
	@GetMapping("/user/find/{age}")
	public String getOlderStudent(@PathVariable("age") int age) {
		return userRepository.findOlderUser(age);
	}
	
	// Fetch all users having age greater than a given age
	// Update a record
	// Delete a record
	
	
}

// Controller: Interface between the view and the model(data)
// Take all requests
