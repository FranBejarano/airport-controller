Airport Challenge
=================

```
         ______
        __\____\___
=  = ==(____DFA____)
           \_____\__________________,-~~~~~~~`-.._
          /     o o o o o o o o o o o o o o o o  |\_
          `~-.__       __..----..__                  )
                `---~~\___________/------------`````
                =  ===(_________)

```

Instructions
---------

* Feel free to use google, your notes, books, etc. but work on your own.
* Keep it SIMPLE - it's not nearly as complicated as it first may look.
* You must [submit your challenge](https://airtable.com/shrUGm2T8TYCFAmjN) by the deadline, wherever you get to.
* Use your own test framework and evidence your test-driven development by committing on passing tests.
* Please write your own README detailing how to install your project, how to run the tests, how you approached the problem and provide screenshots of interacting with your program.
* If you refer to the solution of another coach or student, please put a link to that in your README.
* Please create separate files for every class, module, and spec.

Steps
-------

1. Fork this repo, and clone to your local machine
2. `npm install` to install project dependencies
3. Convert stories into a representative domain model and test-drive your work.
4. Run your tests using `npm test` or `node specRunner.js`
5. OPTIONAL: [Lint](https://eslint.org/docs/user-guide/getting-started) your source code using `npx eslint src`.

Task
-----

We have a request from a client to write the software to control the flow of planes at an airport. The planes can land and take off provided that the weather is sunny. Occasionally it may be stormy, in which case no planes can land or take off.  Here are the user stories that we worked out in collaboration with the client:

#### Acceptance Criteria

```
### USER CASE 1
As an air traffic controller
So I can get passengers to a destination
I want to instruct the airport to land a plane

## Domain Model

| Objects | Properties                    | Messages          | Outputs |
| ------- | ----------------------------- | ----------------- | ------- |
| Airport | planesAtAirport @Array[@Plane]| landPlane(@Plane) | @Void   |
| Plane   | planeId @String               | getId()           | @String |

### Tests

Initial thoughts:
1. Need an airport
2. Plane able to land in the Airport
3. Planes at Airport should increase by 1 when a plane lands
4. Planes at Airport does not increase when something that is not a plane lands

**Test 1** - `planesAtAirport` length increases when `landPlane` is called with an *instance of `Item`*

**Test 2** - `landPlane` should only add `Plane` instances to the `planesAtAirport`

**Test 3** - Edge Case - falsy values should not be added to `planesAtAirport`

### USER CASE 2
As the system designer
So that the software can be used for many different airports
I would like a default airport capacity that can be overridden as appropriate

## Domain Model

| Objects | Properties                    | Messages                          | Outputs    |
| ------- | ----------------------------- | --------------------------------- | ---------- |
| Airport | airportCapacity @Integer      | increaseAirportCapacity(@Integer) | @Integer   |

Initial thoughts:
1. Need an airport
2. Need a default airport capacity
3. increaseAirportCapacity should increase by the number declared
4. increaseAirportCapacity should only accept numbers

**Test 4** - Set a default airport capacity to 10

**Test 5** - `increaseAirportCapacity` increases `airportCapacity` by the Integer passed as parameter (2)

**Test 6** - Edge Case -`increaseAirportCapacity` should not increase `airportCapacity` when an Integer is not passed (`a`) and keep default capacity

**Test 7** - Edge Case - falsy values should not be added to `airportCapacity`

**Test 8** - Edge Case - `increaseAirportCapacity` should not accept negative numbers

### USER CASE 3
As an air traffic controller
To ensure safety
I want to prevent landing when the airport is full

## Domain Model

| Objects | Properties                    | Messages            | Outputs |
| ------- | ----------------------------- | ------------------- | ------- |
| Airport | planesAtAirport @Array[@Plane]| landPlane(@Plane)   | @Void   |

Initial thoughts:
1. Need an airport
2. Need to include a condition to use `landPlane` method.

**Test 9** - When `planesAtAirpot` = `airportCapacity` then `landPlane` does not add planes to the airport

### USER CASE 4
As an air traffic controller
So I can get passengers on the way to their destination
I want to instruct the airport to let a plane take off and confirm that it is no longer in the airport

## Domain Model

| Objects | Properties                    | Messages                     | Outputs  |
| ------- | ----------------------------- | ---------------------------- | -------- |
| Airport | planesAtAirport @Array[@Plane]| takeOffPlane(@Plane)         | @Void    |
|         |                               | checkPlanesAtAirport(@Plane) | @Boolean |

Initial thoughts:
1. Need an airport with at least one identifiable Plane in it
2. Try to remove the identifiable Plane
3. Confirm that the `planesAtAirport` length is reduced by 1 from initial value

**Test 10** - `planesAtAirport` length decreases to 0 when Plane is found and removed

**Test 11** - confirm that the plane has taken off and is not longer in `planesAtAirport`

### USER CASE 5
As an air traffic controller
To avoid confusion
I want to prevent asking the airport to let planes take-off which are not at the airport, or land a plane that's already landed

## Domain Model

| Objects | Properties                    | Messages                     | Outputs  |
| ------- | ----------------------------- | ---------------------------- | -------- |
| Airport | planesAtAirport @Array[@Plane]| checkPlanesAtAirport(@Plane) | @Boolean |
|         |                               | landPlane(@Plane)            | @Void    |
|         |                               | takeOffPlane(@Plane)         | @Void    |

Initial thoughts:
1. Populate `planesAtAirport` with some instances of Plane
2. Check `planesAtAirport` for one Plane that is already in the Array, so it cannot land because is landed
3. Check `planesAtAirport` for one Plane that is not in the Array, so it cannot take off because is already away

**Test 12** - `landPlane` does not increase `planesAtAirport` when a Plane is already in `planesAtAirport`

**Test 13** - `landPlane` increase `planesAtAirport` by 1 when a Plane is not in `planesAtAirport`

**Test 14** - `takeOffPlane` does not decrease `planesAtAirport` when a Plane is not in `planesAtAirport`

**Test 15** - `takeOffPlane` decrease `planesAtAirport` by 1 when a Plane is in `planesAtAirport`
```

#### Extended Acceptance Criteria

```
### USER CASE 6
As an air traffic controller
To ensure safety
I want to prevent takeoff when weather is stormy

## Domain Model

| Objects | Properties                    | Messages                     | Outputs  |
| ------- | ----------------------------- | ---------------------------- | -------- |
| Weather | storm @Boolean                | isStormy(@Weather)           | @Boolean |
|         |                               | weatherGenerator()           | @String  |
| ------- | ----------------------------- | ---------------------------- | -------- |
| Airport |                               | takeOffPlane(@Plane)         | @Void    |
|         | planesAtAirport @Array[@Plane]| planesAtAirport.length       | @Integer |

Initial thoughts:
1. Need a weather class
2. Need a weather generator
3. takeOffPlane needs to take the output of the weather class

**Test 16** - check if the weather generator returns a weather

**Test 17** - prevent a plane does not take off when the weather is stormy by checking it stays in `planesAtAirport`

### USER CASE 7
As an air traffic controller
To ensure safety
I want to prevent landing when weather is stormy

## Domain Model

| Objects | Properties                    | Messages                     | Outputs  |
| ------- | ----------------------------- | ---------------------------- | -------- |
| Weather | storm @Boolean                | isStormy(@Weather)           | @Boolean |
| ------- | ----------------------------- | ---------------------------- | -------- |
| Airport |                               | landPlane(@Plane)            | @Void    |
|         | planesAtAirport @Array[@Plane]| planesAtAirport.length       | @Integer |

Initial thoughts:
1. Need a weather class
2. landPlane needs to take the output of the weather class

**Test 18** - prevent a plane of landing when the weather is stormy by checking it is not added to `planesAtAirport`

### USER CASE 8
As an air traffic controller
To count planes easily
Planes that have landed must be at an airport

## Domain Model

| Objects | Properties          | Messages              | Outputs  |
| ------- | --------------------| ----------------------| -------- |
| Plane   | groundedIn @Airport | groundedIn (@Airport) | @Airport |

Initial thoughts:
1. A variable to store in which airport a plane is grounded

**Test 19** - `planesGrounded` returns an `Airport` where the plane is ground
**Test 20** - `planesGrounded` returns an `flying` when a plane takes off from an airport
```

Your task is to test drive the creation of a set of classes/objects to satisfy all the above user stories. You will need to use a random number generator to set the weather (it is normally sunny but on rare occasions it may be stormy). In your tests, you'll need to stub random behaviour to ensure consistent test behaviour.

Your code should defend against [edge cases](http://programmers.stackexchange.com/questions/125587/what-are-the-difference-between-an-edge-case-a-corner-case-a-base-case-and-a-b) such as inconsistent states of the system ensuring that planes can only take off from airports they are in; planes that are already flying cannot take off and/or be in an airport; planes that are landed cannot land again and must be in an airport, etc.

=====================================================================
FINAL COMMENTS
=====================================================================

* I am aware that the classes of this project are tightly coupled and it is something that I am working on the new challenge.
* I left all the test cases in one file. Now, I know that I should have test files for every class.
* I would like to have a better tool to create the random weather method.
* Create more "runner" files for the other classes.
* More test cases in airportRunner.js.
