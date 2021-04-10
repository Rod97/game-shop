package com.gameshop.test;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.Scanner;

import org.hibernate.Session;

import com.gameshop.model.Game;
import com.gameshop.util.GenerateUPCUtil;
import com.gameshop.util.HibernateUtil;

public class GameInsert {

	public static void main(String[] args) {
		// Right click THIS file and run it as a java application to insert games into
		// the DB

		boolean cont = false;
		Session session = HibernateUtil.getSessionFactory().openSession();
		session.beginTransaction();
		byte[] gameImage;
		Scanner sc = new Scanner(System.in);
		do {
			try {
				int upc = GenerateUPCUtil.generateUPCID();
				System.out.println("Enter the name of the game: ");
				String name = sc.nextLine();
				System.out.println("Enter the price: ");
				float price = Float.parseFloat(sc.nextLine());
				System.out
						.println("Enter a description for the game. Do not hit enter until your description is done: ");
				String description = sc.nextLine();
				System.out.println("Enter the FULL path to the image. To get this, right click the image > Properties. "
						+ "\nIn General there will be a Location property. Append the full name of the image to the "
						+ "\nlocation and enter it here:");
				String path = sc.nextLine();
				System.out.println("Enter an initial stock for the game (int only): ");
				int stock = Integer.parseInt(sc.nextLine());

				gameImage = Files.readAllBytes(Paths.get(path));
				Game game = new Game(upc, name, price, description, gameImage, stock);
				session.save(game);
				String choice="";
				do {
				System.out.println("Continue? y/n");
				choice = sc.nextLine();
				if(choice.toLowerCase().equals("y"))
					cont = true;
				else if(choice.toLowerCase().equals("n"))
					cont = false;
				else {
					System.out.println("invalid");
					choice = "";
				}
				System.out.println("\n========================\n========================\n========================\n");
				}while(choice.equals(""));

			} catch (IOException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}

		} while (cont);
		session.getTransaction().commit();

	}

}
