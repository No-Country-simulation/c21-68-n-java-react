package com.teleMedicina.teleMedicina.services;

import com.teleMedicina.teleMedicina.models.UserModel;
import com.teleMedicina.teleMedicina.repositories.IUserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {

    @Autowired
    private IUserRepository userRepository;

    // todos los usuarios
    public List<UserModel> getAllUsers() {
        return userRepository.findAll();
    }

    // traer un usuario especifico
    public UserModel getUserById(Integer id) {
        return userRepository.findById(id).orElse(null);
    }

    // guardar usuario
    public UserModel saveUser(UserModel user) {
        return userRepository.save(user);
    }

    // actualizar usuario
    public UserModel updateUser(Integer id, UserModel user) {
        user.setIdUsuario(id);
        return userRepository.save(user);
    }

    // Borrar usuario
    public void deleteUser(Integer id) {
        userRepository.deleteById(id);
    }
}
