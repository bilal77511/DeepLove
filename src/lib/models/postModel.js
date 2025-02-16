import { Schema, model, models } from "mongoose";

const emailSchema = new Schema({
    email: { type: String, required: true },
}, { timestamps: true, collection: "deeplove"});

export const EmailModel = models.Email || model("Email", emailSchema);