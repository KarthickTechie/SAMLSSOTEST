package com.ulisesbocchio.security.saml.spring.mvc;

/**
 * @author Ulises Bocchio
 */

import com.ulisesbocchio.security.saml.spring.security.SAMLUserDetails;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletResponse;
import java.net.URI;
import java.util.Map;

@Controller
public class HomeController {

//    @RequestMapping("/home")
//    public ModelAndView home(HttpServletResponse response) {
//        System.out.println("SAMLUserDetails user ==> "+response.getHeaderNames());
//        ModelAndView homeView = new ModelAndView("home");
//       // homeView.addObject("userId", user.getUsername());
//       // homeView.addObject("samlAttributes", user.getAttributes());
//        return homeView;
//    }

    @RequestMapping("/home")
    public ResponseEntity<Void> redirect(@RequestParam Map<String,String> input){
        System.out.println("request param ...."+input);
        return ResponseEntity.status(HttpStatus.FOUND).location(URI.create("http://localhost:4200/home")).build();
    }


}
