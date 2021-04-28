package com.ETE_Backend_wala.End_term_backend.Controller;


import com.ETE_Backend_wala.End_term_backend.model.User;
import com.ETE_Backend_wala.End_term_backend.service.UserService;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

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
    
}
