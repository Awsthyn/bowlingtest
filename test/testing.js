let chai = require('chai');
const expect = require('chai').expect;
chai.use(require('chai-http'));

const url = 'http://localhost:3000/bowling';

let case1 = 'XXXXXXXXXXXX';
let case2 = '9-9-9-9-9-9-9-9-9-9-';
let case3 = '5/5/5/5/5/5/5/5/5/5/5';
let case4 = '5162XXXXXXXXXX'

describe('POST: ', () => {
	it('12 strikes: 300', (done) => {
		chai.request(url)
			.post(`/?score=${case1}`)
			.end(function (err, res) {
				expect(res).to.have.status(200);
				expect(res.body).to.be.equal(300);
				done();
			});
	});
	it('10 pairs of 9 and miss: 90', (done) => {
		chai.request(url)
			.post(`/?score=${case2}`)
			.end(function (err, res) {
				expect(res).to.have.status(200);
				expect(res.body).to.be.equal(90);
				done();
			});
	});
	it('10 pairs of 5 and spare, with a final 5: 150', (done) => {
		chai.request(url)
			.post(`/?score=${case3}`)
			.end(function (err, res) {
				expect(res).to.have.status(200);
				expect(res.body).to.be.equal(150);
				done();
			});
	});
	it('1st frame: 5,1, 2nd frame: 6,2, then 10 strikes: 254', (done) => {
		chai.request(url)
			.post(`/?score=${case4}`)
			.end(function (err, res) {
				expect(res).to.have.status(200);
				expect(res.body).to.be.equal(254);
				done();
			});
	});
});
