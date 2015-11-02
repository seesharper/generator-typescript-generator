A generator that generates generators written in TypeScript

This generator generates a generator that makes it possible to use TypeScript to create generators.

## install

	npm install -g generator-typescript-generator

## usage
	
	mkdir AwesomeGenerator
	cd AwesomeGenerator
	yo typescript-generator
	? Generator name: (AwesomeGenerator) :

## linking

To execute the generator locally we need to create a symlink 

	npm link

## editing 

Although we can author generators using any editor, the generated generator contains the files needed to hit the ground running using Visual Studio Code.  


