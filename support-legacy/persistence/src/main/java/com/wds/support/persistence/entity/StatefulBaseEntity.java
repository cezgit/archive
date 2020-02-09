package com.wds.support.persistence.entity;


import org.apache.commons.lang3.StringUtils;

import javax.persistence.Column;
import javax.persistence.MappedSuperclass;

@MappedSuperclass
public class StatefulBaseEntity extends BaseEntity {

	public static final String STATUS_ACTIVE = Constants.ACTIVE;
	public static final String STATUS_DISABLED = Constants.DISABLED;
	public static final String STATUS_PENDING = Constants.PENDING;
	
	@Column(name="status")
	private String status;

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}
	
	public boolean isActive(){
		return status != null && status.equals(STATUS_ACTIVE);
	}
	
	public boolean isDisabled(){
		return status != null && status.equals(STATUS_DISABLED);
	}
	
	public boolean isPending(){
		return status != null && status.equals(STATUS_PENDING);
	}
	
	public void disable() {
		this.status = STATUS_DISABLED;
	}
	
	public void activate() {
		this.status = STATUS_ACTIVE;
	}
	
	public String flipStatusBetweenActiveAndDisabled() {
		if(isActive())
			disable();
		else
			activate();
		return status;
	}
	
	public void setNew(){
		if(StringUtils.isBlank(getStatus()))
			setStatus(Constants.PENDING);		
	}
}
