package com.wds.support.persistence.entity;

/**
 * Interface for finder parameter that controls paging behavior.
 */
public interface Paging {
    
    /**
     * @return The page of results that should be returned. First page is index 0.
     */
    int getPageIndex();
    
    /**
     * @return The number of elements in each Page.
     */
    int getPageSize();
    
    /**
     * Default implementation of Paging interface.
     * 
     * @author jemmer
     */
    public static class DefaultPaging implements Paging {
        public static final int ALL = -1;          

        public static final Integer PAGE_SIZE = 50;
        
        private int pageIndex;
        private int pageSize;

        protected DefaultPaging(int pageIndex, int pageSize) {
            this.pageIndex = pageIndex;
            this.pageSize = pageSize;
        }

        public int getPageIndex() {
            return pageIndex;
        }

        public int getPageSize() {
            return pageSize;
        }
    }
}
