
import chai from 'chai';
import chaihttp from 'chai-http';
import * as app from '../src/server';

chai.use(chaihttp)
chai.should();

  describe('Test singup api endpoint' , () => {
    it('it allows user to sign up', (done) => {
      chai.request(app)
      .post('/api/v1/auth/signUp')
      .send({
        email : 'bstwagimtu.edu' ,
        firstName : 'Blaise' ,
        lastName : 'Twagirayezu' ,
        password : 'Pascal' ,
        phoneNumber : '788163859' ,
        address : 'kigali' ,
        isAdmin : true ,
      })
      .end((err, res) => {
        if (err) return done(err);
        res.should.have.status(201);
        /*res.body.should.be.a('object');
        res.body.should.have.Property('status');
        res.body.to.haveOwnProperty('status').that.is.a('string');
        res.body.to.haveOwnProperty('data').that.is.an('object');
        res.body.should.have.all.keys('status', 'data');
        res.body.to.haveOwnProperty('status').that.equals('success');
        res.body.data.to.be.an('object');
        res.body.data.email.to.be.a('string');
        res.body.data.firstName.to.be.a('string');
        res.body.data.lastName.to.be.a('string');
        res.body.data.token.to.be.a('string');
        res.body.data.id.to.be.a('number');*/
        done();
      });
  });
});
