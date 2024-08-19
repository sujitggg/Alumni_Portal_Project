package com.alumniportal.service;

import java.util.List;

import com.alumniportal.entity.UsersDetails;

public interface UserDetailsService {

	List<UsersDetails> getUserByEmailAndPassword(String email, String password);

	UsersDetails insertUser(UsersDetails user);

	UsersDetails forgetPassword(UsersDetails user);

	UsersDetails updateDetails(UsersDetails user);

}
