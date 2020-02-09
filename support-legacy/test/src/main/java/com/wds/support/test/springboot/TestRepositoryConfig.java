package com.wds.support.test.springboot;

import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;
import org.springframework.boot.autoconfigure.jdbc.JdbcTemplateAutoConfiguration;
import org.springframework.boot.autoconfigure.orm.jpa.HibernateJpaAutoConfiguration;
import org.springframework.context.annotation.Import;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

//@Configuration

// By default, @EnableAutoConfiguration enables entity scanning in the package where it's placed (if it's not a default package).
//@EnableAutoConfiguration

// Annotation to enable JPA repositories. Will scan the package of the annotated configuration class for Spring Data repositories by default.
@EnableJpaRepositories(basePackages = "com.wds")

// Identifies which classes should be used by a specific persistence context.
// Since Spring boot 1.4 that includes JPA, MongoDB, neo4j, Casscandra and CouchBase
@EntityScan(basePackages = "com.wds")

@Import({ DataSourceAutoConfiguration.class, HibernateJpaAutoConfiguration.class, JdbcTemplateAutoConfiguration.class })
public class TestRepositoryConfig {
}
