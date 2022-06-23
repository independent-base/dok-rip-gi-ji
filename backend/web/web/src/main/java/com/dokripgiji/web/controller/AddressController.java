package com.dokripgiji.web.controller;

import com.dokripgiji.web.controller.dto.AddressRequestDto;
import com.dokripgiji.web.controller.dto.AddressResponseDto;
import com.dokripgiji.web.domain.user.User;
import com.dokripgiji.web.service.AddressService;
import com.dokripgiji.web.service.MapboxService;
import lombok.RequiredArgsConstructor;
import org.apache.tomcat.util.net.openssl.ciphers.Authentication;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

@RequiredArgsConstructor
@RestController
@RequestMapping("/adr")
public class AddressController {

    private final AddressService addressService;

    private final MapboxService mapboxService;

    @PostMapping
    public AddressResponseDto update(@RequestBody AddressRequestDto requestDto){

        System.out.println("requestDto = " + requestDto);
        AddressResponseDto responseDto;
        responseDto = addressService.saveAddress(requestDto);
        System.out.println(responseDto.getAddressId());
        return responseDto;

        /*
        Object principal = SecurityContextHolder.getContext().getAuthentication().getPrincipal();

        /*
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

         */
    }


    //위에 코드가 너무 길어서 임의로 분리했는데, 완성되면 리팩토링하는 과정에서 적절한 위치에 넣어주면 될것 같습니다.
    @GetMapping
    public void AddressFilter(@RequestBody AddressRequestDto requestDto){
        mapboxService.MapboxFilter(requestDto);
    }


}


