package com.ETE_Backend_wala.End_term_backend.Controller;


import com.ETE_Backend_wala.End_term_backend.model.User;
import com.ETE_Backend_wala.End_term_backend.repo.UserRepository;
import com.ETE_Backend_wala.End_term_backend.repo.Userrepo;
import com.ETE_Backend_wala.End_term_backend.service.UserService;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

@CrossOrigin
@RestController
public class PersonalController {
    String regex = "^[\\w!#$%&'*+/=?`{|}~^-]+(?:\\.[\\w!#$%&'*+/=?`{|}~^-]+)*@(?:[a-zA-Z0-9-]+\\.)+[a-zA-Z]{2,6}";
    Pattern pattern = Pattern.compile(regex);
    @Autowired
    public UserService userService;


    @Autowired
    public Userrepo userRepository;

    @RequestMapping(value = "/add",method =RequestMethod.POST)
    public String adduser(@RequestBody String data) throws JsonProcessingException {
        System.out.println(data);
        User user = new ObjectMapper().readValue(data, User.class);
        System.out.println(user.toString());
        if((user.getEmail()).equals("")||user.getPhone_number()==null||user.getAddress().equals("")||user.getAge()==null||user.getName().equals(""))
        {
            return "false";
        }
        Matcher matcher = pattern.matcher(user.getEmail());
        if(!matcher.matches()||user.getPhone_number()<=999999999)
        {
            return "false";
        }
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

        User user = new ObjectMapper().readValue(data, User.class);

        userService.update(user);
    }
    @RequestMapping( "/search")
    public List<User> search(@RequestBody String name)
    {

        return userRepository.searchByName(name);


    }
}
