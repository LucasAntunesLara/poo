"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.SeguroDeVeiculo = void 0;
var serivco_1 = require("./serivco");
var SeguroDeVeiculo = /** @class */ (function (_super) {
    __extends(SeguroDeVeiculo, _super);
    function SeguroDeVeiculo(contratante, responsavel, dataDeContratacao, veiculo, valorDoSeguroDeVeiculo, franquia) {
        var _this = _super.call(this, contratante, responsavel, dataDeContratacao) || this;
        _this._veiculo = veiculo;
        _this._valorDoSeguroDeVeiculo = valorDoSeguroDeVeiculo;
        _this._franquia = franquia;
        return _this;
    }
    SeguroDeVeiculo.prototype.imprimir = function () {
        _super.prototype.imprimir.call(this);
        console.log("Ve\u00EDculo: ".concat(this._veiculo));
        console.log("Valor do seguro de ve\u00EDculo: ".concat(this._valorDoSeguroDeVeiculo));
        console.log("Franquia: ".concat(this._franquia));
    };
    return SeguroDeVeiculo;
}(serivco_1.Servico));
exports.SeguroDeVeiculo = SeguroDeVeiculo;
