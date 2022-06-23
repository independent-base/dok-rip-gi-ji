package com.dokripgiji.web.controller.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class AddressRequestDto {

    private Double longitude;
    private Double latitude;
    private int n;

    @Builder
    public AddressRequestDto(Double longitude, Double latitude, int n) {
        this.longitude = longitude;
        this.latitude = latitude;
        this.n = n;
    }
}
