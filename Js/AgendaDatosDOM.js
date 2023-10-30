class Dato{
    constructor(titulo,monto){
        this.titulo = titulo;
        this.monto = monto;
    }
}

class Ingreso extends Dato{
    constructor(titulo,monto,id){
        super(titulo,monto);
        this.id = id;
    }
}

class Egreso extends Dato{
    constructor(titulo,monto,id){
        super(titulo,monto);
        this.id = id;
    }
}

let ingresos = []
let egresos = []