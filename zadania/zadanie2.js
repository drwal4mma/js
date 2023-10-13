const guzik1 = document.querySelector
('#change-inner-html-button');
guzik1.addEventListener("click",function() {
   document.querySelector("#change-inner-html-element").innerHTML(<i>Świetnie!</i>)
});
function toggleText(number)
{
   const collapseElement = document.getElementById(`#`);
   const arrowElement = document.getElementById(`id`);

   if (collapseElement.style.display === 'none' || collapseElement.style.display === '')
   {
      collapseElement.style.display = 'block';
      arrowElement.innerHTML = `&#8613;`;
   }
   else
   {
      collapseElement.style.display = 'none';
      arrowElement.innerHTML = `&#8615;`;
   }
}
</script>