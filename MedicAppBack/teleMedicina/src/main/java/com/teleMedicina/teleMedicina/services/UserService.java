package com.teleMedicina.teleMedicina.services;

import com.teleMedicina.teleMedicina.models.UserModel;
import com.teleMedicina.teleMedicina.repositories.IUserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {

    @Autowired
    private final IUserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    public UserService(IUserRepository userRepository, PasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
    }

    public UserModel registerUser(UserModel user) {
        user.setContraseña(passwordEncoder.encode(user.getContraseña()));
        return userRepository.save(user);
    }



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
        // Codifica la contraseña antes de guardarla
        user.setContraseña(passwordEncoder.encode(user.getContraseña()));
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
