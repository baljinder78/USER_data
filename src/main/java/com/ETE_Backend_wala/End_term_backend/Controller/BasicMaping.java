package com.ETE_Backend_wala.End_term_backend.Controller;


import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class BasicMaping {
    
    @RequestMapping("/")
    public String maino()
    {
        return "index";
    }
}
