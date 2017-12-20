#!/usr/bin/env python
# -*- coding: utf-8 -*-

from flask import Blueprint, jsonify, request, current_app as app

from api.estimator import Estimator

api = Blueprint('api', __name__)


@api.route("/")
def index():
    """help apis
    """
    func_list = {}
    for rule in app.url_map.iter_rules():
        if rule.endpoint != 'static':
            func_list[rule.rule] = app.view_functions[rule.endpoint].__doc__
    return jsonify(func_list)


@api.route('/cuisines')
def cuisines():
    """find cuisines you want to eat potentially
    """
    node: int = request.args.get('node', 0)
    answer: bool = True if request.args.get('answer', 'True') == 'True' else False
    estimator = Estimator()
    result = estimator.n_selection(node=node, answer=answer)
    return jsonify(result)
