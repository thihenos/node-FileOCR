# node-FileOCR
File OCR with NodeJS. Transforming pdf/txt/doc/docx/jpeg|jpg|png

If you need help, call me:
[Twitter](https://twitter.com/thihenos), [Medium](https://medium.com/@thihenos)

### What I need ?

* SublimeText or other file editor
* NPM
* Node JS
* Express, node network app framework
* Multer, middleware for handling multipart/form-data

### Installation

Download the project, and inside the main folder, just run the follow command for dependences installation

```sh
$ npm install
```

### Test
In app.js file, I configurated the http PORT to 3000, you can change as you wanted, so, in this example, when start this example, it will be released in localhost:3000 address :)

To test if the OCR is working fine, just test in localhost:3000/file, the application will return in the same page the text processed

If you want to test mult-files, access localhost:3000/files

So, open your favorite Terminal and run these command.
```sh
$ node app
```

### Test - Image
For image processing, you need to create a account in [Google Cloud Plataform](https://cloud.google.com/) and follow the [instructions](https://cloud.google.com/vision/docs/auth?authuser=1) to get the JSON auth for API request.

Note that Google Vision, you need to pay for use it, but you can try the [Tesseract Project](https://opensource.google.com/projects/tesseract) from Google which is free, but the results are not so accurated

### Todos
Give me some ideias :P

License
----
MIT

**Free Software, Free Examples, Free hugs!**