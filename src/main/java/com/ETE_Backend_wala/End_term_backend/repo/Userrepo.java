package com.ETE_Backend_wala.End_term_backend.repo;

import com.ETE_Backend_wala.End_term_backend.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;


public interface Userrepo extends JpaRepository<User,String> {

    @Query("select u from User u where u.Name like %:keyword%")
    public List<User> searchByName(String keyword);

    @Query("select u.Name from User u where u.Name like %:keyword%")
    public List<String> searchallName(String keyword);
}
