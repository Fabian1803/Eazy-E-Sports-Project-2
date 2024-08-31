package com.example.ProyFullBackend.Entities;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import java.time.LocalDateTime;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name = "user_store")
@Getter @Setter
@ToString
@EqualsAndHashCode
public class UserStore {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long idUser;
    
    private String nameUser;
    private String lastNameUser;
    private String mailUser;
    private String passwordUser;
    private String addressUser;
    private String phoneNumberUser;
    private LocalDateTime createdAtUser;
    private LocalDateTime updateAtUser;
}