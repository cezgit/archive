package com.wds.support.parser.htmlparser;

import static junit.framework.Assert.assertEquals;

import java.util.List;

import org.junit.Test;

public class HtmlParserTest {
	
	@Test
	public void parseAd() throws Exception {
		String content = "<a href=\"http://www.jdoqocy.com/click-3624636-10720657\">" +
				"<img src=\"http://www.tqlkg.com/image-3624636-10720657\" width=\"180\" height=\"150\" alt=\"\" border=\"0\"/></a>";
		
		Image image = HtmlParser.parseImage(content);
		assertEquals("http://www.tqlkg.com/image-3624636-10720657", image.getSrc());
		assertEquals(180, image.getWidth().intValue());
		assertEquals(150, image.getHeight().intValue());
		assertEquals(0, image.getBorder().intValue());
		assertEquals("", image.getAlt());
		
		Link link = HtmlParser.parseLink(content);
		assertEquals("http://www.jdoqocy.com/click-3624636-10720657", link.getHref());
		assertEquals("<img src=\"http://www.tqlkg.com/image-3624636-10720657\" width=\"180\" height=\"150\" alt=\"\" border=\"0\"/>", link.getBody());
	}
	
	@Test
	public void getMultipleContent() throws Exception {
		
		String content = "blah blah<tr class=\"entry\"><td class=\"week\">10</td><td class=\"date\">12/03/1960</td><td class=\"links\">" +
				"<a href=\"/archive-chart/_/1/1960-03-12/\">View</a></td></tr>" +
				"<tr class=\"entry\"><td class=\"week\">10</td><td class=\"date\">12/03/1960</td><td class=\"links\">" +
				"<a href=\"/archive-chart/_/1/1960-03-12/\">View</a></td></tr>blah blah";
		
		List<String> contentList = HtmlParser.getMultipleContent(content, "<tr class=\"entry\">", "</tr>");
		assertEquals(2, contentList.size());
		assertEquals("<td class=\"week\">10</td><td class=\"date\">12/03/1960</td><td class=\"links\"><a href=\"/archive-chart/_/1/1960-03-12/\">View</a></td>", contentList.get(0));
		
		contentList = HtmlParser.getMultipleContent("blah blah", "<tr class=\"entry\">", "</tr>");
		assertEquals(0, contentList.size());		
	}
}
