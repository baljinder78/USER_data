package com.ETE_Backend_wala.End_term_backend.repo;

import com.ETE_Backend_wala.End_term_backend.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface Userrepo extends JpaRepository<User,String> {

}
