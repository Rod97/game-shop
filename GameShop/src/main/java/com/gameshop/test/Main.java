package com.gameshop.test;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;

import org.hibernate.Session;
import org.hibernate.Transaction;

import com.gameshop.model.Game;
import com.gameshop.model.User;
import com.gameshop.util.HibernateUtil;

public class Main {

	public static void main(String[] args) {
		User testUser = new User("rod@gmail.com", "password2", "Rodrigo", "Flores");

		Session session = HibernateUtil.getSessionFactory().openSession();

		System.out.println(session);

		session.beginTransaction();
		session.save(testUser);

		byte[] gameImage;
		try {
			gameImage = Files.readAllBytes(Paths.get("D:\\Pictures\\GameShop-Games\\Super_Mario_Bros_2.jpg"));
			Game smb2 = new Game(123456, "Super Mario Bros. 2", 25.99f,
					"Super Mario Bros. 2 is a 2D side-scrolling platform game. "
							+ "The objective of the game is to navigate the player's character through the dream world Subcon and defeat "
							+ "the main antagonist Wart. Before each stage, the player chooses one of four different protagonists to use: "
							+ "Mario, Luigi, Toad, and Princess Toadstool.",
					gameImage, 1, "NintendoSNES");
			session.save(smb2);
			session.getTransaction().commit();

		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}

		System.out.println("done");

	}

}
