package com.alumniportal.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.alumniportal.entity.UsersDetails;

@Repository
public interface UserDetailsRepo extends JpaRepository<UsersDetails, Long> {

	List<UsersDetails> findByEmailAndPassword(String email, String password);

	UsersDetails findByEmailAndSecurityQuesAndSecurityAns(String email, String securityQues, String securityAns);

	UsersDetails findByEmail(String email);
	
	List<UsersDetails> findByFirstNameOrLastNameLike(String firstName, String lastName);

}
