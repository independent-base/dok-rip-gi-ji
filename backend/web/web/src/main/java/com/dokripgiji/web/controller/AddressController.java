package com.dokripgiji.web.controller;

import com.dokripgiji.web.controller.dto.AddressRequestDto;
import com.dokripgiji.web.domain.user.User;
import com.dokripgiji.web.service.AddressService;
import lombok.RequiredArgsConstructor;
import org.apache.tomcat.util.net.openssl.ciphers.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

@RestController
@RequestMapping("/adr")
public class AddressController {

    private final AddressService addressService;

    HttpServletRequest request;

    @PostMapping
    public String update(@RequestBody AddressRequestDto requestDto){

        System.out.println("requestDto = " + requestDto);

        Object principal = SecurityContextHolder.getContext().getAuthentication().getPrincipal();

        if (principal!="anonymousUser"){
            User user=(User) principal;
            String email = (String) user.getEmail();
            System.out.println("email = " + email);

            addressService.saveAddress(requestDto, user);
            System.out.println("requestDto " + requestDto.getLatitude() + " " + requestDto.getLongitude());
            return "등록 성공";

        } else {
            System.out.println("로그인이 필요합니다.");
        }

        return "등록 실패";
    }


    public AddressController(AddressService addressService, HttpServletRequest request) {
        this.addressService = addressService;
        this.request = request;
    }
}


