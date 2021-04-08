package com.gameshop.rest;

//Base required classes
import java.util.List;

//Rest annotations
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

//Hibernate classes
import org.hibernate.Session;
import org.hibernate.query.Query;

//JSON handler
import com.fasterxml.jackson.databind.ObjectMapper;

//Annotated models
import com.gameshop.model.User;

//Local Hibernate Utility
import com.gameshop.util.HibernateUtil;

@Path("/users")
public class UserService {

	@GET
	@Path("/")
	@Consumes(MediaType.TEXT_PLAIN)
	@Produces(MediaType.APPLICATION_JSON)
	public String getAllUsers() {
		ObjectMapper mapper = new ObjectMapper();

		Session session = HibernateUtil.getSessionFactory().openSession();
		Query<User> query = session.createQuery("from User", User.class);
		List<User> qList = query.list();
		try {
			return mapper.writeValueAsString(qList);
		} catch (Exception e) {
			return e.getMessage();
		}
	}
}
