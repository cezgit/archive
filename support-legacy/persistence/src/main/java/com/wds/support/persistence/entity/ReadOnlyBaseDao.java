package com.wds.support.persistence.entity;

import java.io.Serializable;

public interface ReadOnlyBaseDao<T> {

	/**
	 * Find the instance with the indicated identifier.
	 * 
	 * @param id
	 * @return
	 */
	public T findById(Serializable id);

	/**
	 * Create an OrderBy instance. 
	 * 
	 * @param attributeName The name of the attribute by which to order.
	 * @param descending True for descending; False for ascending.
	 * 
	 * @return The defined OrderBy instance.
	 */
	public OrderBy orderBy(String attributeName, boolean descending);

	/**
	 * Return an OrderBy indicating not to order the results.
	 * 
	 * @return The "don't order" OrderBy instance.
	 */
	public OrderBy dontOrder();

	/**
	 * Create a Paging instance.
	 * 
	 * @param pageIndex Which page of the result set to retrieve.
	 * @param pageSize How many objects are in each page.
	 * 
	 * @return The defined Paging instance.
	 */
	public Paging paging(int pageIndex, int pageSize);

	/**
	 * Return a Paging instance indicating not to page the results.
	 * 
	 * @return The "don't page" Paging instance.
	 */
	public Paging dontPage();

}