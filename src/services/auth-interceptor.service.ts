import { Injectable } from '@angular/core';
import {
  HttpInterceptorFn
} from '@angular/common/http';

export const AuthInterceptorService :HttpInterceptorFn = (req, next) =>  {
 
    const request = req.clone({
      setHeaders: {
        'Content-Type': 'application/json; charset=utf-8',
        Accept: 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    });

    return next(request);
  }

