package com.wds.support.persistence.entity;

/**
 * Interface for finder parameter that controls the ordering of results.
 */
public interface OrderBy {
    
    public String getAttributeName();
    public boolean descending();
    public boolean isIgnoreCase();
    
    public static class DefaultOrderBy implements OrderBy {
        private String attributeName;
        private boolean descending;
        private boolean ignoreCase = false;
        
        protected DefaultOrderBy(String attributeName, boolean descending, boolean ignoreCase) {
            this.attributeName = attributeName;
            this.descending = descending;
            this.ignoreCase = ignoreCase;
        }

        public String getAttributeName() {
            return attributeName;
        }

        public boolean descending() {
            return descending;
        }
        
    	public boolean isIgnoreCase() {
    		return ignoreCase;
    	}
    }
}
