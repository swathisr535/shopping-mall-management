package com.example.demo;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

//This annotation is used to mark a class as a service component.

@Service

//This annotation is used to manage transaction in spring,specifically around database operations.

@Transactional

public class Swathi_OrderService {
    
	//This annotation is used for automatic dependency injection.
	
	@Autowired
	
	private Swathi_OrderRepository orderRepository;
	
	//Created the listAll method to list all the orders.
	
	public List<Swathi_Order>listAll(){
		return orderRepository.findAll();
	}
	
	//Created get method to get all the orders.
	
	public Swathi_Order get(int id) {
		return orderRepository.findById(id).get();
	}
	
	//Created the save method to save the created order.
	
	public void save(Swathi_Order order) {
		orderRepository.save(order);
	}
    
	//Created the delete method to delete the placed order.
	
	public void delete(int id) {
		orderRepository.deleteById(id);
	}
}
