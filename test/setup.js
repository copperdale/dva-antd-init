import { jsdom } from 'jsdom';

global.document = jsdom('<!doctype html><html><body></body></html>');
global.window = global.window.defaultView;
global.navigator = global.window.navigator;
