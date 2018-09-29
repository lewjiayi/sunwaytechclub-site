---
layout: page
title: Contact Us
permalink: /contact/
---
<div style="text-align: center;">
	<h1 style="color: #343851;">Join Us</h1>
	<p>
		Join our discussion group at:<br>
		<div style="display: inline-block; vertical-align: top; width: 140px; height: 140px; padding-right: 50px">
			<a href="https://join.slack.com/t/sunwaytechclub/shared_invite/enQtNDI4MzAwMDk4ODgzLWM3MzMyZWY2NTRiMzhjNDNhN2Y5ZjY3ZDY1YWY1ZjVlYjI5M2UxZmJkMjljMjdjZmE1N2ZmMmM2ZjA0YzljYjQ" style="border: none;">
				<img src="{{ "/assets/img/slack.png" | relative_url }}" alt="SLACK">
			</a>
		</div>
		<div style="display: inline-block; vertical-align: top; width: 160px; height: 160px; padding-left: 50px">
			<a href="tg://join?invite=AEw0LkH7Xu4BRr0BVSXH9g" style="border: none;">
				<img src="{{ "/assets/img/telegram.png" | relative_url }}" alt="TELEGRAM">
			</a>
		</div>
	</p>
</div>
<div>
	<div class="form-wrapper">
		 <p align="justify">
		 	If you have any question, feel free to drop us a message. <br><br>
		 	If you don't get our reply shortly, we might just be stuck in the middle of coding something cool for you! <br><br>
			We will get back to you once we can. 
		</p>
		{% include form.html %}
	</div>
	<div class="contact-info-wrapper">
		<h2 style="color: #343851">Contact</h2>
		<p>Email: <a href="mailto:sunwaytechclub@gmail.com" style="border: none !important;">sunwaytechclub@gmail.com</a><br><br></p>
		<h2 style="color: #343851">Address</h2>
		<p>5, Jalan Universiti, Bandar Sunway, 47500 Subang Jaya, Selangor</p>
	</div>
</div>

{% include modal.html %}


<style type="text/css">
a{
	style="text-decoration: none !important;"
}
/*desktop*/
.form-wrapper{
	width: 50%;
	display: inline-block;
	text-align: justify;
}

.contact-info-wrapper{
	width: 35%;
	display: inline-block;
	vertical-align: top;
	float: right;
	border-left: 3px double #343851;
	padding-left: 3%;
	padding-bottom: 100px;
}

/*mobile*/
@media screen and (max-width: 768px) {
.form-wrapper{
	width: 100%;	
	text-align: justify;
}

.contact-info-wrapper{
	width: 100%;
	display: inline-block;
}
}
	
</style>