package com.wds.support.persistence.entity;

import javax.persistence.*;

/**
 * Simple JavaBean domain object with an id property.
 * Used as a base class for objects needing this property.
 */

@MappedSuperclass
public class BaseEntity {

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
		BaseEntity other = (BaseEntity) obj;
		if (id == null) {
			if (other.id != null)
				return false;
		} else if (!id.equals(other.id))
			return false;
		return true;
	}
}
