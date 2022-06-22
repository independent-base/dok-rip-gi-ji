package com.dokripgiji.web.domain.positions;

import lombok.Builder;
import lombok.Getter;

import javax.persistence.*;
import java.util.List;

@Entity
@Getter
public class Positions {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column
    @ManyToOne
    private Long user_id;

    @Column(nullable = false)
    private String address;

    @Column
    private Long longitude;

    @Column
    private Long latitude;

    @Column(columnDefinition = "json")
    private List<String> estimateZone;

    @Column(columnDefinition = "json")
    private List<String> convenientZone;

    @Builder
    public Positions(String address, Long longitude, Long latitude, List<String> estimateZone, List<String> convenientZone) {
        this.address = address;
        this.longitude = longitude;
        this.latitude = latitude;
        this.estimateZone = estimateZone;
        this.convenientZone = convenientZone;
    }
}
