# -*- coding: utf-8 -*-
import logging
from flask import Flask, redirect, url_for, request, jsonify


def create_app(config, debug=False, testing=False, config_overrides=None):
    app = Flask(__name__, instance_relative_config=True, static_folder=None)
    app.config.from_object(config)
    app.config.from_pyfile('development.py')

    app.debug = debug
    app.testing = testing

    if config_overrides:
        app.config.update(config_overrides)

    # Setup the data model
    with app.app_context():
        pass
    # Register the backend api blueprint
    from .controller import api
    app.register_blueprint(api, url_prefix='/api')

    # Add a default root route
    @app.route("/")
    def index():
        """redirect api.index
        """
        return redirect(url_for('api.index'))

    @app.errorhandler(500)
    def server_error(e):
        return jsonify({
            'error': {
                'code': 500,
                'message': e.args,
                }
            }), 500

    return app

