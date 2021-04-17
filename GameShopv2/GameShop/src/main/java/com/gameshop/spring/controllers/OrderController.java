package com.gameshop.spring.controllers;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Example;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.gameshop.spring.model.Order;
import com.gameshop.spring.repository.OrderRepository;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("order/")
public class OrderController {
	@Autowired
	private OrderRepository orderRepository;
	
	@PostMapping("/")
	public Order createOrder(@RequestBody Order order) {
		return orderRepository.save(order);
	}
	
	//Going for get by email since that's what db supports currently, could change/add column
	@GetMapping("/{email}")
	public ResponseEntity<List<Order>> getUserOrders(@PathVariable(value = "email") String email){
		Example<Order> example = Example.of(Order.from(null, email, null, null, null, null, null));
		List<Order> orders = orderRepository.findAll(example);
		
		return ResponseEntity.ok().body(orders);
	}
	
}
