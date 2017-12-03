#!/usr/bin/env python
# -*- coding: utf-8 -*-
import logging
from datetime import datetime

from flask import Blueprint, jsonify, request, current_app as app

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

