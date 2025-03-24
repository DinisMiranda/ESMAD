const compra = {
    nomeProduto : prompt("Nome do produto: "),
    catProducto : prompt("Categoria do produto: "),
    precoBase : 2.50,
    txIVA : 23,
    precoFinal : function() {
        return this.precoBase + (this.precoBase * this.txIVA / 100);
    },
    dadosEncomenda : {
        dataEncomenda :"(2023-03-27)",
         prazoEntrega : "(7) dias",
         localEntrega : "Avenida do Mar, 74, 4460-810 Matosinhos",
    },
    showLenght : function() {     
        return Object.keys(this).length;
    },
    showProperties : function() {
        return Object.keys(this);
    
    },
    removeProp : function(prop) {
        delete this[prop];
        
    }
}


console.log(compra.nomeProduto);
console.log(compra.catProducto);
console.log(compra.precoBase);
console.log(compra.precoFinal());

compra.removeProp("precoBase");
console.log(compra);