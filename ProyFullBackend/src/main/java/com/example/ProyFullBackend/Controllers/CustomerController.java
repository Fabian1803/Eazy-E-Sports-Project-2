package com.example.ProyFullBackend.Controllers;

import com.example.ProyFullBackend.Entities.Customer;
import com.example.ProyFullBackend.Services.InterCustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@RestController
public class CustomerController {

    private final InterCustomerService service;

    @Autowired
    public CustomerController(InterCustomerService service) {
        this.service = service;
    }

    @GetMapping("/api/customers")
    public List<Customer> getAll() {
        return service.getAll();
    }
    
    @GetMapping("/api/customers/{id}")
    public Customer getById(@PathVariable String id) {
        return service.getById(Long.parseLong(id));
    }
    
    @DeleteMapping("/api/customers/{id}")
    public void remove(@PathVariable String id){
        service.remove(Long.parseLong(id));
    }
    
    @PostMapping("/api/customers")
    public void save (@RequestBody Customer customer){
        service.save(customer);
    }
}
