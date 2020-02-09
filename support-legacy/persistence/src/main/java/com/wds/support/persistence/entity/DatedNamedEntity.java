package com.wds.support.persistence.entity;

import org.hibernate.validator.constraints.NotEmpty;

import javax.persistence.Column;
import javax.persistence.MappedSuperclass;
import java.time.Instant;
import java.util.Date;

/**
 * Simple JavaBean domain object adds a name property to <code>BaseEntity</code>.
 * Used as a base class for objects needing these properties.
 */
@MappedSuperclass
public class DatedNamedEntity extends DatedBaseEntity {

	@Column(name="name")
	@NotEmpty
	private String name;

	public void setName(String name) {
		this.name = name;
	}

	public String getName() {
		return this.name;
	}

	public String toString() {
		return this.getName();
	}

    public void setNew(){
		Date now = Date.from(Instant.now());
        setDateCreated(now);
        setDateUpdated(now);
    }
}
