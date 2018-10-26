var product = {
	"tshirt":{
		name: "T-Shirt",
		qty : localStorage.tshirt,
		price : 29.9,
		total : localStorage.tshirt * 29.9
	},
}

const added = "You have added ";
const tocart = " to cart!";

if (document.getElementById("tshirt-submit") != null) {
    document.getElementById("tshirt-submit").onclick = function submitted() {
        var tshirtElement = document.getElementById("tshirt");

        localStorage.setItem("tshirt", 5);
        alert(added + localStorage.tshirt + " " + product.tshirt.name + tocart);
    };
