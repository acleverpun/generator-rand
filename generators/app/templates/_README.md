# <%= name %>

<%= description %>


## Dependencies

- [Node.js](http://nodejs.org/)
- [`npm`](http://nodejs.org/)
- [`bower`](http://bower.io/)
- [`broccoli`](https://github.com/broccolijs/broccoli)


## Setup


```sh
# we have this run `bower install` as well, or else that too would be necessary
$ npm install
```


## Development

The `.js` files in `app/` get transpiled and concatenated into a file named `main.js`.
Everything in `public/` gets served directly.


## [DJ, Spin that shit](http://youtu.be/yx28m-M--4Q)

### Running

```sh
$ broccoli serve
```

### Building for distribution

We have yet to hit this point, but it will be along the lines of running `broccoli dist`.
