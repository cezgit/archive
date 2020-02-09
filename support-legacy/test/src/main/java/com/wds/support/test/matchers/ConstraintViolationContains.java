package com.wds.support.test.matchers;

import javax.validation.ConstraintViolation;
import javax.validation.ConstraintViolationException;

import org.hamcrest.Description;
import org.hamcrest.Factory;
import org.hamcrest.Matcher;
import org.hamcrest.TypeSafeMatcher;

public class ConstraintViolationContains extends TypeSafeMatcher<ConstraintViolationException>{
	private final String expectedErrorMessage;
	
	public ConstraintViolationContains(String expectedErrorMessage) {
		this.expectedErrorMessage = expectedErrorMessage;
	}
	
	@Override
	public boolean matchesSafely(ConstraintViolationException cve) {
		for ( ConstraintViolation<?> violation : cve.getConstraintViolations() ) {
			if ( violation.getMessage().equals(expectedErrorMessage) ) {
				return true;
			}
		}
		return false;
	}

	@Override
	public void describeTo(Description description) {
		description.appendText("ConstraintViolationException contains <" + this.expectedErrorMessage + ">");
	}
	
	@Factory
	public static Matcher<ConstraintViolationException> containsConstraintViolationWithMessage(String expectedErrorMessage) {
		return new ConstraintViolationContains(expectedErrorMessage);
	}
}
