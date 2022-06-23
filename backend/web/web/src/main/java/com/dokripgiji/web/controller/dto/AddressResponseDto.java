package com.dokripgiji.web.controller.dto;


import com.dokripgiji.web.domain.address.Address;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class AddressResponseDto {
    private Long id;
    private String email;
    private String address;
    private Long addressNumber;

    @Builder
    public AddressResponseDto(Address entity){
        this.id = entity.getId();
        this.email = entity.getEmail();
        this.address = entity.getAddress();
        this.addressNumber = entity.getAddressNumber();
    }

}
