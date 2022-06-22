package com.dokripgiji.web.domain.positions;

import lombok.Builder;
import lombok.Getter;
import org.springframework.boot.autoconfigure.domain.EntityScan;

import javax.persistence.*;
import java.util.List;

@EntityScan
@Entity
@Getter
public class Positions {


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column
    private Long user_id;

    @Column(nullable = false)
    private String address;

    @Column
    private Long longitude;

    @Column
    private Long latitude;

    @Column(columnDefinition = "json")
    private String estimateZone;

    @Column(columnDefinition = "json")
    private String convenientZone;

    @Builder
    public Positions(String address, Long longitude, Long latitude, String estimateZone, String convenientZone) {
        this.address = address;
        this.longitude = longitude;
        this.latitude = latitude;
        this.estimateZone = estimateZone;
        this.convenientZone = convenientZone;
    }
}
