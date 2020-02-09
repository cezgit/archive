package com.wds.support.test.matchers;

import static org.hamcrest.core.IsNot.not;

import org.apache.commons.lang3.StringUtils;
import org.hamcrest.Description;
import org.hamcrest.Factory;
import org.hamcrest.Matcher;
import org.hamcrest.TypeSafeMatcher;

public class ContainsStringIgnoringCase extends TypeSafeMatcher<String> {

	private String expected;
	
	public ContainsStringIgnoringCase(String expected) {
		this.expected = expected;
	}
	
	@Override
	public boolean matchesSafely(String actual) {
		
		return StringUtils.containsIgnoreCase(actual, expected);
	}

	public void describeTo(Description description) {
		 description.appendText("text <" + expected + "> ignoring case");
	}
	
	@Factory
	public static Matcher<String> containsStringIgnoringCase(String expected) {
		return new ContainsStringIgnoringCase(expected);
	}

	@Factory
	public static Matcher<String> doesNotContainStringIgnoringCase(String expected) {
		return not(containsStringIgnoringCase(expected));
	}
}
