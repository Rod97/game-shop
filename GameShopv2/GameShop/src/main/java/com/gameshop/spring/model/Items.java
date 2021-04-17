package com.gameshop.spring.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import org.hibernate.annotations.GenericGenerator;

import lombok.Data;

@Entity
@Table(name = "users")
public @Data class Items {
	
	@Id
	//@GenericGenerator(name = "UPCGenerator", ???)
	@GeneratedValue(strategy = GenerationType.AUTO)
	Long upc;
	@Column(name = "item_name")
	String itemName;
	@Column(name = "price")
	float price;
	@Column(name = "description")
	String description;
	@Column(name = "image")
	byte[] image;
	@Column(name = "stock")
	int stock;
	@Column(name = "platform")
	String platform;
}