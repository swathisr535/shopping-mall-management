package com.example.demo;

import static org.mockito.Mockito.*;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

import java.util.Arrays;
import java.util.List;
import java.util.Optional;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import static org.hamcrest.Matchers.hasSize;

public class SwathiOrderService1ApplicationTests {

    private MockMvc mockMvc;

    @Mock
    private Swathi_OrderService orderservice;

    @InjectMocks
    private Swathi_OrderController ordercontroller;

    @BeforeEach
    public void setUp() {
        MockitoAnnotations.openMocks(this);
        mockMvc = MockMvcBuilders.standaloneSetup(ordercontroller).build();
    }

    @Test
    public void testList() throws Exception {
        // Arrange
        List<Swathi_Order> shoporders = Arrays.asList(new Swathi_Order(), new Swathi_Order());
        when(orderservice.listAll()).thenReturn(shoporders);

        // Act & Assert
        mockMvc.perform(get("/shoporders"))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON))
            .andExpect(jsonPath("$", hasSize(2)));
    }

    @Test
    public void testGetOrderFound() throws Exception {
        // Arrange
        Swathi_Order shoporders = new Swathi_Order();
        when(orderservice.get(1)).thenReturn(shoporders);

        // Act & Assert
        mockMvc.perform(get("/shoporders/1"))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON));
    }

    @Test
    public void testGetOrderNotFound() throws Exception {
        // Arrange
        when(orderservice.get(1)).thenThrow(new RuntimeException("Not found"));

        // Act & Assert
        mockMvc.perform(get("/shoporders/1"))
            .andExpect(status().isNotFound());
    }

    @Test
    public void testAddOrder() throws Exception {
        // Arrange
        Swathi_Order shoporder = new Swathi_Order();
        String json = "{\"id\":1, \"name\":\"Sample ShopOrder\"}"; // Adjust fields as necessary

        // Act & Assert
        mockMvc.perform(post("/shoporders")
            .contentType(MediaType.APPLICATION_JSON)
            .content(json))
            .andExpect(status().isOk());

        verify(orderservice).save(any(Swathi_Order.class));
    }

    @Test
    public void testUpdateOrderFound() throws Exception {
        // Arrange
    	Swathi_Order shoporders = new Swathi_Order();
        String json = "{\"id\":1, \"name\":abc\"Updated Cart\"}"; // Adjust fields as necessary
        when(orderservice.get(1)).thenReturn(shoporders);

        // Act & Assert
        mockMvc.perform(put("/shoporders/1")
            .contentType(MediaType.APPLICATION_JSON)
            .content(json))
            .andExpect(status().isOk());

        verify(orderservice).save(any(Swathi_Order.class));
    }

    @Test
    public void testUpdateOrderNotFound() throws Exception {
        // Arrange
        String json = "{\"id\":1, \"name\":\"Updated Order\"}"; // Adjust fields as necessary
        when(orderservice.get(1)).thenThrow(new RuntimeException("Not found"));

        // Act & Assert
        mockMvc.perform(put("/shoporders/1")
            .contentType(MediaType.APPLICATION_JSON)
            .content(json))
            .andExpect(status().isNotFound());
    }

    @Test
    public void testDeleteOrder() throws Exception {
        // Act & Assert
        mockMvc.perform(delete("/shoporders/1"))
            .andExpect(status().isOk());

        verify(orderservice).delete(1);
    }
}