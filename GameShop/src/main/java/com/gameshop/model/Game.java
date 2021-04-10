package com.gameshop.model;

import java.util.Arrays;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
@Entity
@Table(name="items")	
public class Game {
	@Id
	@Column(name="upc")
	private int upc;
	@Column(name="item_name")
	private String name;
	@Column(name="price")
	private float price;
	@Column(name="description")
	private String description;
	@Column(name="images")
	private byte[] image;
	@Column(name="stock")
	private int stock;
	
	public Game(int upc, String name, float price, String description, byte[] image, int stock) {
		super();
		this.upc = upc;
		this.name = name;
		this.price = price;
		this.description = description;
		this.image = image;
		this.stock = stock;
	}

	public int getUpc() {
		return upc;
	}

	public void setUpc(int upc) {
		this.upc = upc;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public float getPrice() {
		return price;
	}

	public void setPrice(float price) {
		this.price = price;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public byte[] getImage() {
		return image;
	}

	public void setImage(byte[] image) {
		this.image = image;
	}

	public int getStock() {
		return stock;
	}

	public void setStock(int stock) {
		this.stock = stock;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((description == null) ? 0 : description.hashCode());
		result = prime * result + Arrays.hashCode(image);
		result = prime * result + ((name == null) ? 0 : name.hashCode());
		result = prime * result + Float.floatToIntBits(price);
		result = prime * result + stock;
		result = prime * result + upc;
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Game other = (Game) obj;
		if (description == null) {
			if (other.description != null)
				return false;
		} else if (!description.equals(other.description))
			return false;
		if (!Arrays.equals(image, other.image))
			return false;
		if (name == null) {
			if (other.name != null)
				return false;
		} else if (!name.equals(other.name))
			return false;
		if (Float.floatToIntBits(price) != Float.floatToIntBits(other.price))
			return false;
		if (stock != other.stock)
			return false;
		if (upc != other.upc)
			return false;
		return true;
	}

	@Override
	public String toString() {
		return "Game [upc=" + upc + ", name=" + name + ", price=" + price + ", description=" + description + ", image="
				+ Arrays.toString(image) + ", stock=" + stock + "]";
	}
}
