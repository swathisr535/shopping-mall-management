package com.example.demo;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

//This annotation is used to create controller for Rest APIs that return JSON responses.

@RestController
@CrossOrigin("http://localhost:3000")

@RequestMapping("/shoporders")

public class Swathi_OrderController {
    
	//This annotation is used for automatic dependency injection.
	
	@Autowired
	
	//The service reference is created to link controller class to service class.
	
	private Swathi_OrderService orderService;
	
	//Retrieval CRUD operation.
	
	//This annotation is used to map HTTP GET requests.
	
	@GetMapping
	
	public List<Swathi_Order> list(){
		return orderService.listAll();
	}
	
	//Retrieve By Id.
	
	//This annotation is used to map HTTP GET requests by using id.
	
	@GetMapping("/{id}")
	
	//ResponseEntity is a class and gives object type of output.
	
	public ResponseEntity<Swathi_Order> get(@PathVariable int id){
		try {
			Swathi_Order order = orderService.get(id);
			return new ResponseEntity<Swathi_Order>(order,HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<Swathi_Order>(HttpStatus.NOT_FOUND);
		}
	}
	
	//Create CRUD operation.
	
	//This annotation is used to map HTTP POST requests.
	
	@PostMapping
	
	//RequestBody annotation is used to bind the HTTP request body to a method parameter in a controller.
	
	public void add (@RequestBody Swathi_Order order) {
		orderService.save(order);
	}
	
	//Update CRUD operation.
	
	//This annotation is used to perform update operation.
	
	@PutMapping("/{id}")
	
	//PathVariable annotation is used to extract values from the URI path and bind them to method parameter in a controller.
	
	public ResponseEntity<?>update(@RequestBody Swathi_Order order,@PathVariable int id){
		try {
			Swathi_Order existOrder = orderService.get(id);
			orderService.save(order);
			return new ResponseEntity<>(HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}
	
	//Delete CRUD operation.
	
	//This annotation is used to perform update operation.
	
	@DeleteMapping("/{id}")
	
	public void delete(@PathVariable int id) {
		orderService.delete(id);
	}
	
}
