package com.alumniportal.service.impl;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.ObjectUtils;

import com.alumniportal.entity.AlumniDetails;
import com.alumniportal.entity.UsersDetails;
import com.alumniportal.repositories.AlumniDetailsRepo;
import com.alumniportal.repositories.UserDetailsRepo;
import com.alumniportal.service.AlumniDetailsService;

@Service
public class AlumniDetailsServiceimpl implements AlumniDetailsService {

	@Autowired
	public AlumniDetailsRepo AlumniDetailsRepo;

	@Autowired
	public UserDetailsRepo userDetailsRepo;

//	@Override
//	public List<AlumniDetails> getAluminByEmailAndPassword(String email, String password) {
//		return AlumniDetailsRepo.findByEmailAndPassword(email, password);
//	}

	@Override
	public List<AlumniDetails> findAlumni(UsersDetails alumni) {
		List<AlumniDetails> alumniList = new ArrayList<>();
		try {
			List<UsersDetails> userDetailsMap = userDetailsRepo.findByFirstNameOrLastNameLike(alumni.getFirstName(),
					alumni.getLastName());
			if (!ObjectUtils.isEmpty(userDetailsMap)) {
				alumniList = AlumniDetailsRepo
						.findAllById(userDetailsMap.stream().map(UsersDetails::getUserId).toList());
			}

		} catch (Exception e) {
			e.printStackTrace();
		}
		return alumniList;
	}

	@Override
	public AlumniDetails addAlumni(AlumniDetails alumni) {
		try {
			UsersDetails userDetails = userDetailsRepo.findByEmail(alumni.getEmail());
			if (!ObjectUtils.isEmpty(userDetails)) {
				alumni.setAlumniId(userDetails.getUserId());
				AlumniDetailsRepo.save(alumni);
			}
			return alumni;
		} catch (Exception e) {
			e.printStackTrace();
			return new AlumniDetails();
		}

	}

	@Override
	public AlumniDetails updateAlumni(AlumniDetails alumni) {
		return addAlumni(alumni);
	}

	@Override
	public String deleteAlumni(AlumniDetails alumni) {
		String msg = "";
		try {
			if (AlumniDetailsRepo.existsById(alumni.getAlumniId())) {
				AlumniDetailsRepo.delete(alumni);
				msg = "Record Is Successfully Deleted";
			}
			msg = "No Record Found";
		} catch (Exception e) {
			msg = "Falid to delete Record";
		}
		return msg;

	}

}
