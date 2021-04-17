package com.gameshop.spring.model;

import java.util.ArrayList;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.Future;

import lombok.Data;

@Entity
@Table(name="orders")
public @Data class Order {
	
@Id
@GeneratedValue(strategy = GenerationType.AUTO)
@Column(name = "invoice_number")
Long invoiceNumber;
@Column(name="email")
String email;
@Column(name = "total")
Float total;
@Column(name = "items")
ArrayList<String> items;
@Column(name="shipping_adress")
String shippingAdress;
@Column(name="order_date")
Date orderDate;
@Future
@Column(name="promise_date")
Date promiseDate;

//Custom method, returns passenger to convert to example for query
public static Order from(Long invoiceNumber, String email, Float total, ArrayList<String> items, String shippingAdress, Date orderDate, Date promiseDate) {
	return new Order(invoiceNumber, email, total, items, shippingAdress, orderDate, promiseDate);
}

//Custom constructor
public Order(Long invoiceNumber2, String email2, Float total2, ArrayList<String> items2, String shippingAdress2,
		Date orderDate2, Date promiseDate2) {
	super();
}

//No args
public Order() {};
}