import os
from django.shortcuts import render, HttpResponse
from django.utils.encoding import smart_str

def index(request):
    return render(request, 'pwipro/index.html')

def form(request):
    return render(request, 'pwipro/form.html')

def memory(request):
    return render(request,'pwipro/memory.html')

def download(request):
    code = 'code.zip'
    response = HttpResponse(content_type='application/force-download')
    response['Content-Disposition'] = 'attachment; filename=%s' % smart_str(code)
    return response