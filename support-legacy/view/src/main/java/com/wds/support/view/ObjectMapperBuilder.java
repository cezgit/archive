package com.wds.support.view;

import org.codehaus.jackson.Version;
import org.codehaus.jackson.map.ObjectMapper;
import org.codehaus.jackson.map.annotate.JsonSerialize;
import org.codehaus.jackson.map.module.SimpleModule;

import java.text.SimpleDateFormat;

import static org.codehaus.jackson.map.DeserializationConfig.Feature.ACCEPT_SINGLE_VALUE_AS_ARRAY;
import static org.codehaus.jackson.map.DeserializationConfig.Feature.FAIL_ON_UNKNOWN_PROPERTIES;
import static org.codehaus.jackson.map.SerializationConfig.Feature.WRITE_DATES_AS_TIMESTAMPS;
import static org.codehaus.jackson.map.SerializationConfig.Feature.WRITE_ENUMS_USING_TO_STRING;

public class ObjectMapperBuilder {

    private ObjectMapper mapper;
    private SimpleModule module;

    public ObjectMapperBuilder() {
        mapper = new ObjectMapper();
    }

    public ObjectMapperBuilder serializeDates() {
        mapper.getSerializationConfig().set(WRITE_DATES_AS_TIMESTAMPS, false);
        mapper.setDateFormat(new SimpleDateFormat("MM/dd/yyyy h:mm a"));
        return this;
    }

    public ObjectMapperBuilder serializeNonNullsOnly() {
        mapper.getSerializationConfig().setSerializationInclusion(JsonSerialize.Inclusion.NON_NULL);
        return this;
    }

    public ObjectMapperBuilder serializeWriteEnumsUsingToString() {
        mapper.getSerializationConfig().set(WRITE_ENUMS_USING_TO_STRING, true);
        return this;
    }

    public ObjectMapperBuilder deserializeAllowUnknownProperties() {
        mapper.getDeserializationConfig().set(FAIL_ON_UNKNOWN_PROPERTIES, false);
        return this;
    }

    public ObjectMapperBuilder deserializeAcceptSingleValueAsArray() {
        mapper.getDeserializationConfig().set(ACCEPT_SINGLE_VALUE_AS_ARRAY, true);
        return this;
    }

    public <T> ObjectMapperBuilder withSubtypeMapping(Class<T> superClass, Class<? extends T> subClass) {
        if (module == null) {
            module = new SimpleModule("CustomSimpleModule", new Version(1, 0, 0, "SNAPSHOT"));
        }
        module.addAbstractTypeMapping(superClass, subClass);
        return this;
    }

    public ObjectMapper build() {
        if (module != null) {
            mapper.registerModule(module);
        }
        return mapper;
    }
}
