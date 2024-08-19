package com.alumniportal.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.ObjectUtils;

import com.alumniportal.entity.UsersDetails;
import com.alumniportal.repositories.UserDetailsRepo;
import com.alumniportal.service.UserDetailsService;

@Service
public class UserDetailsServiceimpl implements UserDetailsService {

	@Autowired
	public UserDetailsRepo userDetailsRepo;

	@Override
	public UsersDetails insertUser(UsersDetails user) {
		try {
			return userDetailsRepo.save(user);
		} catch (Exception e) {
			return null;
		}

	}

	@Override
	public List<UsersDetails> getUserByEmailAndPassword(String email, String password) {
		return userDetailsRepo.findByEmailAndPassword(email, password);
	}

	@Override
	public UsersDetails forgetPassword(UsersDetails user) {
		UsersDetails findUser = null;
		try {
			findUser = userDetailsRepo.findByEmailAndSecurityQuesAndSecurityAns(user.getEmail(), user.getSecurityQues(),
					user.getSecurityAns());
			if (!ObjectUtils.isEmpty(findUser)) {
				findUser.setPassword(user.getPassword());
				findUser = insertUser(user);
			}
		} catch (Exception e) {
			e.printStackTrace();
		}

		return findUser;
	}

//	update userdetails set user="";
	@Override
	public UsersDetails updateDetails(UsersDetails user) {
		return insertUser(user);
	}

}
