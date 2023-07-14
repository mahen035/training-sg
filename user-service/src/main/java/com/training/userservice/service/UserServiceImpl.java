package com.training.userservice.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.training.userservice.model.User;
import com.training.userservice.repository.UserRepository;

@Service
public class UserServiceImpl implements UserService{
	
	@Autowired
	UserRepository userRepo;

	@Override
	public ResponseEntity<List<User>> getUsers() {
		return new ResponseEntity<>(userRepo.findAll(), HttpStatus.OK);
	}

	@Override
	public ResponseEntity<User> findByName(String name) {
		return new ResponseEntity<>(userRepo.findByFirstName(name), HttpStatus.OK);
	}

	@Override
	public ResponseEntity<User> addUser(User user) {
		// TODO Auto-generated method stub
		return new ResponseEntity<>(userRepo.save(user), HttpStatus.CREATED);
	}

	@Override
	public String getOlderStudent(int age) {
		return userRepo.findOlderUser(age);
	}

}
