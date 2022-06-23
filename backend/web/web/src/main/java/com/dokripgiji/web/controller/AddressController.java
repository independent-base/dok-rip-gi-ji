package com.dokripgiji.web.controller;

import com.dokripgiji.web.controller.dto.AddressRequestDto;
import com.dokripgiji.web.service.AddressService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

@RequiredArgsConstructor
@RestController
public class AddressController {

    private final AddressService addressService;

    HttpServletRequest request;

    @RequestMapping(value = "/adr", method = RequestMethod.POST)
    public String update(@RequestBody AddressRequestDto requestDto){
        String email = "choneybee@daum.net";
        addressService.saveAddress(requestDto, email);
        return "ok";
    }

}


