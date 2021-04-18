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
	
	public User() {}
	public User(String email) { this.email = email; }
	public User(String email, String password) {
		this.email = email;
		this.password = password;
	}
	@Id
	@Column(name = "email", unique=true)
	private String email;
	@Column(name = "pass")
	private String password;
	@Column(name = "first_name")
	private String firstname;
	@Column(name = "last_name")
	private String lastname;
	@Column(name = "address")
	private String address;
	@Column(name = "cc_num")
	private String ccNumber;
	@Column(name = "phone_num")
	private String phoneNumber;
	@Column(name = "dob")
	private LocalDate dateOfBirth;

}
