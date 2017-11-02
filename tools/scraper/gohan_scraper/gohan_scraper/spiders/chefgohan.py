# -*- coding: utf-8 -*-
from itertools import chain

import scrapy
from bs4 import BeautifulSoup
from gohan_scraper.items import GohanScraperItem


class ChefgohanSpider(scrapy.Spider):
    name = 'chefgohan'
    start_urls = ['https://chefgohan.gnavi.co.jp/base100']

    def parse(self, response):
        flatten = lambda l: list(chain.from_iterable(l))
        soup = BeautifulSoup(response.body, 'lxml')
        maybe_cuisines: list = soup.find_all('section', class_='sectionLv02')
        all_items = []
        for cuisines in maybe_cuisines:
            genre = cuisines.find('h2', class_='title-basic02').span.text
            items = [{'url':img.attrs['src'],'cuisine':img.attrs['alt'],'genre':genre} for img in cuisines.find_all('img')]
            items = [GohanScraperItem(cuisine=item['cuisine'], genre=item['genre'], url=item['url']) for item in items]
            all_items.append(items)
        return flatten(all_items)

