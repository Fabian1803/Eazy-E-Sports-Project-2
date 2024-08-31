
package com.example.ProyFullBackend.Services;

import com.example.ProyFullBackend.Entities.Customer;
import java.util.List;

public interface InterCustomerService {
    List<Customer> getAll ();
    Customer getById(Long id);
    void remove(Long id);
    void save (Customer customer);
}
