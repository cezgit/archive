package com.wds.support.test.matchers;

import org.hamcrest.Description;
import org.hamcrest.Factory;
import org.hamcrest.Matcher;
import org.hamcrest.TypeSafeMatcher;
import org.springframework.beans.ConfigurablePropertyAccessor;
import org.springframework.beans.PropertyAccessorFactory;

public class InstanceHasProperty <T> extends TypeSafeMatcher<T>{
    private final String propertyName;
    private final Matcher<?> propertyValueMatcher;

    public InstanceHasProperty(String propertyName, Matcher<?> propertyValueMatcher) {
        this.propertyName = propertyName;
        this.propertyValueMatcher = propertyValueMatcher;
    }
    
    @Override
    public boolean matchesSafely(T rhs) {
        ConfigurablePropertyAccessor pa = PropertyAccessorFactory.forDirectFieldAccess(rhs);
        Object propertyValue = pa.getPropertyValue(propertyName);
        return propertyValueMatcher.matches(propertyValue);
    }

    public void describeTo(Description description) {
        description.appendText("instanceHasProperty (")
        .appendValue(propertyName)
        .appendText(", ");
        description.appendDescriptionOf(propertyValueMatcher);
        description.appendText(")");
    }
    
    @Factory
    public static <T> Matcher<T> instanceHasProperty(String propertyName, Matcher<?> propertyValueMatcher) {
        return new InstanceHasProperty<T>(propertyName, propertyValueMatcher);
    }
    
    /**
     * {@link Factory} method for type inference when used in Jmock for instance.
     */
    @Factory
    public static <T> Matcher<T> instanceHasProperty(Class<T> type, String propertyName, Matcher<?> propertyValueMatcher) {
        return instanceHasProperty(propertyName, propertyValueMatcher);
    }
}
