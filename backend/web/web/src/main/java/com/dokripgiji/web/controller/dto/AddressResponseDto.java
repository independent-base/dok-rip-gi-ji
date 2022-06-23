package com.dokripgiji.web.controller.dto;


import com.dokripgiji.web.domain.address.Address;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class AddressResponseDto {

    private Long id;
    private Long userId;
    private Double longitude;
    private Double latitude;
    private int n;

    @Builder
    public AddressResponseDto(Address entity) {
        this.id = id;
        this.userId = userId;
        this.longitude = longitude;
        this.latitude = latitude;
        this.n = n;
    }
}
