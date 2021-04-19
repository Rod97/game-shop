package com.gameshop.spring.controllers;

import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Example;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.gameshop.spring.exceptions.NotAllowedException;
import com.gameshop.spring.exceptions.ResourceNotFoundException;
import com.gameshop.spring.model.Credentials;
import com.gameshop.spring.model.User;
import com.gameshop.spring.repository.UserRepository;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("user/")

//add "http://localhost:8080/user/" as the base url in the Angular service
//that should consume these REST services
public class UserController {
	@Autowired
	private UserRepository userRepository;

	@PostMapping("/postuser")
	public User createUser(@RequestBody User user) throws JsonMappingException, JsonProcessingException {
		return userRepository.save(user);
	}

	// think we will need to include an id field to the user model
	@GetMapping("/{email}")
	public ResponseEntity<User> getUserByEmail(@PathVariable(value = "email") String email)
			throws ResourceNotFoundException, NotAllowedException {
		Example<User> userEx = Example.of(new User(email));
		User user = userRepository.findOne(userEx).orElseThrow(() -> new ResourceNotFoundException("User not found"));

		return ResponseEntity.ok().body(user);

	}

	@PutMapping("/{email}")
	public ResponseEntity<User> updateUser(@PathVariable(value = "email") String email,
			@Valid @RequestBody User userDetails, HttpServletRequest request)
			throws ResourceNotFoundException, NotAllowedException {

		Example<User> userEx = Example.of(new User(email));
		User user = userRepository.findOne(userEx).orElseThrow(() -> new ResourceNotFoundException("User not found"));


		//should NOT update email, since it is a primary key
		//user.setEmail(userDetails.getEmail());
		//user.setDateOfBirth(userDetails.getDateOfBirth());
		//user.setFirstname(userDetails.getFirstname());
		//user.setLastname(userDetails.getLastname());
		user.setCcNumber(userDetails.getCcNumber());
		user.setPhoneNumber(userDetails.getPhoneNumber());
		user.setPassword(userDetails.getPassword());
		user.setAddress(userDetails.getAddress());

		final User updatedUser = userRepository.save(user);

		request.setAttribute("user", updatedUser);
		return ResponseEntity.ok(updatedUser);
	}

	@DeleteMapping("/{email}")
	public Map<String, Boolean> deleteUser(@PathVariable(value = "email") String email, HttpServletRequest request)
			throws ResourceNotFoundException, NotAllowedException {

		User user = userRepository.findOne(Example.of(new User(email)))
				.orElseThrow(() -> new ResourceNotFoundException("User not found"));

		userRepository.delete(user);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return response;
	}

	@PostMapping("/login")
	public User login(@RequestBody User loginUser) throws ResourceNotFoundException {
		Example<User> userEx = Example.of(loginUser);
		User user = userRepository.findOne(userEx).orElseThrow(() -> new ResourceNotFoundException("User not found"));
		return user;
	}
}
