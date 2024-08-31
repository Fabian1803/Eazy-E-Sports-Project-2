package com.example.ProyFullBackend.Repository;

import com.example.ProyFullBackend.Entities.UserStore;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserStoreRepository extends CrudRepository<UserStore, Long>{
    boolean existsByMailUser(String mailUser);
    UserStore findByMailUserAndPasswordUser(String mailUser, String passwordUser);
}