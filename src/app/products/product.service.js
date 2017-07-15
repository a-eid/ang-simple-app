"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/operator/map"); // for Observable.map .. 
require("rxjs/add/operator/do");
require("rxjs/add/operator/catch");
require("rxjs/add/operator/toPromise");
// not required unless the service itself has a dependancy which is injectable 
// but its a good practice to include it in every service you make for clarity and consistancy 
var ProductService = (function () {
    function ProductService(http) {
        this.http = http;
        this.productUrl = "/api/products/products.json";
        this.handleError = function (error) {
            console.log(error);
            return Observable_1.Observable.throw(error.json().error || 'server error');
        };
    }
    ProductService.prototype.getProducts = function () {
        return this.http.get(this.productUrl)
            .map(function (response) { return response.json(); })
            .do(function (data) { return console.log(JSON.stringify(data)); })
            .catch(this.handleError);
        // this is casting operator to IProduct[] array if you  are wondering 
    };
    return ProductService;
}());
ProductService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], ProductService);
exports.ProductService = ProductService;
//# sourceMappingURL=product.service.js.map