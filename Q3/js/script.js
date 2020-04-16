var URL = 'https://jessicagilfillan.github.io/Final_Exam_Prep/Q3/cats.json';

// on button click fetch data
function ButtonClick()
{
fetch(URL).then(function(response) {
		response.json().then(function(text) {
				cats(text);
		});
});
}
// functino to create and add elemtns to html page
function cats(jsonObj) {
	var AllCats = jsonObj.cats;
	
	for( var i=0;i<AllCats.length;i++)
	{
		var section = document.querySelector('section');
		var article = document.createElement('article');
		var h2 = document.createElement('h2');
		h2.textContent=AllCats[i].name;
		var h3 = document.createElement('h3');
		h3.textContent=AllCats[i].species;
		var h4 = document.createElement('h4');
		h4.textContent="AGE : "+AllCats[i].age;
		var img = document.createElement('img');
		img.setAttribute('src',AllCats[i].photo);
		img.setAttribute('alt',AllCats[i].photo);
		img.setAttribute('height','100px');
		img.setAttribute('width','100px');
		
		var ul = document.createElement('ul');
		var str = "";
		var favfoods = AllCats[i].favFoods;
		for(var j=0;j<favfoods.length;j++)
		{
			str += '<li>' + favfoods[j] + '</li>';
		}
		ul.innerHTML = str;
		article.appendChild(h2);
		article.appendChild(img);
		article.appendChild(h3);
		article.appendChild(h4);
		article.appendChild(ul);
		section.appendChild(article);
		
	}
}