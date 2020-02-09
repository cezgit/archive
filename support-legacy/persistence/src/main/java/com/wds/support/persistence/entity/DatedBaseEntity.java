package com.wds.support.persistence.entity;

import javax.persistence.*;
import java.util.Date;

/**
 * Simple JavaBean domain object with an id property.
 * Used as a base class for objects needing this property.
 */

@MappedSuperclass
public class DatedBaseEntity {

	@Id
	@Column(name="id")
	@GeneratedValue
	private Integer id;

	public void setId(Integer id) {
		this.id = id;
	}

	public Integer getId() {
		return id;
	}

    @Column(name="date_created")
    private Date dateCreated;

    @Column(name="date_updated")
    private Date dateUpdated;

    public Date getDateCreated() {
        return dateCreated;
    }

    public void setDateCreated(Date dateCreated) {
        this.dateCreated = dateCreated;
    }

    public Date getDateUpdated() {
        return dateUpdated;
    }

    public void setDateUpdated(Date dateUpdated) {
        this.dateUpdated = dateUpdated;
    }

	@Transient
	public boolean isNew() {
		return (this.id == null);
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((id == null) ? 0 : id.hashCode());
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		DatedBaseEntity other = (DatedBaseEntity) obj;
		if (id == null) {
			if (other.id != null)
				return false;
		} else if (!id.equals(other.id))
			return false;
		return true;
	}
}
