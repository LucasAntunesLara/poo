"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Servico = void 0;
var Servico = /** @class */ (function () {
    function Servico(contratante, responsavel, dataDeContratacao) {
        this._contratante = contratante;
        this._responsavel = responsavel;
        this._dataDeContratacao = dataDeContratacao;
    }
    Servico.prototype.imprimir = function () {
        console.log('Nome do contratante: ' + this._contratante.nome);
        console.log("Nome do respons\u00E1vel: ".concat(this._responsavel.nome));
        console.log("Data de contrata\u00E7\u00E3o: ".concat(this._dataDeContratacao));
    };
    Object.defineProperty(Servico.prototype, "contratante", {
        get: function () {
            return this._contratante;
        },
        set: function (value) {
            this._contratante = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Servico.prototype, "responsavel", {
        get: function () {
            return this._responsavel;
        },
        set: function (value) {
            this._responsavel = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Servico.prototype, "dataDeContratacao", {
        get: function () {
            return this._dataDeContratacao;
        },
        set: function (value) {
            this._dataDeContratacao = value;
        },
        enumerable: false,
        configurable: true
    });
    return Servico;
}());
exports.Servico = Servico;
