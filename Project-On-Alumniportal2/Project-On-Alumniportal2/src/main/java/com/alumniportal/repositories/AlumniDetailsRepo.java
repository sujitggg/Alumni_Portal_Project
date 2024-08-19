package com.alumniportal.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.alumniportal.entity.AlumniDetails;
import com.alumniportal.entity.UsersDetails;

public interface AlumniDetailsRepo extends JpaRepository<AlumniDetails, Long> {

//	List<AlumniDetails> findByEmailAndPassword(String email, String password);
//	List<AlumniDetails> findByNameLike(String name);
//
//	List<AlumniDetails> findByFirstNameLike(String firstName);
	
//	@Query("Select * from AlumniDetails ad inner join UsersDetails ud on ad.alumniId = ud.userId where ad.alumniId in (:idList) ")
//	List<AlumniDetails> findAllByIdIn(@Param("idList")List<Integer> idList);

}
