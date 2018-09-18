import { EventEmitter } from '../app/utils/event-emitter.js';

EventEmitter.on('itensTotalizados', alert);
EventEmitter.on('itensTotalizados', console.log);