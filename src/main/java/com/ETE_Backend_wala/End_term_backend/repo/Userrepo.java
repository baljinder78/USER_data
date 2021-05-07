package com.ETE_Backend_wala.End_term_backend.repo;

import com.ETE_Backend_wala.End_term_backend.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface Userrepo extends JpaRepository<User,String> {

    @Query("select n from User n where n.Name='%keyword%'")
    public List<User> searchbyname(String keyword);

}
