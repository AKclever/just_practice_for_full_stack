package com.example.demodemo.Dao;

import com.example.demodemo.Model.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProductRepository extends JpaRepository<Product, Long> {
    // additional custom query methods if needed
}