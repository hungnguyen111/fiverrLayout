document.addEventListener("DOMContentLoaded",function() {
    window.addEventListener('scroll', function(){
        var menu = pageYOffset;
        var cata = pageYOffset;
        if(menu > 1){
            document.getElementById('myMenu').style.backgroundColor = '#ffffff';
        } else{
            document.getElementById('myMenu').style.backgroundColor = 'transparent';
        }
        if(cata > 50){
            document.getElementById('categories').style.display = 'block';
            document.getElementById('mySearchForm').style.display = 'block';
        } else{
            document.getElementById('categories').style.display = 'none';
            document.getElementById('mySearchForm').style.display = 'none';
        }

    })
})