package com.wds.support.persistence.entity;

import java.io.Serializable;
import java.util.Collection;

/**
 * Base interface for all DAO objects.  Provides the minimal DAO contract that all
 * DAO implementations must fulfill.
 */
public interface BaseDao<T> extends ReadOnlyBaseDao<T> {
	
	
	public final static int ORACLE_EXPRESSION_LIMIT = 1000;
	
    /**
     * Save the parameter object to the persistence store and return the identifier for
     * the newly persistent instance.
     * 
     * @param obj The object to store.
     * @return Serializable The identifier of the stored object.
     */	
	public Serializable save(T domainObject);
	
    /**
     * Update the persistent version of the parameter Object with the state of the parameter Object.
     * You should not normally need to call this method, as changes in a persistence context are
     * already tracked and will be persisted automatically.  However, this method can be used 
     * with a detached object to update the persistence store.
     * 
     * @param obj The object to store.
     */	
	public void update(T domainObject);

    /**
     * Delete the parameter object from the data store.
     * 
     * @param obj The object to delete.
     */
    public void delete(T domainObject);
    
    /**
     * Flush any pending changes to the data store.
     */
    public void flush();
    
    public void deleteAll(Collection<T> entities);
    
    public void saveOrUpdate(T domainObject);
    
    public void saveOrUpdateAll(Collection<T> entities);
    
    public boolean isUnique(Integer id, String fieldName, Object value);
}
