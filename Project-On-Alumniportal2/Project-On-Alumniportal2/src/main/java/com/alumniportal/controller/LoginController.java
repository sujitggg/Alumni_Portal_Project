package com.alumniportal.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.alumniportal.entity.UsersDetails;
import com.alumniportal.service.UserDetailsService;

@RestController
@RequestMapping("/user")
public class LoginController {
	
	@Autowired
	private UserDetailsService userServiceRepo;
	
	@PostMapping("/login")
	public List<UsersDetails> getUserByEmailAndPassword(@RequestBody UsersDetails user) {
		
		return userServiceRepo.getUserByEmailAndPassword(user.getEmail(), user.getPassword());
	}
	
	@PostMapping("/register")
	public UsersDetails insertUser(@RequestBody UsersDetails user) {
		return userServiceRepo.insertUser(user);
	}
	
	@PostMapping("/forget")
	public UsersDetails forgetPassword(@RequestBody UsersDetails user) {
		return userServiceRepo.forgetPassword(user);
	}
	
	@PostMapping("/update")
	public UsersDetails updateDetails(@RequestBody UsersDetails user) {
		return userServiceRepo.updateDetails(user);
	}
	

}
