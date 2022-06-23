package com.dokripgiji.web.domain.user;


import lombok.*;
import org.hibernate.annotations.DynamicInsert;
import org.springframework.boot.autoconfigure.domain.EntityScan;

import javax.persistence.*;

@EntityScan
@Entity
@Getter
@Setter
@DynamicInsert
@Table(name = "User")
@NoArgsConstructor(access = AccessLevel.PRIVATE)
public class User {
}
