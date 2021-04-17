package com.gameshop.spring.model;

import java.time.LocalDate;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Data;

@Entity
@Table(name = "users")
public @Data class User {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	Long id;
	@Column(name = "email", unique=true)
	String email;
	@Column(name = "pass")
	String password;
	@Column(name = "first_name")
	String firstname;
	@Column(name = "last_name")
	String lastname;
	@Column(name = "address")
	String address;
	@Column(name = "cc_num")
	String ccNumber;
	@Column(name = "phone_num")
	String phoneNumber;
	@Column(name = "dob")
	LocalDate dateOfBirth;
}
