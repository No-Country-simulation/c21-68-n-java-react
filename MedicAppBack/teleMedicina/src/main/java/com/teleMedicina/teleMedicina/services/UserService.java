package com.teleMedicina.teleMedicina.services;

// import com.teleMedicina.teleMedicina.models.UserModel;
import com.teleMedicina.teleMedicina.models.usuarios.Usuario;
import com.teleMedicina.teleMedicina.models.usuarios.UsuarioRepository;
// import com.teleMedicina.teleMedicina.repositories.IUserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {

    @Autowired
    // private final IUserRepository userRepository;
    private final UsuarioRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    public UserService(UsuarioRepository userRepository, PasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
    }

    public Usuario registerUser(Usuario user) {
        user.setClave(passwordEncoder.encode(user.getClave()));
        return userRepository.save(user);
    }



    // todos los usuarios
    public List<Usuario> getAllUsers() {
        return userRepository.findAll();
    }

    // traer un usuario especifico
    public Usuario getUserById(Long id) {
        return userRepository.findById(id).orElse(null);
    }

    // traer un usuario especifico
    public Usuario getUserByEmail(String  email) {
        return (Usuario) userRepository.findByEmail(email);
    }

    // guardar usuario
    public Usuario saveUser(Usuario user) {
        // Codifica la contraseña antes de guardarla
        user.setClave(passwordEncoder.encode(user.getClave()));
        return userRepository.save(user);
    }

    // actualizar usuario
    public Usuario updateUser(Integer id, Usuario user) {
        user.setIdUsuario(id);
        // user.setClave(passwordEncoder.encode(user.getClave()));
        return userRepository.save(user);
    }

    // Borrar usuario
    public void deleteUser(Long id) {
        userRepository.deleteById(id);
    }
}
