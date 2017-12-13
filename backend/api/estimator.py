# -*- coding: utf-8 -*-
import numpy as np
import pandas as pd
from sklearn.externals import joblib
from sklearn.tree import DecisionTreeClassifier

from api.utils import feature_names, target_names, flatten, softmax


class Estimator:
    _instance = None

    def __new__(cls, *args, **kwargs):
        if cls._instance is None:
            cls._instance = super().__new__(cls)
            # cls.model: DecisionTreeClassifier = joblib.load('static/model_cuisines.pkl.gz')

            import os
            dir = os.path.dirname(os.path.abspath(__file__))
            cls.model: DecisionTreeClassifier = joblib.load(dir + '/../static/model_cuisines.pkl.gz')
            tree = cls.model.tree_
            cls.left = tree.children_left
            cls.right = tree.children_right
            cls.features = [feature_names[i] for i in tree.feature]
            cls.value = tree.value
            cls.n_node_samples = tree.n_node_samples
            cls.threshold = tree.threshold
        return cls._instance

    def find_cuisines(self):
        return self.model.tree_

    def first_selection(self):
        _node = 0
        return {
            'node': _node,
            'question': {
                'feature': self.features[_node],
                'threshold': self.threshold[_node],
            },
            'now_candidates': self._class_names(_node),
        }

    def n_selection(self, node: int, answer: bool):
        node = int(node)

        if node == 0 and answer is None:
            return self.first_selection()

        if answer:
            _node = self.left[node]
        else:
            _node = self.right[node]

        if self.threshold[_node] == -2:
            selection = None
        else:
            selection = {
                'feature': self.features[_node],
                'threshold': str(self.threshold[_node]),
            }
        return {
            'node': str(_node),
            'selection': selection,
            'now_candidates': self._class_names(_node),
        }

    def class_name(self, node):
        return target_names[np.argmax(self.value[node])]

    def _class_names(self, node):
        return pd.DataFrame({
            'target_names': target_names,
            'likelihood': flatten(softmax(self.value[node])),
            'url': 'https://c-chefgohan.gnst.jp/imgdata/recipe/49/01/149/rc234x174_1209130113_73dc9aa8f6b508a75a4c37154864d8ef.jpg',
        }).sort_values('likelihood', ascending=False).head(10).astype({
            'likelihood': str
        }).to_dict(orient='record')


if __name__ == '__main__':
    estimator = Estimator()
    # estimator.find_cuisines()
    _ = estimator.first_selection()
    print(_)