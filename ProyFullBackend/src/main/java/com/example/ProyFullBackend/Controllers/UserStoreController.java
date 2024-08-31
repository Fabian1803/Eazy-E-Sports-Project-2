package com.example.ProyFullBackend.Controllers;

import com.example.ProyFullBackend.Entities.UserStore;
import com.example.ProyFullBackend.Services.UserStoreService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

@RestController
public class UserStoreController {

    private final UserStoreService serviceUser;

    @Autowired
    public UserStoreController(UserStoreService serviceUser) {
        this.serviceUser = serviceUser;
    }

    @GetMapping("/api/UserStore")
    public List<UserStore> getAllUser() {
        return serviceUser.getAllUser();
    }

    @GetMapping("/api/UserStore/{id}")
    public UserStore getUserById(@PathVariable String id) {
        return serviceUser.getUserById(Long.parseLong(id));
    }

    @DeleteMapping("/api/UserStore/{id}")
    public void removeUser(@PathVariable String id) {
        serviceUser.removeUser(Long.parseLong(id));
    }

    @PostMapping("/api/UserStore")
    public void saveUser(@RequestBody UserStore userStore) {
        serviceUser.saveUser(userStore);
    }

    @PostMapping("/api/authenticate")
    @ResponseBody
    public UserStore authenticateUser(@RequestParam String mailUser, @RequestParam String passwordUser) {
        return serviceUser.authenticateUser(mailUser, passwordUser);
    }

}
