package com.ETE_Backend_wala.End_term_backend.repo;

import com.ETE_Backend_wala.End_term_backend.model.User;
import org.springframework.stereotype.Repository;

import java.util.List;
@Repository
public abstract class UserRepository implements Userrepo{


    public List<User> searchByName(String keyword) {
        return searchByName(keyword);
    }

    public List<String> searchallName(String keyword){
         return searchallName(keyword);


    }
}
