# Class Vehicle

A Class Creation Helper... Class. This source file can be used to create a JavaScript Class and maintain abstract-ness and handle any extending of other classes.

## Contents

1. [Project Include](#project_include)
1. [JavaScript Usage](#javascript_usage)
1. [License](#license)

## Project Include

NPM can be used to include Class Vehicle as a dependency. 

Directly from the NPM installer:
```
$ npm install class_vehicle
```

Or include it in your package.json:

```
dependencies: {
  "class_vehicle": "1.0.1"
}
```

## JavaScript Usage

Take the creation of two classes:
```JavaScript
var ClassA = (function (isAbstract) {
  // Sets up the class with abstract values
  ClassVehicle.setupClass(isAbstract, ClassA);

  function ClassA() {
    // Check Abstract-ness -- this is where isAbstract === true will cause this to throw an error
    ClassVehicle.checkAbstract.call(this, ClassA);
  }

  return ClassA;
})(true); // true to make a "new ClassA()" not possible

var ClassB = (function (isAbstract, SuperClass) {
  // Sets up the class with it's parent's prototype and in this example declines the abstract-ness
  ClassVehicle.setupClassExtend(isAbstract, ClassB, SuperClass);
  
  function ClassB() {
    ClassVehicle.checkAbstract.call(this, ClassB); // Check Abstract-ness
    SuperClass.call(this); // super call -- this is the constructor call to super()
  }

  return ClassB;
})(false, ClassA);
```

And the attempted usage of these classes:
```JavaScript
new ClassA(); // this will throw an error due to the fact that ClassA is abstract

new ClassB(); // this will work and have all the prototyped values from ClassA
```

## License

The MIT License (MIT)

Copyright (c) 2015 Andrew Ballantyne

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

