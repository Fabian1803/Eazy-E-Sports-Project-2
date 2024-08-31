package com.example.ProyFullBackend.Services;

import com.example.ProyFullBackend.Entities.Customer;
import com.example.ProyFullBackend.Repository.CustomerRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CustomerService implements InterCustomerService {

    @Autowired
    private CustomerRepository repsitorio;

    @Override
    public List<Customer> getAll() {
        return (List<Customer>) repsitorio.findAll();
    }

    @Override
    public Customer getById(Long id) {
        return (Customer) repsitorio.findById(id).get();
    }
    
    @Override
    public void remove(Long id){
        repsitorio.deleteById(id);
    }
    
    @Override
    public void save (Customer customer){
        repsitorio.save(customer);
    }
}
