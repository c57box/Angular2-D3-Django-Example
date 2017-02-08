'''Django Web API'''
import json
from django.http import HttpRequest
from django.http import HttpResponse
import numpy as np

def myapi(request):
    ''' HTTPGET return a json string. Format: [{"val": 8.024555},{"val": 4.23432},...]'''

    assert isinstance(request, HttpRequest)

    if request.method == "GET":
        data = []
        my_array = 100 * np.random.random_sample(8 + np.random.randint(10, size=1),)
        for val in my_array:
            data.append({'val':val})

        return HttpResponse(
            json.dumps(data),
            status=200,
            content_type='application/json'
        )
