package com.wds.support.test.matchers;

import static java.lang.reflect.Array.get;
import static java.lang.reflect.Array.getLength;

import java.lang.reflect.Array;
import java.lang.reflect.Field;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import org.apache.commons.lang3.builder.EqualsBuilder;
import org.hamcrest.Description;
import org.hamcrest.Factory;
import org.hamcrest.Matcher;
import org.hamcrest.TypeSafeMatcher;

//TODO move to utfmk
public class IsEqualByReflection <T> extends TypeSafeMatcher<T>{
    private final T operand;
    private final String[] excludeFields;
    private final List<UnmatchedField> unmatchedFields = new ArrayList<UnmatchedField>();
    
    public IsEqualByReflection(T operand) {
        this.operand = operand;
        this.excludeFields = new String[]{};
    }
    
    public IsEqualByReflection(T operand, String[] excludeFields) {
        this.operand = operand;
        this.excludeFields = excludeFields;
    }
    
    @Override
    public boolean matchesSafely(T rhs) {
        if(operand.getClass().isArray()){
            return getLength(operand) == getLength(rhs) && 
                   arrayElementsMatch(operand, rhs);
        }
        
        if(EqualsBuilder.reflectionEquals(operand, rhs, excludeFields))
        	return true;
        	    	
    	List<String> excludedList = Arrays.asList(excludeFields);
    	Field[] fields = operand.getClass().getDeclaredFields();
    	for(Field field : fields){
    		field.setAccessible(true);
    		if(excludedList.contains(field.getName()))
    			continue;
    		
    		try {
				if(! new EqualsBuilder().append(field.get(operand), field.get(rhs)).isEquals()){
					unmatchedFields.add(new UnmatchedField(field.getName(), field.get(operand), field.get(rhs)));
				}
			} catch (IllegalArgumentException e) {
				e.printStackTrace();
			} catch (IllegalAccessException e) {
				e.printStackTrace();
			}
    	}
    	return false;
    }
    
    private boolean arrayElementsMatch(T lhs, T rhs){
        for (int i = 0; i < Array.getLength(lhs); i++) {
            if(!EqualsBuilder.reflectionEquals(get(lhs, i), get(rhs, i), excludeFields)){
                return false;
            }
        }
        return true;
    }

    public void describeTo(Description description) {
    	description.appendText("\nThe following fields were not equal:\n");
    	
    	for(UnmatchedField unmatchedField : unmatchedFields)
    		description.appendText(unmatchedField.toString());
    	
    	if(excludeFields.length > 0)
    		description.appendText(" while excluding ").appendValue(excludeFields);
    }
    
    @Factory
    public static <T> Matcher<T> reflectionEqualTo(T operand) {
        return new IsEqualByReflection<T>(operand);
    }
    
    @Factory
    public static <T> Matcher<T> reflectionEqualTo(T operand, String... excludeFields) {
        return new IsEqualByReflection<T>(operand, excludeFields);
    }
    
    private class UnmatchedField{
    	public String fieldName;
    	public Object expected;
    	public Object actual;
    	
		public UnmatchedField(String fieldName, Object expected, Object actual) {
			this.fieldName = fieldName;
			this.expected = expected;
			this.actual = actual;
		}
    	
		@Override
		public String toString() {
			return "     " + fieldName + ": expected <" + expected +"> got <" + actual + ">\n";
		}
    }
}
