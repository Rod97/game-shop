package com.gameshop.spring.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Data;

@Entity
@Table(name = "order_items")
public @Data class OrderItem {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;

	/*
	 * These worked well for creating association but were awful to work with
	 * Leaving them in case I have time to go back over this
	 * 
	 * @ManyToOne(fetch=FetchType.LAZY)
	 * 
	 * @JoinColumn(name="invoice_number") private Order order;
	 * 
	 * @ManyToOne(fetch=FetchType.LAZY)
	 * 
	 * @JoinColumn(name="upc") private Items item;
	 */

	// Invoice num for order
	@Column(name = "order_number")
	private long order;
	// Upc of item
	@Column(name = "item_upc")
	private long item;
	// Number of item ordered
	@Column(name = "quanity")
	private int quantity;
}
