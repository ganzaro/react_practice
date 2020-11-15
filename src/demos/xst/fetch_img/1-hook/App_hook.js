import React, { useState } from "react";
import { render } from "react-dom";
import { fetchImage } from "../fetchImage";

const ImageFetcher = () => {
	const [isFetching, setFetching] = useState(false);
	const [isError, setError] = useState(false);
	const [isSuccess, setSuccess] = useState(false);
	const [image, setImage] = useState(null);

	const clickHandler = e => {
		if (isFetching) {
			return;
		}

		setFetching(true);
		fetchImage()
			.then(response => {
				setSuccess(true);
				setImage(response);
			})
			.catch(() => {
				setError(true);
			})
			.finally(() => {
				setFetching(false);
			});
	};

	return (
		<section>
			{isFetching && <p>loading...</p>}
			{isSuccess && <img src={image} alt="" />}
			{isError && <p>An error occured</p>}
			<button onClick={clickHandler}>Get Image</button>
		</section>
	);
};

const rootElement = document.getElementById("root");

render(<ImageFetcher />, rootElement);
