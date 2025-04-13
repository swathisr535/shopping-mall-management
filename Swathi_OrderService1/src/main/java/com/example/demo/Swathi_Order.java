package com.example.demo;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

//This annotation will make sure that the order will behave as both class and table.

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Data

public class Swathi_Order {
	
	   //created the Order module fields.
	
	    private int id;
	    private String product;
	    private double total;
	    private int customer_id;
	    
	    
	    //created the default constructor.
	    
		public Swathi_Order() {
			super();
		}
        
		//created the parameterized constructor.
		
		public Swathi_Order(int id, double total, String product, int customer_id) {
			super();
			this.id = id;
			this.total = total;
			this.product = product;
			this.customer_id = customer_id;
		}

		
		//This annotation is used To denote the primary key.
		
		@Id
		
		public int getId() {
			return id;
		}

		public void setId(int id) {
			this.id = id;
		}

		public double getTotal() {
			return total;
		}

		public void setTotal(double total) {
			this.total = total;
		}

		public String getProduct() {
			return product;
		}

		public void setProduct(String product) {
			this.product = product;
		}

		public int getCustomer_id() {
			return customer_id;
		}

		public void setCustomer_id(int customer_id) {
			this.customer_id = customer_id;
		}

		//This annotation is used to provide the string representation of an object.
		@Override
		public String toString() {
			return "Swathi_Order [id=" + id + ", customerName=" + ", total=" + total + ", product="
					+ product + ", customer_id=" + customer_id + ", getId()=" + getId() + ", getcustomerName()="
					 + ", getTotal()=" + getTotal() + ", getProduct()=" + getProduct()
					+ ", getCustomer_id()=" + getCustomer_id() + ", getClass()=" + getClass() + ", hashCode()="
					+ hashCode() + ", toString()=" + super.toString() + "]";
		}

}


