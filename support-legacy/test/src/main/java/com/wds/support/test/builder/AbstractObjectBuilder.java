package com.wds.support.test.builder;


public abstract class AbstractObjectBuilder<T> implements ObjectBuilder<T> {
	
	public AbstractObjectBuilder(){
		createMinimalObject();
	}

	public abstract ObjectBuilder<T> createMinimalObject();
}
