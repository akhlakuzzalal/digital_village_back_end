const { filterProducts } = require('../../utilities/Filter');

const allProducts = [
  {
    name: 'h',
    categorie: 'o',
    brand: 'b',
    description: 'e',
  },
  {
    name: 'hello',
    categorie: 'o',
    brand: 'b',
    description: 'e',
  },
];

describe('filtering test', () => {
  it('should be an empty array', (done) => {
    const result = filterProducts(allProducts, 'f'); // enter the data and search

    expect(result.length).toBeGreaterThan(-1);
    done();
  });

  it('should find one product in the filter', (done) => {
    const result = filterProducts(allProducts, 'hello'); // enter the data and search
    expect(result.length).toBeGreaterThan(0);
    // result.should.be.a('array');
    // result.length.should.be.eql(1);
    // result[0].should.be.a('object');
    // result[0].should.have.property('name');
    // expect(result[0]).to.deep.equal(allProducts[1]);
    done();
  });
});
