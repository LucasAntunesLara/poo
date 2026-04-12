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
exports.Emprestimo = void 0;
var serivco_1 = require("./serivco");
var Emprestimo = /** @class */ (function (_super) {
    __extends(Emprestimo, _super);
    function Emprestimo(contratante, responsavel, dataDeContratacao, valor, taxa) {
        var _this = _super.call(this, contratante, responsavel, dataDeContratacao) || this;
        _this._valor = valor;
        _this._taxa = taxa;
        return _this;
    }
    Emprestimo.prototype.imprimir = function () {
        //Recupera o que foi feito no método da super classe
        _super.prototype.imprimir.call(this);
        console.log("Ve\u00EDculo: ".concat(this._taxa));
        console.log("Valor: ".concat(this._valor));
    };
    Object.defineProperty(Emprestimo.prototype, "valor", {
        get: function () {
            return this._valor;
        },
        set: function (value) {
            this._valor = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Emprestimo.prototype, "taxa", {
        get: function () {
            return this._taxa;
        },
        set: function (value) {
            this._taxa = value;
        },
        enumerable: false,
        configurable: true
    });
    return Emprestimo;
}(serivco_1.Servico));
exports.Emprestimo = Emprestimo;
