package com.ETE_Backend_wala.End_term_backend.Controller;


import com.ETE_Backend_wala.End_term_backend.model.User;
import com.ETE_Backend_wala.End_term_backend.service.UserService;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
public class PersonalController {

    @Autowired
    public UserService userService;

    @RequestMapping(value = "/add",method =RequestMethod.POST)
    public String adduser(@RequestBody String data) throws JsonProcessingException {
        System.out.println(data);
        User user = new ObjectMapper().readValue(data, User.class);
        System.out.println(user.toString());
        if(userService.adduser(user))
        {
            System.out.println("yes");
            return "true";
        }
        System.out.println("no");
        return "false";
    }

    @RequestMapping("/getallusers")
    public List<User> getusers()  {
        List<User> userList=userService.getallusers();
        System.out.println(userList);
        return userList;
    }

    @RequestMapping(value = "/deleteuser",method = RequestMethod.DELETE)
    public void deleteuser(@RequestBody String email)
    {
        System.out.println(email);
        userService.deleteuser(email);
    }

    @RequestMapping(value = "/update",method = RequestMethod.PUT)
    public void update(@RequestBody String data) throws JsonProcessingException {
        System.out.println(data);
        User user = new ObjectMapper().readValue(data, User.class);
        System.out.println(user.toString());
        userService.adduser(user);





    }
}
