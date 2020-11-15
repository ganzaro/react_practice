import image from "./cat1.jpg";

export const fetchImage = () =>
	new Promise(resolve => {
		setTimeout(() => {
			resolve(image);
		}, 2000);
	});
