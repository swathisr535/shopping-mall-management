package com.example.demo;

import org.springframework.data.jpa.repository.JpaRepository;

//This interface is used for performing database operations(CRUD Operations) on the Swathi_Order entity.

public interface Swathi_OrderRepository extends JpaRepository<Swathi_Order,Integer>  {

}
