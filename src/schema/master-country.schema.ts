import mongoose from "mongoose";

export const MasterCountrySchema = new mongoose.Schema({
    country_code: {
      type: String,
      required: true,
      unique: true,
    },
    country_name: {
      type: String,
      required: true,
    },
});

export interface MasterCountry extends mongoose.Document {
    country_code: string;
    country_name: string;
  }