# -*- coding: utf-8 -*-

# Define here the models for your scraped items
#
# See documentation in:
# http://doc.scrapy.org/en/latest/topics/items.html

import scrapy


class GohanScraperItem(scrapy.Item):
    # define the fields for your item here like:
    # name = scrapy.Field()
    cuisine = scrapy.Field()
    genre = scrapy.Field()
    url = scrapy.Field()
