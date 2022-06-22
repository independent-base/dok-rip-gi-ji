package com.dokripgiji.web.domain.User;

import com.fasterxml.jackson.databind.ObjectMapper;

import javax.persistence.AttributeConverter;

public class positionConverter implements AttributeConverter<User, String> {

    private final ObjectMapper objectMapper = new ObjectMapper();

    @Override
    public String convertToDatabaseColumn(User attribute) {
        return null;
    }

    @Override
    public User convertToEntityAttribute(String dbData) {
        return null;
    }
}
