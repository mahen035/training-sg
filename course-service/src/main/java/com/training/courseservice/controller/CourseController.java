package com.training.courseservice.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.training.courseservice.intercomm.UserClient;
import com.training.courseservice.model.Course;
import com.training.courseservice.repository.CourseRepository;

@RestController
@RequestMapping("/courseapi")
public class CourseController {
	
	@Autowired
	CourseRepository courseRepo;
	
	@Autowired
	UserClient userClient;
	
	@PostMapping("/course")
	public ResponseEntity<Course> addCourse(@RequestBody Course course){
		
		return new ResponseEntity<>(courseRepo.save(course), HttpStatus.CREATED);
	}
	
	@GetMapping("/courses")
	public ResponseEntity<List<Course>> getCourses(){
		return new ResponseEntity<>(courseRepo.findAll(),HttpStatus.OK);
	}
	
	@GetMapping("/service/course/{age}")
	public String findOlderUser(@PathVariable int age) {
		String name = userClient.getUserName(age);
		return name;
	}
	
	

}
