package com.alumniportal.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.alumniportal.entity.AlumniDetails;
import com.alumniportal.entity.UsersDetails;
import com.alumniportal.service.AlumniDetailsService;

@RestController
@RequestMapping("/user")
public class AluminiController {
	
	@Autowired
	private AlumniDetailsService alumniDetailsService;

	//viewbyName
	@PostMapping("/getAllAlumni")
	public List<AlumniDetails> getUserByName(@RequestBody UsersDetails alumni) {	
		return alumniDetailsService.findAlumni(alumni);
	}
	
	@PostMapping("/AddAlumni")
	public AlumniDetails addAlumni(@RequestBody AlumniDetails alumni) {	
		return alumniDetailsService.addAlumni(alumni);
	}
	
	@PostMapping("/UpdateAlumni")
	public AlumniDetails updateAlumni(@RequestBody AlumniDetails alumni) {	
		return alumniDetailsService.updateAlumni(alumni);
	}
	
	@PostMapping("/DeleteAlumni")
	public String deleteAlumni1(@RequestBody AlumniDetails alumni) {	
		return alumniDetailsService.deleteAlumni(alumni);
	}
	
}
