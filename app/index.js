var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var yo = require("yeoman-generator");
var download = require("download-github-repo");
var yosay = require("yosay");
var replace = require("replace");
var TypeScriptGenerator = (function (_super) {
    __extends(TypeScriptGenerator, _super);
    function TypeScriptGenerator(args, options) {
        _super.call(this, args, options);
        this.log(yosay("Welcome to the typescript generator generator"));
    }
    TypeScriptGenerator.prototype.prompting = function () {
        var _this = this;
        var done = this.async();
        var options = {
            name: "name",
            default: this.appname,
            type: "input",
            message: "Generator name"
        };
        this.prompt(options, function (answer) {
            _this.projectName = answer.name;
            done();
        });
    };
    TypeScriptGenerator.prototype.initialize = function () {
        var _this = this;
        var done = this.async();
        download("seesharper/generator-typescript-template", this.destinationRoot(null), function (err) {
            if (err !== undefined && err !== null) {
                _this.log(err);
            }
            else {
                done();
            }
        });
    };
    TypeScriptGenerator.prototype.install = function () {
        var parameters = {
            regex: "typescript-template",
            replacement: this.projectName,
            paths: ['.'],
            recursive: true,
            silent: false
        };
        replace(parameters);
    };
    TypeScriptGenerator.prototype.end = function () {
        this.log("Type 'sudo npm link' to set up a symlink to this generator");
        this.log("Next type 'yo " + this.projectName + "' to run the generator");
    };
    return TypeScriptGenerator;
})(yo.generators.Base);
module.exports = TypeScriptGenerator;
//# sourceMappingURL=index.js.map