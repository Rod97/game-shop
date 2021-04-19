package com.gameshop.spring.model;

import java.time.LocalDate;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.NamedNativeQuery;
import javax.persistence.Table;

import org.hibernate.annotations.ColumnTransformer;

import lombok.Data;
//,?,crypt(?,gen_salt('bf')),?
@Entity
@Table(name = "gs_users")
//@NamedNativeQuery(name="User.insertUser", query="INSER INTO shop_data.users VALUES(?,?,?,?,?) RETURNING *;", resultClass = User.class) //call this instead of save
//@NamedNativeQuery(name="User.readUser", query="SELECT * FROM shop_data.user WHERE (email=? AND pass=crypt(?,pass));", resultClass = User.class) //call this inside login? 
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
	@ColumnTransformer(
		    read =  "pgp_sym_decrypt(" +
		            "    pass, " +
		            "    'encrypt.key'" +
		            ")",
		    write = "pgp_sym_encrypt( " +
		            "    ?, " +
		            "    'encrypt.key'" +
		            ") "
		)
	@Column(name = "pass", columnDefinition = "bytea")
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
