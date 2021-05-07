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

    @RequestMapping("/userinfo")
    public String userinfo()
    {
        return "redirect:https://docs.google.com/forms/d/e/1FAIpQLSecNtx2pLUkioKAngIcD0rFKWqmJ3brCKkhainSkdgSdUqfag/viewform?pli=1";
    }
}
