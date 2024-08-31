package com.example.ProyFullBackend.Services;

import com.example.ProyFullBackend.Entities.UserStore;
import java.util.List;

public interface InterUserStoreService {
    List<UserStore> getAllUser ();
    UserStore getUserById (Long id);
    void removeUser (Long id);
    void saveUser (UserStore userStore);
    UserStore authenticateUser (String mailUser, String passwordUser);
}