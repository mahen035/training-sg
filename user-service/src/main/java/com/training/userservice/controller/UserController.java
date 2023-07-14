package com.training.userservice.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.training.userservice.model.User;
import com.training.userservice.service.UserService;

@RestController  // @Controller + @ResponseBody
@RequestMapping("/home")
public class UserController {
	
	@Autowired
	UserService userService;
	
	@GetMapping("/main")
	public String greet() {
		return "Hello World!";
	}
	
	@GetMapping("/users")
	public ResponseEntity<List<User>> getUsers(){
		return userService.getUsers();
		
	}
	
	@GetMapping("/user/find")
	public ResponseEntity<User> findByName(@RequestParam("firstName") String name){
		return userService.findByName(name);
	}
	
	@PostMapping("/user")
	public ResponseEntity<User> addUser(@RequestBody User user){
		return userService.addUser(user);
	}
	
	/*@GetMapping("/user/find/{age}")
	public String getOlderStudent(@PathVariable("age") int age) {
		return userRepository.findOlderUser(age);
	}*/
	
	@PostMapping("/user/find")
	public String getOlderStudent(@RequestBody int age) {
		return userService.getOlderStudent(age);
	}
	
	// Fetch all users having age greater than a given age
	// Update a record
	// Delete a record
	
	
}

// Controller: Interface between the view and the model(data)
// Take all requests
