import mongoose from 'mongoose'
 
const Schema = mongoose.Schema;

const SignInSchema = new Schema({
  username: String,
  password: String,
});

const SignInModel = mongoose.model('Deck', SignInSchema);

export default SignInModel