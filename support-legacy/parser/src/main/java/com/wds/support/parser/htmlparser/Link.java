package com.wds.support.parser.htmlparser;

import java.text.ParseException;

import org.apache.commons.lang3.StringUtils;


public class Link extends Tag {
	
	public final static String A_HREF = "href=\"";
	public final static String A_START_OPEN = "<a";
	public final static String A_START_CLOSE = HtmlConstants.END_TAG;
	public final static String A_END = "</a>";
	
	private String href;
	private String body;
	
	public Link(){
	};
	
	public Link(String href) {
		this();
		this.href = href;
	}

	public String getHref() {
		return href;
	}

	public void setHref(String href) {
		this.href = href;
	}
	
	public String getBody() {
		return body;
	}

	public void setBody(String body) {
		this.body = body;
	}

	protected void initParams() {		
		params.put(A_HREF, getHref());		
	}
	
	public String buildTag() throws ParseException {
		if(StringUtils.isEmpty(getHref()))
			throw new ParseException("link href cannot be null", 0);
		String linkStart = buildTag(A_START_OPEN, A_START_CLOSE);
		String linkBody = getBody() == null ? "" : getBody();		
		return linkStart+linkBody+A_END;
	}
}
