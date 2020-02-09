package com.wds.support.test.matchers;

import org.apache.commons.lang3.StringUtils;
import org.hamcrest.Description;
import org.hamcrest.Factory;
import org.hamcrest.Matcher;
import org.hamcrest.TypeSafeMatcher;

public class IsNotNullOrEmptyString extends TypeSafeMatcher<String> {

	
	public IsNotNullOrEmptyString() {
		// nop
	}
	
	@Override
	public void describeTo(Description description) {
		description.appendText("empty String");
	}

	@Override
	public boolean matchesSafely(String actual) {		
		return !StringUtils.isEmpty(actual);
	}
	
	@Factory
	public static Matcher<String> isNotNullOrEmpty() {
		return new IsNotNullOrEmptyString();
	}

}
