package com.gameshop.rest;

import java.util.ArrayList;
//Base required classes
import java.util.List;

//Rest annotations
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

//JSON handler
import com.fasterxml.jackson.databind.ObjectMapper;
//Annotated models
import com.gameshop.model.User;

@Path("/users")
public class UserService {

	@GET
	@Path("/")
	@Consumes(MediaType.TEXT_PLAIN)
	@Produces(MediaType.APPLICATION_JSON)
	public String getAllUsers() {
		//HibernateUtil db = new HibernateUtil();
		ObjectMapper mapper = new ObjectMapper();

		//Session session = db.getSessionFactory().openSession();
		//Query<User> query = session.createQuery("from User", User.class);
		//List<User> qList = query.list();
		
		List<User> pretend = new ArrayList<User>();
		pretend.add(new User("mavn3@gmail.com","password","Max","Nicolai"));
		try {
		return mapper.writeValueAsString(pretend);
	} catch (Exception e) {
		return e.getMessage();
	}
	}
}
