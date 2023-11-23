package com.example.demodemo.Dao;

import com.example.demodemo.Model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    // additional custom query methods if needed

}