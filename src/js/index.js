// import {baseUrl} from "modul.js";

// const ifIndexPage = function () {
// 	const getAllPostsXhr = new XMLHttpRequest();
// 	getAllPostsXhr.open("GET", baseUrl);

// 	getAllPostsXhr.onreadystatechange = function () {
// 		if (getAllPostsXhr.readyState === 4 && getAllPostsXhr.status === 200) {
// 			let menuItems = JSON.parse(getAllPostsXhr.response);
// 			console.log(JSON.stringify(menuItems));
// 			menuItems.forEach(function (item) {
// 				let menuLi = document.createElement("li");
// 				menuLi.classList.add("nav-item");
// 				let menuA = document.createElement("a");
// 				menuA.classList.add("nav-link");
// 				menuLi.appendChild(menuA);
// 				menuA.innerText = item.title;
// 				menuA.href = "#";
// 				document.getElementsByClassName("navbar-nav")[0].appendChild(menuLi);
// 				// $(".navbar-nav").append(menuLi);
// 				menuA.onclick = function() {
// 					window.open("post"+item.id+".html", "_self")
// 				}
// 			});
// 		}
// 	}

// 	getAllPostsXhr.send();
// }

// const ifPostPage = function () {
// 	console.log(location);
// 	let postId = parseInt(document.body.dataset.post, 10);
// 	const xhr = new XMLHttpRequest();
// 	xhr.open("GET", baseUrl+postId);

// 	xhr.onreadystatechange = function () {
// 		if (xhr.readyState === 4 && xhr.status === 200) {
// 			let colMd = document.createElement("div");
// 			colMd.classList.add("col-md-3");
// 			document.getElementsByClassName("row")[0].appendChild(colMd);

// 			let card = document.createElement("div");
// 			card.classList.add("card");
// 			colMd.appendChild(card);

// 			let cardBody = document.createElement("div");
// 			cardBody.classList.add("card-body");
// 			card.appendChild(cardBody);

// 			let title = document.createElement("h5");
// 			title.classList.add("card-title");
// 			cardBody.appendChild(title);

// 			let par = document.createElement("p");
// 			par.classList.add("card-text");
// 			cardBody.appendChild(par);

// 			let post = JSON.parse(xhr.response);
// 			par.innerText = post.text;
// 			title.innerText = post.title;

// 		}
// 	}

// 	xhr.send();
// }

// window.addEventListener("load", function() {
// 	const isIndex = location.href.includes("index");
// 	isIndex ? ifIndexPage() : ifPostPage();

// })


import {baseUrl} from "module.js";

const ifIndexPage = function () {
	const getAllPostsXhr = $.get(baseUrl, function(menuItems) {
		menuItems.forEach(function (item) {
			let li = $( "<li></li>" ).addClass("nav-item");
			li.appendTo( ".navbar-nav" );

			let a = $( "<a></a>" ).addClass("nav-link")
			.text(item.title)
			.attr("href","#")
			.on({
				click: function( event ) {
					window.open("post"+item.id+".html", "_self")
				}
			})

			a.appendTo(li);

		});
	});
}

	const ifPostPage = function () {
		let postId = parseInt($("body").data("post"));
		const xhr = $.get(baseUrl + postId, function(post) {
			let colMd = $( "<div></div>" ).addClass( "col-md-3" );
			colMd.appendTo( ".row" );

			let card = $( "<div></div>" ).addClass( "card" );
			card.appendTo(colMd);

			let cardBody = $( "<div></div>" ).addClass( "card-body" );
			cardBody.appendTo(card);

			let title = $( "<h5></h5>" ).addClass( "card-title" ).text(post.title);
			title.appendTo(cardBody);

			let par = $( "<p></p>" ).addClass( "card-text" ).text(post.text);

			par.appendTo(cardBody);

		});
	}

	$( window ).on('load', function() {
		const isIndex = $(location).attr('href').includes("index");
		isIndex ? ifIndexPage() : ifPostPage();
	});


























