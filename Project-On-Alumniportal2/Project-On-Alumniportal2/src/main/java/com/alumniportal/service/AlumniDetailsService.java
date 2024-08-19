package com.alumniportal.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.alumniportal.entity.AlumniDetails;
import com.alumniportal.entity.UsersDetails;

@Service
public interface AlumniDetailsService {

//	List<AlumniDetails> getAluminByEmailAndPassword(String email, String password);
	List<AlumniDetails> findAlumni(UsersDetails Alumni);

	AlumniDetails addAlumni(AlumniDetails alumni);

	AlumniDetails updateAlumni(AlumniDetails alumni);

	String deleteAlumni(AlumniDetails alumni);

}
