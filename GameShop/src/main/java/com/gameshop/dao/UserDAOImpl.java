package com.gameshop.dao;

import org.hibernate.Session;

import com.gameshop.model.User;
import com.gameshop.util.HibernateUtil;

public class UserDAOImpl implements UserDAO {

	@Override
	public void registerNewUser(User user) {
		//Could we use Spring to inject hibernate session into this method?
		Session session = HibernateUtil.getSessionFactory().openSession();
		session.beginTransaction();
	
		session.save(user);
		
		session.flush();
		session.getTransaction().commit();
		session.close();

	}

}
