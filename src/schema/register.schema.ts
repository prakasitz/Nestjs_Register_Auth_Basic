import * as mongoose from 'mongoose';

export const RegisterSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  countryCode: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'master-country', //collection name
  },
  username: {
    type: String,
    unique: true,
  },
  password: String,
});

export interface Register extends mongoose.Document {
  firstName: string;
  lastName: string;
  countryCode: mongoose.Types.ObjectId;
  username: string;
  password: string;
}