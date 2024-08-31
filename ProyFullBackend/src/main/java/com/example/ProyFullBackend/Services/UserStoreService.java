
package com.example.ProyFullBackend.Services;

import com.example.ProyFullBackend.Entities.UserStore;
import com.example.ProyFullBackend.Repository.UserStoreRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserStoreService implements InterUserStoreService{
    
    @Autowired
    private UserStoreRepository repositoryUser;

    @Override
    public List<UserStore> getAllUser() {
        return (List<UserStore>) repositoryUser.findAll();
    }

    @Override
    public UserStore getUserById(Long id) {
        return (UserStore) repositoryUser.findById(id).get();
    }

    @Override
    public void removeUser(Long id) {
        repositoryUser.deleteById(id);
    }

    @Override
    public void saveUser(UserStore userStore) {
        if (repositoryUser.existsByMailUser(userStore.getMailUser())) {
            throw new RuntimeException("User with email already exists");
        }
        repositoryUser.save(userStore);
    }

    @Override
    public UserStore authenticateUser(String mailUser, String passwordUser) {
        UserStore user = repositoryUser.findByMailUserAndPasswordUser(mailUser, passwordUser);
        if (user == null) {
            throw new RuntimeException("Invalid email or password");
        }
        return user;
    }
}