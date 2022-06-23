package com.dokripgiji.web.controller;

import com.dokripgiji.web.controller.dto.AddressRequestDto;
import com.dokripgiji.web.service.AddressService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;

@RestController
@RequestMapping("/adr")
public class AddressController {

    private final AddressService addressService;

    HttpServletRequest request;

    @PostMapping
    public String update(@RequestBody AddressRequestDto requestDto){
        System.out.println("requestDto = " + requestDto);
        String email = "choneybee@daum.net";
        addressService.saveAddress(requestDto, email);
        return "OK";
    }


    public AddressController(AddressService addressService, HttpServletRequest request) {
        this.addressService = addressService;
        this.request = request;
    }
}


