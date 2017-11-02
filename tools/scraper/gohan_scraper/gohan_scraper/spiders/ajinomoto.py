# -*- coding: utf-8 -*-
import scrapy
from bs4 import BeautifulSoup
from gohan_scraper.items import GohanScraperItem


class AjinomotoSpider(scrapy.Spider):
    name = 'ajinomoto'
    # allowed_domains = ['ajinomoto.com']
    start_urls = ['https://park.ajinomoto.co.jp/recipe/corner/teiban/index']

    def parse(self, response):
        soup = BeautifulSoup(response.body, 'lxml')
        maybe_cuisine: list = soup.find_all('div', class_='listBox clearfix')
        cuisines: list = [c.find('strong').text for c in maybe_cuisine]
        return [GohanScraperItem(cuisine=cuisine) for cuisine in cuisines]
