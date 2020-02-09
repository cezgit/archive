package com.wds.support.test.matchers;

import java.util.Map;
import java.util.Map.Entry;

import org.hamcrest.Description;
import org.hamcrest.Factory;
import org.hamcrest.Matcher;
import org.hamcrest.TypeSafeMatcher;
import org.hamcrest.core.IsAnything;
import org.hamcrest.core.IsEqual;
import org.hamcrest.core.IsNull;

/**
 * Matches (singleton) maps containing unique entry, key and/or value.
 */
public class IsMapContainingSingleton extends TypeSafeMatcher<Map<?, ?>>{
    private final Matcher<?> keyMatcher;
    private final Matcher<?> valueMatcher;
    
    public IsMapContainingSingleton(Matcher<?> keyMatcher, Matcher<?> valueMatcher) {
        this.keyMatcher = keyMatcher;
        this.valueMatcher = valueMatcher;
    }
    
    @Override
    public boolean matchesSafely(Map<?, ?> map) {
        if(map != null && map.size() == 1){
            Entry<?, ?> singleEntry = map.entrySet().iterator().next();
            return  keyMatcher.matches(singleEntry.getKey()) && 
                    valueMatcher.matches(singleEntry.getValue());
        }
        return false;
    }

    @Override
    public void describeTo(Description description) {
        description.appendText("map containing unique entry [");
        keyMatcher.describeTo(description);
        description.appendText("->");
        valueMatcher.describeTo(description);
        description.appendText("]");
    }
    
    @Factory
    public static  Matcher<Map<?, ?>> hasSingleEntry(Matcher<?> keyMatcher, Matcher<?> valueMatcher){
        return new IsMapContainingSingleton(keyMatcher, valueMatcher);
    }
    
    @Factory
    public static  Matcher<Map<?, ?>> hasSingleEntry(Entry<?, ?> entry){
        return hasSingleEntry(entry.getKey(), entry.getValue());
    }
    
    @Factory
    public static  Matcher<Map<?, ?>> hasSingleEntry(Object key, Object value){
        return hasSingleEntry(IsEqual.equalTo(key), IsEqual.equalTo(value));
    }
    
    @Factory
    public static  Matcher<Map<?, ?>> hasSingleNotNullEntry(){
        return hasSingleValue(IsNull.notNullValue());
    }
    
    @Factory
    public static  Matcher<Map<?, ?>> hasSingleValue(Matcher<?> valueMatcher){
        return hasSingleEntry(IsAnything.anything(), valueMatcher);
    }
    
    @Factory
    public static  Matcher<Map<?, ?>> hasSingleValue(Object value){
        return hasSingleValue(IsEqual.equalTo(value));
    }
    
    @Factory
    public static  Matcher<Map<?,?>> hasSingleKey(Matcher<?> keyMatcher){
        return hasSingleEntry(keyMatcher, IsAnything.anything());
    }
    
    @Factory
    public static  Matcher<Map<?, ?>> hasSingleKey(Object key){
        return hasSingleKey(IsEqual.equalTo(key));
    }

}
