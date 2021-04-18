package com.gameshop.spring.controllers;

import java.util.HashMap;
import java.util.Map;
<<<<<<< HEAD
=======

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
>>>>>>> 8fab94e60e5b4e7b3ebe710763b89a4e006ee43f
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
	@GetMapping("/{id}")
	public ResponseEntity<User> getUserByUsername(@PathVariable(value = "id") Long id, HttpServletRequest request)
			throws ResourceNotFoundException, NotAllowedException {
		if (request.getAttribute("user") != null) {
			User user = (User) request.getAttribute("user");

			if (user.getId() == id) {
				user = userRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("User not found"));

				return ResponseEntity.ok().body(user);
			} else {
				throw new NotAllowedException("You do not have access to this page");
			}
		} else {
			throw new NotAllowedException("You do not have access to this page");
		}

	}

	@PutMapping("/{id}")
	public ResponseEntity<User> updateUser(@PathVariable(value = "id") Long id, @Valid @RequestBody User userDetails,
			HttpServletRequest request) throws ResourceNotFoundException, NotAllowedException {
		if (request.getAttribute("user") != null) {

			User user = (User) request.getAttribute("user");

			if (user.getId() == id) {

				user = userRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("User not found"));

				user.setAddress(userDetails.getAddress());
				user.setCcNumber(userDetails.getCcNumber());
				user.setDateOfBirth(userDetails.getDateOfBirth());
				user.setEmail(userDetails.getEmail());
				user.setFirstname(userDetails.getFirstname());
				user.setLastname(userDetails.getLastname());
				user.setPhoneNumber(userDetails.getPhoneNumber());
				user.setPassword(userDetails.getPassword());

				final User updatedUser = userRepository.save(user);

				request.setAttribute("user", updatedUser);
				return ResponseEntity.ok(updatedUser);
			} else {
				throw new NotAllowedException("You do not have access to this page");
			}
		} else {
			throw new NotAllowedException("You do not have access to this page");
		}
	}

	@DeleteMapping("/{id}")
	public Map<String, Boolean> deleteUser(@PathVariable(value = "id") Long id, HttpServletRequest request)
			throws ResourceNotFoundException, NotAllowedException {
		if (request.getAttribute("user") != null) {

			User user = (User) request.getAttribute("user");

			if (user.getId() == id) {
				user = userRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("User not found"));

				userRepository.delete(user);
				Map<String, Boolean> response = new HashMap<>();
				response.put("deleted", Boolean.TRUE);
				return response;
			} else {
				throw new NotAllowedException("You do not have access to this page");
			}
		} else {
			throw new NotAllowedException("You do not have access to this page");
		}
	}

	@PostMapping("/login")
	public User login(@RequestBody Credentials credentials, HttpSession session) throws ResourceNotFoundException {
		Example<User> userEx = Example.of(new User(credentials.getEmail(), credentials.getPassword()));
		User user = userRepository.findOne(userEx).orElseThrow(() -> new ResourceNotFoundException("User not found"));
		session.setAttribute("user", user);
		return user;
	}
}
