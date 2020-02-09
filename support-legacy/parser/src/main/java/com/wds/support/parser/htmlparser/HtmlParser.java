package com.wds.support.parser.htmlparser;

import java.text.ParseException;
import java.util.ArrayList;
import java.util.List;

public class HtmlParser {
	
	public static Link parseLink(String html) throws ParseException {
		String tagContent = getContent(html, Link.A_START_OPEN, Link.A_START_CLOSE);
		Link link = new Link(getTagAttrValueFor(tagContent, Link.A_HREF));
		int start = html.indexOf(Link.A_START_CLOSE, html.indexOf(Link.A_START_OPEN)) + 1;
		int end = html.indexOf(Link.A_END, start);
		if(start > 0 && end > start)			
			link.setBody(html.substring(start, end));
		return link;
	}
	
	public static Image parseImage(String html) throws ParseException {
		String tagContent = getContent(html, Image.IMG_START, HtmlConstants.END_TAG);
		Image image = new Image();
		image.setSrc(getTagAttrValueFor(tagContent, Image.IMG_SRC));
		image.setWidth(Integer.valueOf(getTagAttrValueFor(tagContent, Image.IMG_WIDTH)));
		image.setHeight(Integer.valueOf(getTagAttrValueFor(tagContent, Image.IMG_HEIGHT)));
		image.setBorder(Integer.valueOf(getTagAttrValueFor(tagContent, Image.IMG_BORDER)));
		image.setAlt(getTagAttrValueFor(tagContent, Image.IMG_ALT));
		return image;
	}
	
	public static String getContent(String html, String startContent, String endContent) throws ParseException {
		int start = html.indexOf(startContent) + startContent.length();
		int end = html.indexOf(endContent, start);
		if(start < 0 || end < 0)
			throw new ParseException("content between " + startContent + " and " + endContent + " cannot be parsed for string: "+html, 0);
		return html.substring(start, end);
	}
	
	public static List<String> getMultipleContent(String html, String startContent, String endContent) throws ParseException {
		
		List<String> list = new ArrayList<String>();
		int begin = 0, end = 0;
		
		while(begin >= 0) {
			begin = html.indexOf(startContent, end);
			if(begin > 0) {
				int start = begin + startContent.length();
				end = html.indexOf(endContent, start);
				if(start > 0 && end > 0 && end > start) {
					list.add(html.substring(start, end));
					begin = end;
				}
			}			
		}
		return list;
	}

	private static String getTagAttrValueFor(String tagContent, String attrName) throws ParseException {
		int start = tagContent.indexOf(attrName, 0) + attrName.length();
		int end = tagContent.indexOf(HtmlConstants.DQUOTE, start);
		if(start < 0 || end < 0)
			throw new ParseException("attribute " + attrName + " value cannot be parsed for tag content: "+tagContent, 0);
		return tagContent.substring(start, end);
	}
}
