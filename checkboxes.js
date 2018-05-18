$('document').ready(function(){

//alert('töötab');
//var checkBox = $('input:checkbox:visible');
//var checkBoxCount = checkBox.length;
//var lastCheckboxClickedIndex = undefined;
var lastCheckboxClickedIndex = undefined;
// Otsime igaks juhuks uuesti märkeruudud üles (kui olid enne näiteks peidetud)
$('input:checkbox').click(function(e){
    var checkBox = $('input:checkbox:visible');
    var checkBoxCount = checkBox.length;
    //console.log("$('input:checkbox').click");
    //console.log('checkboxe: '+checkBox.length);


//console.log('töötab');
//checkBox.click(function(e){
    //console.log('checkBox.click');
    if(!e.shiftKey){
	   lastCheckboxClickedIndex = checkBox.index(this);
       //console.log('lastCheckboxClickedIndex: '+lastCheckboxClickedIndex);
       //console.log('count: '+checkBoxCount);
    }
    else if(e.shiftKey){
        //console.log('e.shiftkey haru');
        // viimase märkeruudu indeks, millel klikiti
        var toCheckboxIndex = checkBox.index(this);
        //console.log('toCheckboxIndex: '+toCheckboxIndex);
        //console.log('checkBox.get(lastCheckboxClickedIndex).checked: '+checkBox.get(lastCheckboxClickedIndex).checked);
        if(checkBox.get(lastCheckboxClickedIndex).checked == true){
            //console.log('checkBox.checked == true haru');
            for(i=lastCheckboxClickedIndex; i <= toCheckboxIndex; i++){
                var checkb = checkBox.get(i);
                checkb.checked = true;
                $(checkb).closest("tr").find("input[name$='[salvestada]']").val("t");
            }
        }
        else{
            //console.log('checkBox.checked == false haru');
            for(i=lastCheckboxClickedIndex; i <= toCheckboxIndex; i++){
                var checkb = checkBox.get(i);
                checkb.checked = false;
                $(checkb).closest("tr").find("input[name$='[salvestada]']").val("t");
            }
        }
    }
    
//})
})

})