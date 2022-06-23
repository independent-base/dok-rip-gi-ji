package com.dokripgiji.web.controller.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class AddressRequestDto {
    private Long id;
    private String email;
    private String address;
    private Long addressNumber;

    @Builder
    public AddressRequestDto(String address, Long addressNumber){
        this.address = address;
        this.addressNumber = addressNumber;
    }

}
