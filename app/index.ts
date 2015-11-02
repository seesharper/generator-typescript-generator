import yo = require("yeoman-generator");
import download = require("download-github-repo");
import yosay = require("yosay");
import replace = require("replace");

class TypeScriptGenerator extends yo.generators.Base {
	projectName: string;

	constructor(args : any, options: any) {
        super(args, options);
        this.log(yosay("Welcome to the typescript generator generator."));
    }

	prompting() : void {
		var done = this.async();

		var options: yo.IPromptOptions = {
			name: "name",
			default: this.appname,
			type: "input",
			message: "Generator name"
		}

		this.prompt(options, answer => {
			this.projectName = answer.name;			 
			done();
		});		
								
	}

	initialize() : void {
		var done = this.async();
		
		download("seesharper/generator-typescript-template",
			this.destinationRoot(null),
			err=> {
				if (err !== undefined && err !== null) {
					this.log(err);
				}
				else {
					done();
				}
			}
		);
	}

	install() : void {
		var parameters: Replace.IReplaceParameters = {
			regex: "typescript-template",
			replacement: this.projectName,
			paths: ['.'],
			recursive: true,
			silent: false
		}

		replace(parameters);				
	}		
	
	
	end() : void{
		this.log("Type 'sudo npm link' to set up a symlink to this generator");
		this.log("Next type 'yo " + this.projectName + "' to run the generator");
	}
}

export = TypeScriptGenerator;