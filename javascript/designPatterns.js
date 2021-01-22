// Creational patterns
// Factory, Prototypes, Constructor, Singleton
function person(name, age) {
  return { name, age };
}

function Person(name, age) {
  this.name = name;
  this.age = age;
}

// Estructural patterns
// Adapter, Decorator, Facade, Proxy
// api.js
import axios from 'axios'
// import fetch from 'node-fetch'

export function getOffers() {
  return axios({ url: ... })
  // return fetch({ url })
}

// Behavioral patterns
// Observer, Mediator, Strategy, State
class Subscriber {
  constructor() {
    id: uuid()
  }

  notify(msg) {
    console.log(msg)
  }
}

class Topic {
  constructor() {
    this.subscribers = []
  }

  subscribe(subscriber) {
    this.subscribers.push(subscriber)
  }

  unsubscribe(subscriber) {
    this.subscribers = this.subscribers.filter(({ id }) => id !== subscriber.id)
  }

  publish(msg) {
    this.subscribers.forEach(subscriber => {
      subscriber.notify(msg)
    })
  }
}

const news = new Topic()
const maria = new Subscriber()
news.subcribe(maria)
const juan = new Subscriber()
news.subscribe(juan)

news.publish('hola mundo')



