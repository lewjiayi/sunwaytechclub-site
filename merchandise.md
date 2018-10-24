---
layout: page
title: Merchandise
permalink: /merchandise/
---


<div>
	<h1 style="display: inline-block; text-align: left;">
		Our Products
	</h1>
	<span class="cart-img-wrapper">
		<img class="cart-img" src="{{ "/assets/img/cart.png" | relative_url }}" alt="Cart">
	</span>
</div>


<div>
	<div class="product-div-wrapper">
		<img class="product-img-wrapper" src="{{ "/assets/img/t-shirt.jpg" | relative_url }}" alt="T-shirt">
		<p class="product-description">
			T-shirt<br>
			RM 29.90
		</p>
	</div>
	<div class="product-div-wrapper">
		<img class="product-img-wrapper" src="{{ "/assets/img/sticker.jpg" | relative_url }}" alt="Sticker">
		<p class="product-description">
			Sticker<br>
			RM 2.90
		</p>	
	</div>
</div>


<style type="text/css">
.product-description{
	padding-top: 30px;
	font-weight: bold;
	text-align: center;	
}

.cart-img{
	width: 50px;
	height: 50px;
}

.cart-img-wrapper{
	display: inline-block;
	float: right;
}


@media screen and (min-width: 769px){
	.product-div-wrapper{
		display: inline-block;
		vertical-align: top;
		width: 30%;
		height: 300px;
		border-color: #343851;
		border-radius: 15px;
		border-style: groove;
		border-width: 3px;
		margin-right: 50px;
	}

	.product-img-wrapper{
		display: block;
		padding-top: 20px;
		height: 70%;
		margin-left: auto;
		margin-right: auto;
	}

}

@media screen and (max-width: 768px){
	.product-div-wrapper{
		width: 100%;
		height: 300px;
		border-color: #343851;
		border-radius: 15px;
		border-style: groove;
		border-width: 3px;
		margin-right: 50px;
	}
	
	.product-img-wrapper{
		display: block;
		padding-top: 20px;
		height: 70%;
		margin-left: auto;
		margin-right: auto;
	}

}

</style>