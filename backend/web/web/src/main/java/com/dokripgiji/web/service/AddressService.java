package com.dokripgiji.web.service;

import com.dokripgiji.web.domain.address.Address;
import com.dokripgiji.web.domain.address.AddressRepository;
import com.dokripgiji.web.controller.dto.AddressRequestDto;
import com.dokripgiji.web.controller.dto.AddressResponseDto;
import com.dokripgiji.web.domain.user.User;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@RequiredArgsConstructor
@Service
public class AddressService {


    @Autowired
    private final AddressRepository addressRepository;

    public AddressResponseDto buildResponseDto(Address adr){
        return new AddressResponseDto(adr);
    }


    @Transactional
    public AddressResponseDto saveAddress(AddressRequestDto requestDto, User user){

        Double longitude = requestDto.getLongitude();
        Double latitude = requestDto.getLatitude();
        int n = requestDto.getN();


        Address adr = Address.builder()
                .user(user)
                .longitude(longitude)
                .latitude(latitude)
                .n(n)
                .build();

        return buildResponseDto(adr);
    }

}
