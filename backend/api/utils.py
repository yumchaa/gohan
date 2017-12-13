# -*- coding: utf-8 -*-
from itertools import chain

import pandas as pd
import numpy as np


def load_data():
    return pd.read_csv(
        'static/chefgohan.tsv', sep='\t'
    ).drop(['who'], axis=1).set_index('cuisine').query('is_standard == True').fillna('')


feature_names = ['genre', 'purpose', 'hotorcold'] + ['taste__bitter',
                                                     'taste__salty',
                                                     'taste__sour',
                                                     'taste__spicy',
                                                     'taste__sweet',
                                                     'materials__',
                                                     'materials__fish',
                                                     'materials__meat',
                                                     'materials__noodle',
                                                     'materials__rice',
                                                     'materials__vegetable',
                                                     'when__breakfast',
                                                     'when__dinner',
                                                     'when__lunch',
                                                     'when__snack',
                                                     'color__black',
                                                     'color__brown',
                                                     'color__gray',
                                                     'color__green',
                                                     'color__orange',
                                                     'color__pink',
                                                     'color__red',
                                                     'color__white',
                                                     'color__yellow']

target_names = ['親子丼', '玉子焼き', '鶏のから揚げ', '肉じゃが', '天ぷら', 'きんぴら', '鶏の照り焼き',
               '五目炊き込みごはん', '筍ごはん', 'おでん', 'すき焼き', 'ひじきの煮物', 'ブリ大根', 'さばの味噌煮',
               '生姜焼き', '牛丼', 'さといもの煮ころがし', 'かぼちゃの煮物', 'ほうれん草のごまあえ', 'カレイの煮付け',
               '豚汁', '鶏の竜田揚げ', '鯵の南蛮漬け', '西京焼き', '揚げ出し豆腐', 'エビ天そば', 'きつねそば',
               '大根サラダ', 'オムライス', 'エビフライ', 'ローストビーフ', 'ポテトサラダ', 'マカロニグラタン',
               'ロールキャベツ', 'ナポリタン', 'エビピラフ', 'ドライカレー', 'カニクリームコロッケ', 'クリームシチュー',
               'メンチカツ', 'フライドチキン', 'エビチリ', '酢豚', 'あんかけ かに玉', 'にらたま', 'チャーハン',
               '青椒肉絲（チンジャオロース）', '坦々麺', '豚の角煮', '棒々鶏 （バンバンジー)', '冷やし中華', '春巻き',
               '卵スープ', '麻婆豆腐', '回鍋肉 （ホイコーロー）', '焼きそば', '麻婆春雨', '麻婆茄子', '八宝菜',
               'ムニエル', 'ビーフシチュー', 'ラタトゥイユ', 'シーザーサラダ', 'ブイヤベース', 'ペペロンチーノ',
               'カルボナーラ', 'アクアパッツァ', 'リゾット', 'パエリア', '海老のアヒージョ', 'ビビンパ', 'トムヤムクン',
               'カクテキ（大根キムチ）', '生春巻き', '杏仁豆腐', 'パンナコッタ', 'チョコチップクッキー',
               'イチゴのレアチーズケーキ', 'アップルパイ', 'みたらし団子', 'イチゴのショートケーキ']


def softmax(x):
    """https://gist.github.com/stober/1946926#gistcomment-1445507
    """
    e_x = np.exp(x - np.max(x))
    return e_x / e_x.sum()


def flatten(l):
    return list(chain.from_iterable(l))


if __name__ == '__main__':
    # _ = feature_names()
    print(_)
