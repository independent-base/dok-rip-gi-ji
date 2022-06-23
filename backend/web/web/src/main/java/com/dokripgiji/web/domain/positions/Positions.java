package com.dokripgiji.web.domain.positions;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.springframework.boot.autoconfigure.domain.EntityScan;

import javax.persistence.*;
import java.util.List;

@EntityScan
@Entity
@Getter
@NoArgsConstructor
public class Positions {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column()
    private Long addressId;

    @Column
    private Long longitude;

    @Column
    private Long latitude;

    @Builder
    public Positions(Long addressId, Long longitude, Long latitude) {
        this.addressId = addressId;
        this.longitude = longitude;
        this.latitude = latitude;
    }
}
