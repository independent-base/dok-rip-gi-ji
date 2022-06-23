package com.dokripgiji.web.domain.address;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.springframework.boot.autoconfigure.domain.EntityScan;

import javax.persistence.*;

@EntityScan
@Getter
@Entity
@NoArgsConstructor
public class Address {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String email;

    @Column(nullable = false)
    private String address;

    @Column(nullable = false)
    private Long addressNumber;

    @Builder
    public Address(Long id, String email, String address, Long addressNumber) {
        this.id = id;
        this.email = email;
        this.address = address;
        this.addressNumber = addressNumber;
    }
}
