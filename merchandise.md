---
layout: page
title: Merchandise
permalink: /merchandise/
---


<form>
	<div>
		<h1 style="display: inline-block; text-align: left;">
			Our Products
		</h1>
		<span class="cart-img-wrapper">
			<img class="cart-img" src="{{ "/assets/img/cart.png" | relative_url }}" alt="Cart">
		</span>
	</div>
	<br>
	<div>
		<div class="product-div-wrapper">
			<img class="product-img-wrapper" src="{{ "/assets/img/t-shirt.jpg" | relative_url }}" alt="T-shirt">
			<p class="product-description">
				T-shirt<br>
				RM 29.90
			</p>
			<div class="counter-wrapper" data-item="shirt">
				<div class="counter-number">
					<form>
						<input type="text" name="tshirt" id="tshirt" style="text-align: center;" value="0"/>
					</form>
				</div>
				<input type="submit" class="btn btn-default" id="tshirt-submit" style="padding: 10px; width: 60%;" value="Add to cart">
			</div>
		</div>
		<div class="product-div-wrapper">
			<img class="product-img-wrapper" src="{{ "/assets/img/sticker.jpg" | relative_url }}" alt="Sticker">
			<p class="product-description">
				Sticker<br>
				RM 2.90
			</p>	
			<div class="counter-wrapper">
				<div class="counter-number">
					<input type="text" name="sticker" id="sticker" style="text-align: center;" value="0"/>
				</div>
				<input type="submit"  class="btn btn-default" id="sticker-submit" style="padding: 10px; width: 60%;" value="Add to cart">
			</div>
		</div>
	</div>
</form>



<style type="text/css">
.product-description{
	padding-top: 15px;
	font-weight: bold;
	text-align: center;	
}

.cart-img{
	width: 40px;
	height: 40px;
}

.cart-img-wrapper{
	display: inline-block;
	float: right;
}

.counter-wrapper{
	text-align: center;
}

.counter-number{
	padding-left: 15px; 
	padding-right: 15px; 
	border-style: solid;
	border-width: 1px 1px; 
	border-color:  #343851; 
	width: 20%;
	text-align: center;
	margin: auto;
	margin-bottom: 10px;
}

@media screen and (min-width: 769px){
	.product-div-wrapper{
		display: inline-block;
		vertical-align: top;
		width: 30%;
		height: 350px;
		border-color: #343851;
		border-radius: 15px;
		border-style: groove;
		border-width: 3px;
		margin-right: 50px;
		padding-bottom: 70px;
	}

	.product-img-wrapper{
		display: block;
		padding-top: 10px;
		height: 65%;
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
		margin-top: 20px;
		padding-bottom: 70px;
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