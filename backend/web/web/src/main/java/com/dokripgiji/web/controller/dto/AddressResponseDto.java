package com.dokripgiji.web.controller.dto;


import com.dokripgiji.web.domain.address.Address;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class AddressResponseDto {

    private Long addressId;
    private Long userId;
    private Double longitude;
    private Double latitude;
    private int n;

    @Builder
    public AddressResponseDto(Address entity) {
        this.addressId = entity.getAddressId();
        this.userId = entity.getUserId();
        this.longitude = entity.getLongitude();
        this.latitude = entity.getLatitude();
        this.n = entity.getN();
    }
}
