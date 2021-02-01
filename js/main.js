fetch("https://srilasya21.github.io/ecommerce/data/data.json").then(response=>{
	return response.json()
}).then(data=>{
	displayData(data)
})

function displayData(info){
	var bodyElement=document.querySelector("body");
	var row=document.createElement("section")
	row.classList.add("row","justify-content-center")
	// var sampleElement=document.createElement("img")
	// sampleElement.src="img/1.jpg";
	// sampleElement.classList.add("class1","class2","class3")
	// sampleElement.classList.remove("class3")
	// console.log(sampleElement)
	bodyElement.append(row)
	info.mobiles.map(value=>{
		var column=document.createElement("article")
		column.classList.add("col-sm-10","col-md-6","col-lg-3");
		row.append(column)
		//card
		var card=document.createElement("div");
		card.classList.add("card","mt-3")
		//card-body
		var cardBody=document.createElement("div");
		cardBody.classList.add("card-body")
		//image
		var imageElement=document.createElement("img");
		imageElement.src=value.image;
		imageElement.classList.add("img-responsive")
		imageElement.alt=value.name;
		//Name
		var name=document.createElement("h2");
		name.textContent=value.name;
		name.classList.add("text-center","text-primary")
		//Price
		var price=document.createElement("p");
		price.classList.add("text-secondary","text-center","text-block")
		price.innerHTML="<s>₹ "+value.price+" /-</s>";
		//originalprice
		var oprice=document.createElement("p");
		oprice.textContent=value.originalPrice;
		oprice.classList.add("text-center","text-danger")
		//Button
		var buttonParent=document.createElement("div");
		buttonParent.classList.add("d-grid","gap-2");
		var button=document.createElement("button");
		button.classList.add("btn","btn-block","btn-primary");
		button.textContent="Add to cart"
		
		buttonParent.append(button)
		cardBody.append(imageElement)
		cardBody.append(name)
		cardBody.append(price)
		cardBody.append(oprice)
		cardBody.append(buttonParent)
		card.append(cardBody)
		column.append(card)
	})
}
