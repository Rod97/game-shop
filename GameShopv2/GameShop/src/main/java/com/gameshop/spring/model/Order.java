package com.gameshop.spring.model;

import java.util.Date;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.validation.constraints.Future;

import lombok.Data;

@Entity
@Table(name = "gs_orders")
public @Data class Order {

	@Id
	@Column(name = "invoice_number")
	private Long invoiceNumber;
	@Column(name = "email")
	private String email;
	@Column(name = "total")
	private Float total;
	@Column(name = "items")
	@OneToMany(mappedBy = "order")
	private List<OrderItem> items;
	@Column(name = "shipping_adress")
	String shippingAdress;
	@Column(name = "order_date")
	Date orderDate;
	@Future
	@Column(name = "promise_date")
	Date promiseDate;

//Custom constructor for example query
	public Order(String email) {
		this.email = email;
	}
//No args 
	public Order() {
	};
}