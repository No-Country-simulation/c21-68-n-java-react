package com.teleMedicina.teleMedicina.controllers;

import com.teleMedicina.teleMedicina.models.UserModel;
import com.teleMedicina.teleMedicina.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import jakarta.validation.Valid;
import java.util.List;


@RestController
@RequestMapping("/")
public class UserController {

   

    @Autowired
    private UserService userService;
//Login
    @GetMapping("/login")
    public ResponseEntity<String> login() {
        return new ResponseEntity<>("Login page", HttpStatus.OK);
    }

// Todos los usuarios
    @GetMapping
    public ResponseEntity<List<UserModel>> getAllUsers() {
        List<UserModel> users = userService.getAllUsers();
        return new ResponseEntity<>(users, HttpStatus.OK);
    }
//Un usuario
    @GetMapping("/{id}")
    public ResponseEntity<UserModel> getUserById(@PathVariable Integer id) {
        UserModel user = userService.getUserById(id);
        return user != null ? new ResponseEntity<>(user, HttpStatus.OK) : new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }
//Agregar usuario
   @PostMapping
public ResponseEntity<UserModel> createUser(@Valid @RequestBody UserModel user) {
    UserModel savedUser = userService.registerUser(user);
    return new ResponseEntity<>(savedUser, HttpStatus.CREATED);
}
//Editar usuario
    @PutMapping("/{id}")
    public ResponseEntity<UserModel> updateUser(@PathVariable Integer id, @Valid @RequestBody UserModel user) {
        UserModel updatedUser = userService.updateUser(id, user);
        return new ResponseEntity<>(updatedUser, HttpStatus.OK);
    }
//Borrar usuario
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteUser(@PathVariable Integer id) {
        userService.deleteUser(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

   
    
}
