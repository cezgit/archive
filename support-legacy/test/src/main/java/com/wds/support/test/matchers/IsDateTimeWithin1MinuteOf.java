package com.wds.support.test.matchers;

import java.util.Date;

import org.hamcrest.BaseMatcher;
import org.hamcrest.Description;
import org.hamcrest.Factory;
import org.hamcrest.Matcher;
import org.joda.time.DateTime;

public class IsDateTimeWithin1MinuteOf extends BaseMatcher<DateTime> {
	private static final int DEFAULT_NB_MINUTES = 1;
    final private DateTime dateToMatch;
    final private int numberOfMinutes;
    private DateTime lastDateAttemptedToMatch;
    
    public IsDateTimeWithin1MinuteOf(DateTime dateToMatch) {
        this(dateToMatch, DEFAULT_NB_MINUTES);
    }
    
    public IsDateTimeWithin1MinuteOf(DateTime dateToMatch, int numberOfMinutes) {
        this.dateToMatch = dateToMatch;
        this.numberOfMinutes = numberOfMinutes;
    }
    
    public boolean matches(Object item) {
        DateTime dateItem = (DateTime) item;
        lastDateAttemptedToMatch = dateItem;
        return  dateItem.isAfter(dateToMatch.minusMinutes(numberOfMinutes)) && 
        		dateItem.isBefore(dateToMatch.plusMinutes(numberOfMinutes));
    }

    public void describeTo(Description description) {
        description
                .appendText("Make sure the DateTime objects are approximatley the same time plus or minus 1 minute.")
                .appendText(" Expected: ").appendValue(dateToMatch).appendText("found: ")
                .appendValue(lastDateAttemptedToMatch);
    }
    
    @Factory
    public static Matcher<DateTime> isWithinOneMnOf(DateTime dateTime) {
        return isWithinMinutesOf(dateTime, DEFAULT_NB_MINUTES);
    }
    
    @Factory
    public static Matcher<DateTime> isWithinOneMnOf(Date date) {
        return isWithinOneMnOf(new DateTime(date));
    }
    
    @Factory
    public static Matcher<DateTime> isWithinMinutesOf(DateTime dateTime, int nbMinutes) {
        return new IsDateTimeWithin1MinuteOf(dateTime, nbMinutes);
    }
    
    @Factory
    public static Matcher<DateTime> isWithinMinutesOf(Date date, int nbMinutes) {
        return isWithinMinutesOf(new DateTime(date), nbMinutes);
    }
}
