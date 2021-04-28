package com.ETE_Backend_wala.End_term_backend.service;

import com.ETE_Backend_wala.End_term_backend.model.User;
import com.ETE_Backend_wala.End_term_backend.repo.Userrepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserService  {


    @Autowired
    public Userrepo userrepo;

    public boolean adduser(User user)
    {

        if(this.userrepo.existsById(user.getEmail())){
            return false;
        }
        else{
            try {
                this.userrepo.save(user);
            }
            catch (Exception e)
            {
                return false;
            }
            return true;
        }

    }
    public List<User> getallusers()
    {
//        List<User> userlist=userrepo.findAll();
//
        return (List<User>) this.userrepo.findAll();
    }

    public void deleteuser(String email)
    {
         this.userrepo.deleteById(email);
    }

    public void update(User user)
    {
            this.userrepo.save(user);


    }
}

