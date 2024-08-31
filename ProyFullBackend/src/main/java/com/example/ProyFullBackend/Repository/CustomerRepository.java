
package com.example.ProyFullBackend.Repository;

import com.example.ProyFullBackend.Entities.Customer;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CustomerRepository extends CrudRepository<Customer, Long>{
}
