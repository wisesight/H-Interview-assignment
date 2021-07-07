import os
import tempfile

import pytest

from src.server import create_app


@pytest.fixture
def client():
    app = create_app()

    with app.test_client() as client:
        # with app.app_context():
        #     init_db()
        yield client

def test_square(client):
    rv = client.get("/square?number=8")
    print(rv)
    assert rv.data == b'Hello, World!'