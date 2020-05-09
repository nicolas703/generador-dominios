console.log('_________________________________________________________________________')
console.log('Estos son los dominios creados por defecto como pide el ejercicio')
console.log('')
var adj = ['gran', 'pequeña', 'potente', 'superpoderosa'];
var pag = ['pagina', 'web', 'seccion', 'esquina'];
var three = ['deempleos', 'deautos', 'sobreplantas','dememes' ];

    function mezcla (){
        for(let i=0; i<adj.length; i++){
            for(let b=0; b<pag.length; b++){
                for(let a=0; a<three.length; a++){
                 console.log('www.' + adj[i] + pag[b] + three[a] + '.com');
        }}}}
mezcla();