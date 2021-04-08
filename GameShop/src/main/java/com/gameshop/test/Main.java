package com.gameshop.test;

import org.hibernate.Session;
import org.hibernate.Transaction;

import com.gameshop.model.User;
import com.gameshop.util.HibernateUtil;

public class Main {

	public static void main(String[] args) {
		User testUser = new User("mavn3@gmail.com","password","Max","Nicolai");
		
		Session session = HibernateUtil.getSessionFactory().openSession();
		
		System.out.println(session);
		
		Transaction transaction = session.beginTransaction();
		session.save(testUser);
		
		transaction.commit();
		
		session.close();	
		System.out.println("done");
		
	}

}
