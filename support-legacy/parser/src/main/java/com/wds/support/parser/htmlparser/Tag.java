package com.wds.support.parser.htmlparser;

import java.text.ParseException;
import java.util.LinkedHashMap;
import java.util.Map;

public abstract class Tag {
	
	protected Map<String,Object> params;
	protected abstract void initParams();
	
	public Map<String,Object> getParams() {
		if(params == null)
			params = new LinkedHashMap<String,Object>();
		if(params.isEmpty()){
			initParams();
		}
		return params;
	}
	
	protected String buildTag(String startTag, String endTag) {
		StringBuffer sb = new StringBuffer(startTag);
		for(Map.Entry<String, Object> entry : getParams().entrySet()) {
			if(entry.getValue() != null)
				sb.append(" "+entry.getKey()+entry.getValue()+HtmlConstants.DQUOTE);
		}
		sb.append(endTag);
		return sb.toString();
	}
	
	public abstract String buildTag() throws ParseException;
}
