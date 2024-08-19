package com.alumniportal.entity;

import java.time.Year;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
@Table(name = "Alumni_Details")
public class AlumniDetails {

	@Id
	@Column(name = "alumni_id")
	private Long alumniId;

//  UI Side restriction to check valid mobile no
	@Column(nullable = false, unique = true)
	private String email;

	@Column(name = "year_of_graduation", nullable = false)
	private Year yearOfGraduation;

	@Column(name = "prn_no", nullable = false, unique = true, length = 50)
	private String prnNo;

	@Column(nullable = false, length = 255)
	private String department;

	@Column(name = "current_location", length = 255)
	private String currentLocation;

	@Column(length = 255)
	private String companyName;

	@Column(name = "profile_picture", length = 255)
	private String profilePicture;

	@Column(name = "current_designation", length = 255)
	private String currentDesignation;

	@Column(columnDefinition = "TEXT")
	private String achievements;

	@OneToOne(cascade = CascadeType.MERGE)
	@JoinColumn(name = "alumni_id", referencedColumnName = "user_id")
	private UsersDetails user;

}
