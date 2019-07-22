// import {testFunc} from 'function/testFunc';

const ifIndexPage = function () {
	const xhr = new XMLHttpRequest();
	xhr.open("GET", 'https://my-json-server.typicode.com/ha100790tag/baseBuildJS/posts');

	xhr.onreadystatechange = function () {
		if (xhr.readyState === 4 && xhr.status === 200) {
			let menuItems = JSON.parse(xhr.response);
			console.log(JSON.stringify(menuItems));
			menuItems.forEach(function (item) {
				let menuLi = document.createElement("li");
				menuLi.classList.add("nav-item");
				let menuA = document.createElement("a");
				menuA.classList.add("nav-link");
				menuLi.appendChild(menuA);
				menuA.innerText = item.title;
				menuA.href = "#";
				document.getElementsByClassName("navbar-nav")[0].appendChild(menuLi);
				menuA.onclick = function() {
					window.open("post"+item.id+".html", "_self")
				}
			});
		}
	}

	xhr.send();
}

const ifPostPage = function () {
	console.log(location);
	let postId = parseInt(document.body.dataset.post, 10);
	//console.log(postId);
	const xhr = new XMLHttpRequest();
	xhr.open("GET", 'https://my-json-server.typicode.com/ha100790tag/baseBuildJS/posts/'+postId);

	xhr.onreadystatechange = function () {
		if (xhr.readyState === 4 && xhr.status === 200) {
			let colMd = document.createElement("div");
			colMd.classList.add("col-md-3");
			document.getElementsByClassName("row")[0].appendChild(colMd);

			let card = document.createElement("div");
			card.classList.add("card");
			colMd.appendChild(card);

			let cardBody = document.createElement("div");
			cardBody.classList.add("card-body");
			card.appendChild(cardBody);

			let title = document.createElement("h5");
			title.classList.add("card-title");
			cardBody.appendChild(title);

			let par = document.createElement("p");
			par.classList.add("card-text");
			cardBody.appendChild(par);

			let post = JSON.parse(xhr.response);
			par.innerText = post.text;
			title.innerText = post.title;
			
		}
	}

	xhr.send();
}

window.addEventListener("load", function() {
	const isIndex = location.href.includes("index");
	isIndex ? ifIndexPage() : ifPostPage();

})