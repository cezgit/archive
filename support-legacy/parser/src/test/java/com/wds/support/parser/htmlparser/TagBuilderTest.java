package com.wds.support.parser.htmlparser;

import static junit.framework.Assert.assertEquals;

import org.junit.Test;

public class TagBuilderTest {
	
	@Test
	public void buildImageTag() throws Exception {
		String tag = "<img src=\"http://www.tqlkg.com/image-3624636-10720657\" width=\"180\" height=\"150\" alt=\"\" border=\"0\"/>";
		Image image = HtmlParser.parseImage(tag);
		assertEquals(tag, image.buildTag());
	}
	
	@Test
	public void buildLinkTag() throws Exception {
		String tag = "<a href=\"http://www.jdoqocy.com/click-3624636-10720657\">link</a>";
		Link link = HtmlParser.parseLink(tag);
		assertEquals(tag, link.buildTag());
	}
}
