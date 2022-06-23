package com.dokripgiji.web.service;

import com.dokripgiji.web.domain.address.Address;
import com.dokripgiji.web.domain.address.AddressRepository;
import com.dokripgiji.web.domain.positions.PositionsRepository;
import com.dokripgiji.web.controller.dto.AddressRequestDto;
import com.dokripgiji.web.controller.dto.AddressResponseDto;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@RequiredArgsConstructor
@Service
public class AddressService {


    @Autowired
    private final AddressRepository addressRepository;

    public AddressResponseDto buildAddressDto(Address adr){
        return new AddressResponseDto(adr);
    }

    @Transactional
    public AddressResponseDto saveAddress(AddressRequestDto requestDto, String email){
        String address = requestDto.getAddress();
        Long addressNumber = requestDto.getAddressNumber();

        // address 가져옴
        Address adr = Address.builder()
                .address(address)
                .addressNumber(addressNumber)
                .email(email)
                .build();

        Address resAdr = addressRepository.save(adr);

        return buildAddressDto(resAdr);
    }

}
