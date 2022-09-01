const BASE_URL = 'https://dog.ceo/api/breeds/image/random';

const caoBtn = document.getElementById('mudar-cao');

const getCaes = async () => {

    try {

        const data = await fetch(BASE_URL);

        const json = await data.json();

        return json.message;

        }catch(e) {

        console.log(e.message);

    }

};

const loadImg = async () => {

    const caoImg = document.getElementById('cao');

    caoImg.src = await getCaes();

};

caoBtn.addEventListener('click', loadImg);

loadImg();

console.log(getCaes())

/*API offline:
const BASE_URL = 'https://thatcopy.pw/catapi/rest/';
const catBtn = document.getElementById('change-cat');

const getCats = async () => {
		const data = await fetch(BASE_URL)
		.then((res) => res.json())
		.catch((e) => console.log(e));

		return data.webpurl;
};

const loadImg = async () => {
	const catImg = document.getElementById('cat');
	catImg.src = await getCats();
};

catBtn.addEventListener('click', loadImg);

loadImg();

ou:

const BASE_URL = 'https://thatcopy.pw/catapi/rest/';
const catBtn = document.getElementById('change-cat');

const getCats = async () => {
	try {
		const data = await fetch(BASE_URL);
		const json = await data.json();

		return json.webpurl;
	} catch (e) {
		console.log(e.message);
	}
};

const loadImg = async () => {
	const catImg = document.getElementById('cat');
	catImg.src = await getCats();
};

catBtn.addEventListener('click', loadImg);

loadImg();*/