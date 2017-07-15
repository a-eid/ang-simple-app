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
var product_service_1 = require("./product.service");
var ProductListComponent = (function () {
    // private productService : ProductService;
    // constructor(productService: ProductService){
    //   this.productService = productService
    // }
    // this is equivelent to the commented code above 
    function ProductListComponent(productService) {
        var _this = this;
        this.productService = productService;
        this.getTitle = function () { return "Product List"; };
        this.pageTitle = "Product list";
        this.imageWidth = 50;
        this.imageMargin = 2;
        this.showImages = false;
        this.buttonText = "show Images";
        this.listFilter = "";
        this.toggleImages = function () {
            _this.showImages = !_this.showImages;
            _this.buttonText = _this.showImages ? "Hide Images" : "Show Images";
        };
        this.onRatingClicked = function (e) {
            console.log(e);
        };
    }
    ProductListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.productService.getProducts()
            .subscribe(function (products) { return _this.products = products; }, function (error) { return _this.errorMessage = error = error; });
    };
    return ProductListComponent;
}());
ProductListComponent = __decorate([
    core_1.Component({
        selector: 'pm-products',
        moduleId: module.id,
        templateUrl: 'product-list.component.html',
        styleUrls: ['product-list.component.css']
    }),
    __metadata("design:paramtypes", [product_service_1.ProductService])
], ProductListComponent);
exports.ProductListComponent = ProductListComponent;
//# sourceMappingURL=product-list.component.js.map