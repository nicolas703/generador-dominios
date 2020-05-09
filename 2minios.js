console.log('Estos son los dominios creados a su preferencia')
console.log('_________________________________________________________________________')
var adj = ['Gran', 'Pequeña', 'Potente', 'SuperPoderosa'];
var pag = ['Pagina', 'Web', 'Seccion', 'Esquina'];
var obj = prompt('Escriba el objetivo de su futura pagina web empezando con mayúscula. Por ejemplo: Autos, Memes, Moda, Medicina, Noticias, etc...')


    function mezcla (){
        for(let i=0; i<adj.length; i++){
            for(let b=0; b<pag.length; b++){
                
                 console.log('www.' + adj[i] + pag[b] + 'De' + obj + '.com');
        }}}
mezcla();
