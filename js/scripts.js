$(document).ready(function(){

    $("#mexico").click(function(){
      var mexico = new Place("Tulum","Chichen itza","Feb 18,2020","Chichén Itzá is a complex of Mayan ruins on Mexico's Yucatán Peninsula.");
      var mexicoInfo = ( "Location: " + mexico.location +"</br>"+
                       " Landmark: " + mexico.landmarks +"</br>"+
                       " Time of Year: " + mexico.timeOfYear +"</br>"+
                       "Note: " + mexico.notes)
       $("#mexicoInfo").html(mexicoInfo).fadeToggle("slow");
    })
    $("#disney").click(function(){
      var disney = new Place("California" , "Magic Kingdom", "March 8 2020", "Lines were long." );
      var disneyInfo = ( " Location " + disney.location + "</br>" +
                         " Landmark: " + disney.landmarks + "</br>" + 
                         "Time of Year: " + disney.timeOfYear + "</br>" + 
                         "Notes:  " + disney.notes)
                         
      $("#disneyInfo").html(disneyInfo).fadeToggle("slow");
   })

   $("#mtRainier").click(function(){
      var mtRainier = new Place("Washington", "Mountain", "June 3 2015", "Beautiful Mountain.");
      var mtRainierInfo = ( " Location " + mtRainier.location + "</br>" +
                         " Landmark: " + mtRainier.landmarks + "</br>" + 
                         "Time of Year: " + mtRainier.timeOfYear + "</br>" + 
                         "Notes:  " + mtRainier.notes)
                           
    $("#mtRainierInfo").html(mtRainierInfo).fadeToggle("slow");
 })
});

function Place(location, landmarks, timeOfYear, notes){
   this.location = location;
   this.landmarks = landmarks;
   this.timeOfYear = timeOfYear;
   this.notes = notes;
}


