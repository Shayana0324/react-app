function quoteGen(){
    var quotesArr= ["Stay fierce.","Stay focused.","Be positive.",
"The greatest glory in living lies not in never falling, but in rising every time we fall.",
"Life is what happens when you're busy making other plans.",
"When you reach the end of your rope, tie a knot in it and hang on.",
"Don't judge each day by the harvest you reap but by the seeds that you plant.",
"Always remember that you are absolutely unique. Just like everyone else.",
"It is during our darkest moments that we must focus to see the light.",
"Whoever is happy will make others happy too."];
    /* display quotes
    for(i=0;i<=2;i++){
    document.write(quotesArr[i]+"\n"); }
    */
   console.log(quotesArr.length);
   var x=Math.floor(Math.random()*quotesArr.length);
   console.log(x);
   
   document.getElementById("quoteGen").innerHTML="<h4>"+quotesArr[x]+"</h4>";
   //export {quoteGen};
   
}
