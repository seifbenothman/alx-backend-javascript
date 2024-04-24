function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
	const responseData = { message: "Dummy response from API"};
	resolve(responseData);
      }, 1000);
    });
}

export default getResponseFromAPI;
