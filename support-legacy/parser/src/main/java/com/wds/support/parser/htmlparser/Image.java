package com.wds.support.parser.htmlparser;

import java.text.ParseException;

import org.apache.commons.lang3.StringUtils;


public class Image extends Tag {
	
	public final static String IMG_ALT = "alt=\"";
	public final static String IMG_BORDER = "border=\"";
	public final static String IMG_HEIGHT = "height=\"";
	public final static String IMG_WIDTH = "width=\"";
	public final static String IMG_SRC = "src=\"";
	public final static String IMG_START = "<img";
	public final static String IMG_END = "/>";
	
	private String src;
	private Integer width;
	private Integer height;
	private String alt;
	private Integer border;
	
	public Image(){
	}
	
	public Image(String src) {
		this();
		this.src = src;
	}
	
	public Image(String src, Integer width, Integer height) {
		this(src);
		this.width = width;
		this.height = height;
	}

	public String getSrc() {
		return src;
	}

	public void setSrc(String src) {
		this.src = src;
	}

	public Integer getWidth() {
		return width;
	}

	public void setWidth(Integer width) {
		this.width = width;
	}

	public Integer getHeight() {
		return height;
	}

	public void setHeight(Integer height) {
		this.height = height;
	}

	public String getAlt() {
		return alt;
	}

	public void setAlt(String alt) {
		this.alt = alt;
	}

	public Integer getBorder() {
		return border;
	}

	public void setBorder(Integer border) {
		this.border = border;
	}

	protected void initParams() {
		params.put(IMG_SRC, getSrc());
		params.put(IMG_WIDTH, getWidth());
		params.put(IMG_HEIGHT, getHeight());
		params.put(IMG_ALT, getAlt());
		params.put(IMG_BORDER, getBorder());
	}
	
	public String buildTag() throws ParseException {
		if(StringUtils.isEmpty(getSrc()))
			throw new ParseException("image source cannot be null", 0);
		return buildTag(Image.IMG_START, Image.IMG_END);
	}
}
